import { useRef, useEffect } from "react";

export function useFadeInOnScroll() {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadein");
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      threshold: 0.2,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return ref;
}
