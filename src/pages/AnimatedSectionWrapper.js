import React, { useEffect, useRef } from 'react';

const AnimatedSectionWrapper = ({ children, className, animationDelay = 0 }) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If element is in view
        if (entry.isIntersecting) {
          // Add a small delay before adding the 'visible' class
          setTimeout(() => {
            currentRef.classList.add('visible');
          }, animationDelay);
          // Once animated, no need to observe anymore
          observer.unobserve(currentRef);
        }
      },
      {
        root: null, // viewport
        threshold: 0.1, // trigger when 10% of the element is visible
        rootMargin: '-50px', // trigger slightly before element enters viewport
      }
    );
    
    // Start observing the section
    if (currentRef) {
      currentRef.classList.add('hidden');
      observer.observe(currentRef);
    }
    
    // Clean up
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animationDelay]);
  
  return (
    <div ref={sectionRef} className={className ? `${className}` : ''}>
      {children}
    </div>
  );
};

export default AnimatedSectionWrapper;
