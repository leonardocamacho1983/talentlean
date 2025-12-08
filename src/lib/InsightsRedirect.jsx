import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Redirects to /insights by forcing a full page reload,
 * allowing Vercel rewrites to proxy to Ghost CMS
 */
function InsightsRedirect() {
  const location = useLocation();

  useEffect(() => {
    // Force full page reload to trigger Vercel rewrite
    window.location.replace(location.pathname + location.search + location.hash);
  }, [location]);

  // Show loading state while redirecting
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
    </div>
  );
}

export default InsightsRedirect;
