import React from "react";

export default function Favicon() {
  React.useEffect(() => {
    // Function to generate a simple TL favicon using canvas
    const generateFavicon = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');

      // Background gradient (teal)
      const gradient = ctx.createLinearGradient(0, 0, 64, 64);
      gradient.addColorStop(0, '#14b8a6'); // teal-500
      gradient.addColorStop(1, '#0d9488'); // teal-600
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);

      // Draw "TL" text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 32px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('TL', 32, 32);

      return canvas.toDataURL('image/png');
    };

    const faviconUrl = generateFavicon();

    // Remove existing favicons
    const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
    existingFavicons.forEach(link => link.remove());

    // Add apple touch icon
    const appleTouchIcon = document.createElement('link');
    appleTouchIcon.rel = 'apple-touch-icon';
    appleTouchIcon.sizes = '180x180';
    appleTouchIcon.href = faviconUrl;
    document.head.appendChild(appleTouchIcon);

    // Add favicon 32x32
    const favicon32 = document.createElement('link');
    favicon32.rel = 'icon';
    favicon32.type = 'image/png';
    favicon32.sizes = '32x32';
    favicon32.href = faviconUrl;
    document.head.appendChild(favicon32);

    // Add favicon 16x16
    const favicon16 = document.createElement('link');
    favicon16.rel = 'icon';
    favicon16.type = 'image/png';
    favicon16.sizes = '16x16';
    favicon16.href = faviconUrl;
    document.head.appendChild(favicon16);
  }, []);

  return null;
}
