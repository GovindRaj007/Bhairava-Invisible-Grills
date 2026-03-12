import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to save and restore scroll position when navigating
 * Saves scroll position when leaving a page
 * Restores scroll position when returning via browser back button
 */
export function useScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    // Restore scroll position when returning to the page
    const restoreScroll = () => {
      const savedScroll = sessionStorage.getItem(`scroll-${location.pathname}`);
      if (savedScroll) {
        const scrollPos = JSON.parse(savedScroll);
        window.scrollTo(0, scrollPos);
      }
    };

    // Delay restoration to allow page to render
    const timer = setTimeout(restoreScroll, 0);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Save scroll position before leaving
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem(`scroll-${location.pathname}`, JSON.stringify(window.scrollY));
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [location.pathname]);
}
