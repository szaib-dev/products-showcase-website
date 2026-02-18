"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook for GSAP scroll-triggered animations.
 * Usage:
 *   const ref = useScrollReveal<HTMLDivElement>({ y: 60, duration: 0.8 });
 *   <div ref={ref}>...</div>
 */
export function useScrollReveal<T extends HTMLElement>(
  options: {
    y?: number;
    x?: number;
    scale?: number;
    duration?: number;
    delay?: number;
    start?: string;
  } = {}
) {
  const ref = useRef<T>(null);
  const {
    y = 60,
    x = 0,
    scale = 1,
    duration = 0.8,
    delay = 0,
    start = "top 85%",
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y, x, scale: scale === 1 ? 1 : scale, opacity: 0 },
      {
        y: 0,
        x: 0,
        scale: 1,
        opacity: 1,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [y, x, scale, duration, delay, start]);

  return ref;
}

/**
 * Hook to stagger-animate children of a container on scroll.
 * Usage:
 *   const ref = useStaggerReveal<HTMLDivElement>({ stagger: 0.1 });
 *   <div ref={ref}><child /><child />...</div>
 */
export function useStaggerReveal<T extends HTMLElement>(
  options: {
    y?: number;
    stagger?: number;
    duration?: number;
    start?: string;
    childSelector?: string;
  } = {}
) {
  const ref = useRef<T>(null);
  const {
    y = 50,
    stagger = 0.08,
    duration = 0.7,
    start = "top 85%",
    childSelector = ":scope > *",
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll(childSelector);

    gsap.fromTo(
      children,
      { y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [y, stagger, duration, start, childSelector]);

  return ref;
}