import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroAnimation from './heroAnimation.json'; // local fallback, will try to use CDN if not present

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const bg = containerRef.current.querySelector('.hero-bg');
      const mid = containerRef.current.querySelector('.hero-mid');
      const fg = containerRef.current.querySelector('.hero-fg');

      // Parallax: move layers at different speeds on scroll
      gsap.to(bg, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6
        }
      });

      gsap.to(mid, {
        yPercent: -18,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.9
        }
      });

      gsap.to(fg, {
        yPercent: -28,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2
        }
      });

      // subtle entrance for hero content
      gsap.from(containerRef.current.querySelectorAll('.hero-content > *'), {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 85%' }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="hero relative overflow-hidden">
      <div className="hero-bg absolute inset-0 transform-gpu bg-[radial-gradient(ellipse_at_top_left,_#0f172a,_#311f92)]" aria-hidden />
      <div className="hero-mid absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="lottie-wrap w-2/3 max-w-3xl opacity-90">
          {/* Use a CDN Lottie JSON for an animated hero; fallback to local if available */}
          <Lottie animationData={heroAnimation} lottieRef={lottieRef} />
        </div>
      </div>

      <div className="hero-fg absolute inset-0" aria-hidden>
        <div className="gradient-overlay" />
      </div>

      <div className="hero-content relative z-20 text-center text-white px-6 py-28">
        <h1 className="text-5xl font-extrabold leading-tight">Hi, I’m Lester</h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto">I build delightful, high-performance web experiences — animations, interactions and thoughtful design.</p>
        <a href="#projects" className="mt-8 inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform">See my work</a>
      </div>

      <div className="hero-particles absolute inset-0 pointer-events-none z-10" />
    </section>
  );
};

export default Hero;
