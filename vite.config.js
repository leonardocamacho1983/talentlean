import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// Plugin to inject preload hints for critical resources
function injectPreloadPlugin() {
  return {
    name: 'inject-preload',
    transformIndexHtml(html, { bundle }) {
      if (!bundle) return html;

      const preloadLinks = [];

      // Find critical CSS and JS files
      for (const [fileName, chunk] of Object.entries(bundle)) {
        // Preload main CSS with high priority
        if (fileName.includes('index') && fileName.endsWith('.css')) {
          preloadLinks.push(`<link rel="preload" href="/${fileName}" as="style" fetchpriority="high" />`);
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
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
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
    },

    // Minification settings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
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