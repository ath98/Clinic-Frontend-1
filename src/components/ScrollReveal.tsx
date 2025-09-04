import React, { useEffect, useRef, Children } from 'react';
interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-right' | 'zoom-in';
  delay?: number;
  threshold?: number;
  className?: string;
}
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add(`animate-${animation}`);
        }, delay);
        observer.unobserve(entry.target);
      }
    }, {
      threshold,
      rootMargin: '0px 0px -100px 0px'
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animation, delay, threshold]);
  return <div ref={ref} className={`opacity-0 ${className}`} style={{
    willChange: 'opacity, transform',
    transitionDuration: '0.8s',
    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  }}>
      {children}
    </div>;
};
export const ScrollRevealGroup: React.FC<{
  children: ReactNode[];
  animation?: 'fade-in' | 'slide-up' | 'slide-right' | 'zoom-in';
  staggerDelay?: number;
  threshold?: number;
  className?: string;
}> = ({
  children,
  animation = 'fade-in',
  staggerDelay = 150,
  threshold = 0.1,
  className = ''
}) => {
  return <>
      {Children.map(children, (child, index) => <ScrollReveal key={index} animation={animation} delay={index * staggerDelay} threshold={threshold} className={className}>
          {child}
        </ScrollReveal>)}
    </>;
};