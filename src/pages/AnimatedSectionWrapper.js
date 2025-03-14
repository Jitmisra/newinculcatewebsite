import React, { useEffect, useRef } from 'react';

const AnimatedSectionWrapper = ({ children, className, animationDelay = 0 }) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            currentRef.classList.add('visible');
          }, animationDelay);
          observer.unobserve(currentRef);
        }
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '-50px',
      }
    );
    
    if (currentRef) {
      currentRef.classList.add('hidden');
      observer.observe(currentRef);
    }
    
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
