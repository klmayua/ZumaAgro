import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Fade in up animation
export const fadeInUp = (element: string | Element, config = {}) => {
  return gsap.from(element, {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out',
    ...config,
  });
};

// Stagger children animation
export const staggerChildren = (parent: string | Element, childSelector: string, config = {}) => {
  return gsap.from(`${parent} ${childSelector}`, {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power3.out',
    ...config,
  });
};

// Scroll trigger reveal
export const scrollReveal = (element: string | Element, config = {}) => {
  return gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    ...config,
  });
};

// Counter animation
export const animateCounter = (element: Element, target: number, duration = 2) => {
  const obj = { value: 0 };
  return gsap.to(obj, {
    value: target,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toLocaleString();
    },
  });
};
