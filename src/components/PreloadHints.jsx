import React from "react";

export default function PreloadHints() {
  React.useEffect(() => {
    // Preconnect to third-party origins
    const preconnects = [
      { href: "https://fonts.googleapis.com", crossOrigin: false },
      { href: "https://fonts.gstatic.com", crossOrigin: true },
      { href: "https://www.googletagmanager.com", crossOrigin: false },
    ];

    preconnects.forEach(({ href, crossOrigin }) => {
      if (!document.querySelector(`link[rel="preconnect"][href="${href}"]`)) {
        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = href;
        if (crossOrigin) {
          link.crossOrigin = "anonymous";
        }
        document.head.appendChild(link);
      }
    });

    // Preload fonts
    const fontPreload = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
    if (!document.querySelector(`link[rel="preload"][href="${fontPreload}"]`)) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "style";
      link.href = fontPreload;
      document.head.appendChild(link);
    }

    // DNS prefetch for additional performance
    const dnsPrefetch = ["https://www.google-analytics.com"];
    dnsPrefetch.forEach((href) => {
      if (!document.querySelector(`link[rel="dns-prefetch"][href="${href}"]`)) {
        const link = document.createElement("link");
        link.rel = "dns-prefetch";
        link.href = href;
        document.head.appendChild(link);
      }
    });
  }, []);

  return null;
}