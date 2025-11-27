import React from "react";

export default function Favicon() {
  React.useEffect(() => {
    // Remove existing favicons
    const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
    existingFavicons.forEach(link => link.remove());

    // Add apple touch icon
    const appleTouchIcon = document.createElement('link');
    appleTouchIcon.rel = 'apple-touch-icon';
    appleTouchIcon.sizes = '180x180';
    appleTouchIcon.href = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690ccd809e130d361a8b8899/4b2d0e52b_apple-touch-icon.png';
    document.head.appendChild(appleTouchIcon);

    // Add favicon 32x32
    const favicon32 = document.createElement('link');
    favicon32.rel = 'icon';
    favicon32.type = 'image/png';
    favicon32.sizes = '32x32';
    favicon32.href = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690ccd809e130d361a8b8899/eea4e0cda_favicon-32x32.png';
    document.head.appendChild(favicon32);

    // Add favicon 16x16
    const favicon16 = document.createElement('link');
    favicon16.rel = 'icon';
    favicon16.type = 'image/png';
    favicon16.sizes = '16x16';
    favicon16.href = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690ccd809e130d361a8b8899/10d777bf8_favicon-16x16.png';
    document.head.appendChild(favicon16);
  }, []);

  return null;
}