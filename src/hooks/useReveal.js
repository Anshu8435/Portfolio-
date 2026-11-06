import { useEffect } from 'react';

export function useReveal(dependencies = []) {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const revealItems = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window && !reducedMotion) {
      const observer = new IntersectionObserver(
        (entries, currentObserver) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              currentObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -35px 0px' }
      );

      revealItems.forEach((item) => observer.observe(item));

      return () => {
        revealItems.forEach((item) => observer.unobserve(item));
      };
    } else {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    }
  }, dependencies);
}
