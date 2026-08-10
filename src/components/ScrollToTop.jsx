import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return undefined;
    }

    // On a fresh full-page load (e.g. a cross-page "/#opportunities" link),
    // the target section doesn't exist until the loading screen finishes and
    // the route renders, so the browser's native one-shot hash-scroll misses
    // it. Poll briefly for the element instead.
    const id = hash.slice(1);
    let cancelled = false;
    let attempts = 0;

    const tryScroll = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      attempts += 1;
      if (attempts < 100) {
        setTimeout(tryScroll, 100);
      }
    };
    tryScroll();

    return () => {
      cancelled = true;
    };
  }, [pathname, hash]);

  return null;
}
