import React from "react";
import { base44 } from "@/api/base44Client";

export default function Favicon() {
  const [faviconUrl, setFaviconUrl] = React.useState(null);

  React.useEffect(() => {
    const generateFavicon = async () => {
      try {
        const result = await base44.integrations.Core.GenerateImage({
          prompt: "A clean, modern favicon design with the letters 'TL' in bold white text on a teal gradient background (teal #0d9488 to darker teal). Square format, minimalist design, professional tech company style, sharp and crisp."
        });
        
        if (result?.url) {
          setFaviconUrl(result.url);
        }
      } catch (error) {
        console.error("Failed to generate favicon:", error);
      }
    };

    generateFavicon();
  }, []);

  React.useEffect(() => {
    if (faviconUrl) {
      // Remove existing favicons
      const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
      existingFavicons.forEach(link => link.remove());

      // Add new favicon
      const link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/png';
      link.href = faviconUrl;
      document.head.appendChild(link);

      // Add apple touch icon
      const appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      appleTouchIcon.href = faviconUrl;
      document.head.appendChild(appleTouchIcon);
    }
  }, [faviconUrl]);

  return null;
}