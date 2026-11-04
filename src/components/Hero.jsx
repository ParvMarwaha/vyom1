import React, { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import fddiChennai from '../../images/fddi-chennai.webp';
import BrandHoverButton from './BrandHoverButton';

// Headline, one array per line. Each word is revealed from behind a mask.
const HEADLINE = [
  ['Solving', 'Today’s', 'Complexity.'],
  ['Shaping', 'Tomorrow’s', 'Possibilities.'],
];

// Smooth "expo out" feel used across the whole intro
const EASE = [0.22, 1, 0.36, 1];

const Hero = () => {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);

  // --- Scroll: image drifts slower than the page, text lifts away and fades ---
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  // --- Mouse: very subtle depth shift on the photo (desktop only) ---
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 50, damping: 18, mass: 0.6 });

  const handleMouseMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * -26);
    my.set(((e.clientY - r.top) / r.height - 0.5) * -16);
  };

  // With reduced motion everything renders in its final state
  const from = (v) => (reduce ? false : v);

  let wordIndex = 0;

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen min-h-[37.5rem] bg-brand-dark overflow-hidden"
    >
      {/* Background image: zooms out into place, then drifts with scroll / mouse */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={from({ scale: 1.28, opacity: 0 })}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: EASE }}
      >
        <motion.div className="absolute inset-0" style={{ y: imageY }}>
          <motion.img
            src={fddiChennai}
            alt="FDDI Chennai campus by VYOM"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ x: sx, y: sy, scale: 1.03 }}
          />
        </motion.div>

        {/* Dark gradient at the bottom for text/button legibility */}
        <motion.div
          className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none"
          initial={from({ opacity: 0 })}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.5, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Intro curtain: wipes upward to reveal the photo (skipped for reduced motion / ?static) */}
      {!reduce && (
        <motion.div
          aria-hidden="true"
          className="hero-curtain absolute inset-0 z-20 bg-brand-dark origin-top pointer-events-none"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
        />
      )}

      {/* Content overlay: headline + CTAs bottom-left */}
      <motion.div
        className="absolute inset-x-0 bottom-[5.625rem] md:bottom-[6.25rem] z-10 px-5 md:px-10 lg:px-[4.375rem]"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <h1
          aria-label={HEADLINE.map((l) => l.join(' ')).join(' ')}
          className="text-left text-[2.125rem] sm:text-[2.75rem] lg:text-[3.75rem] text-white font-geom font-normal leading-[1.3] tracking-tighter"
        >
          {HEADLINE.map((line, li) => (
            <span key={li} className="block" aria-hidden="true">
              {line.map((word) => {
                const i = wordIndex++;
                return (
                  <span key={word} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
                    <motion.span
                      className="inline-block"
                      initial={from({ y: '110%', opacity: 0 })}
                      animate={{ y: '0%', opacity: 1 }}
                      transition={{ duration: 1.05, delay: 0.85 + i * 0.09, ease: EASE }}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        <div className="mt-10 md:mt-[3rem] flex flex-col sm:flex-row items-start sm:items-center gap-[0.9375rem]">
          {[
            <BrandHoverButton key="a" as="a" href="#" variant="primary" className="!font-normal !text-[#14171a]">
              DISCUSS A PROJECT
            </BrandHoverButton>,
            <BrandHoverButton key="b" as="a" href="#" variant="secondary" className="!font-normal">
              EXPLORE PROJECTS
            </BrandHoverButton>,
          ].map((btn, i) => (
            <motion.div
              key={i}
              initial={from({ y: 28, opacity: 0 })}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.7 + i * 0.14, ease: EASE }}
            >
              {btn}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
