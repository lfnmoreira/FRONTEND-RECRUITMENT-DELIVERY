import { useState, useEffect, RefObject } from 'react';


const useIsOnViewportObserver = (ref: RefObject<HTMLElement>) => {
  const [isOnViewport, setIsOnViewport] = useState(false);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: [0.9, 1],
  }

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsOnViewport(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };

  }, [ref, options]);

  return isOnViewport;

};

export default useIsOnViewportObserver;