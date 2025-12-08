import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'
import viteCompression from 'vite-plugin-compression'

// Plugin to optimize critical CSS loading and preload hints
function injectPreloadPlugin() {
  return {
    name: 'inject-preload',
    transformIndexHtml(html, { bundle }) {
      if (!bundle) return html;

      const preloadLinks = [];
      let mainCssFile = null;

      // Find critical CSS and JS files
      for (const [fileName, chunk] of Object.entries(bundle)) {
        // Track main CSS file
        if (fileName.includes('index') && fileName.endsWith('.css')) {
          mainCssFile = fileName;
          // Preload main CSS with high priority and crossorigin for CORS matching
          preloadLinks.push(`<link rel="preload" href="/${fileName}" as="style" fetchpriority="high" crossorigin />`);
        }
        // Preload main JS entry with high priority
        if (fileName.includes('index') && fileName.endsWith('.js') && chunk.isEntry) {
          preloadLinks.push(`<link rel="modulepreload" href="/${fileName}" fetchpriority="high" />`);
        }
        // Preload critical vendor chunks (react)
        if (fileName.includes('react-vendor') && fileName.endsWith('.js')) {
          preloadLinks.push(`<link rel="modulepreload" href="/${fileName}" />`);
        }
      }

      // Convert blocking CSS to async loading
      if (mainCssFile) {
        const cssLinkPattern = new RegExp(`<link rel="stylesheet"[^>]*href="[^"]*${mainCssFile}"[^>]*>`, 'g');
        html = html.replace(cssLinkPattern, (match) => {
          // Convert to async loading with media="print" trick
          return match.replace(
            'rel="stylesheet"',
            'rel="stylesheet" media="print" onload="this.media=\'all\';this.onload=null"'
          ) + `\n    <noscript>${match}</noscript>`;
        });
      }

      // Inject preload links after noscript fonts, before GTM script
      const insertAfter = '</noscript>';
      const position = html.indexOf(insertAfter) + insertAfter.length;
      return html.slice(0, position) + '\n    <!-- Critical Resource Preloads -->\n    ' + preloadLinks.join('\n    ') + html.slice(position);
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    base44({
      // Support for legacy code that imports the base44 SDK with @/integrations, @/entities, etc.
      // can be removed if the code has been updated to use the new SDK imports from @base44/sdk
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true'
    }),
    react(),
    injectPreloadPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'og-image.svg'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg,gif,webp,woff,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      },
      manifest: {
        name: 'TalentLean',
        short_name: 'TalentLean',
        description: 'LatAm Staff Augmentation & Remote Developer Hiring',
        theme_color: '#14b8a6',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      }
    }),
    // Brotli compression (better than gzip)
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024, // Only compress files larger than 1KB
      deleteOriginFile: false
    }),
    // Gzip compression (fallback for older browsers)
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
      deleteOriginFile: false
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/insights': {
        target: 'https://ghost.talentlean.com',
        changeOrigin: true,
        rewrite: (path) => path,
        ws: true,
        cookieDomainRewrite: {
          'ghost.talentlean.com': 'localhost'
        },
        headers: {
          'X-Forwarded-Proto': 'https',
          'X-Forwarded-Host': 'ghost.talentlean.com'
        }
      }
    }
  },
  build: {
    // Enable source maps for debugging but compress them
    sourcemap: true,

    // Optimize chunk size
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: (id) => {
          // Vendor chunk for node_modules
          if (id.includes('node_modules')) {
            // Separate large libraries
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('@radix-ui')) {
              return 'radix-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'icons-vendor';
            }
            if (id.includes('@tanstack/query') || id.includes('@tanstack/react-query')) {
              return 'query-vendor';
            }
            if (id.includes('@vercel/analytics') || id.includes('@vercel/speed-insights')) {
              return 'vercel-vendor';
            }
            // All other node_modules
            return 'vendor';
          }
        },
        // Optimize asset naming for better caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
      // Aggressive tree-shaking
      treeshake: {
        moduleSideEffects: 'no-external',
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
    },

    // Minification settings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },

    // CSS code splitting
    cssCodeSplit: true,

    // CSS minification options
    cssMinify: true,

    // Enable tree-shaking for better optimization
    reportCompressedSize: false, // Faster builds

    // Target modern browsers for smaller bundles
    target: 'es2020',
  },
});