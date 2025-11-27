import { useEffect } from 'react';

/**
 * Lightweight component to set canonical URL for SEO
 * @param {string} path - The path for the canonical URL (e.g., "/", "/Pricing", "/FAQ")
 */
export default function CanonicalURL({ path = "/" }) {
  useEffect(() => {
    const canonicalUrl = `https://talentlean.com${path}`;

    // Remove existing canonical tag if present
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Create and add new canonical tag
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = canonicalUrl;
    document.head.appendChild(link);

    // Cleanup function to remove the canonical tag when component unmounts
    return () => {
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical && canonical.href === canonicalUrl) {
        canonical.remove();
      }
    };
  }, [path]);

  return null; // This component doesn't render anything
}
