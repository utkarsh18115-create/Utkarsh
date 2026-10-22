'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, CustomEase);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const style = getComputedStyle(document.documentElement);
    const token = (name: string) => style.getPropertyValue(`--${name}`).trim();
    const number = (name: string) => parseFloat(token(name));
    const ease = CustomEase.create('design-out', token('ease-out').replace('cubic-bezier(', '').replace(')', ''));
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const lenis = new Lenis({ autoRaf: false, anchors: true, duration: number('duration-slow') });
      lenis.on('scroll', ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      gsap.from('.hero-line', { yPercent: number('hero-reveal'), duration: number('duration-slow'), stagger: number('stagger'), ease });
      gsap.utils.toArray<HTMLElement>('.section-rule').forEach(rule => {
        gsap.from(rule, { scaleX: 0, transformOrigin: 'left', duration: number('duration-base'), ease, scrollTrigger: { trigger: rule, start: 'top 92%', once: true } });
      });
      let refreshFrame = 0;
      const observer = new ResizeObserver(() => {
        cancelAnimationFrame(refreshFrame);
        refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
      });
      document.querySelectorAll('.project-detail').forEach(element => observer.observe(element));
      document.fonts.ready.then(() => ScrollTrigger.refresh());
      return () => { observer.disconnect(); cancelAnimationFrame(refreshFrame); gsap.ticker.remove(tick); lenis.destroy(); };
    });
    media.add('(min-width: 900px) and (min-height: 650px) and (prefers-reduced-motion: no-preference)', () => {
      ScrollTrigger.create({ trigger: '.now-items', start: 'top 120px', end: 'bottom 72%', pin: '.now-pin', pinSpacing: false, invalidateOnRefresh: true });
      gsap.fromTo('.now-progress span', { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.now-items', start: 'top 72%', end: 'bottom 72%', scrub: true } });
    });
    media.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
      // any coarse pointer disables magnetism on hybrid touch devices too.
      if (window.matchMedia('(any-pointer: coarse)').matches) return;
      const wordmark = document.querySelector<HTMLElement>('.wordmark');
      if (!wordmark) return;
      const letters = [...wordmark.querySelectorAll<HTMLElement>('.magnetic-letter')];
      const radius = number('magnet-radius');
      const strength = number('magnet-strength');
      const reset = () => letters.forEach(letter => gsap.to(letter, { x: 0, y: 0, duration: number('duration-slow'), ease: token('elastic-return'), overwrite: true }));
      const move = (event: PointerEvent) => {
        if (event.pointerType !== 'mouse') return;
        letters.forEach(letter => {
          const rect = letter.getBoundingClientRect();
          const dx = event.clientX - (rect.left + rect.width / 2 - Number(gsap.getProperty(letter, 'x')));
          const dy = event.clientY - (rect.top + rect.height / 2 - Number(gsap.getProperty(letter, 'y')));
          const near = Math.hypot(dx, dy) < radius;
          gsap.to(letter, { x: near ? dx * strength : 0, y: near ? dy * strength : 0, duration: near ? number('duration-fast') : number('duration-slow'), ease: near ? ease : token('elastic-return'), overwrite: true });
        });
      };
      wordmark.addEventListener('pointermove', move);
      wordmark.addEventListener('pointerleave', reset);
      window.addEventListener('blur', reset);
      return () => { wordmark.removeEventListener('pointermove', move); wordmark.removeEventListener('pointerleave', reset); window.removeEventListener('blur', reset); gsap.killTweensOf(letters); gsap.set(letters, { clearProps: 'transform' }); };
    });
    return () => media.revert();
  }, []);
  return <>{children}</>;
}
