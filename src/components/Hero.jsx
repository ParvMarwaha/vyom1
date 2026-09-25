import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../../images/Frame 204.png';
import BrandHoverButton from './BrandHoverButton';

const Hero = () => {
  const { scrollY } = useScroll();
  // Move the background down slightly as the user scrolls down
  const imageY = useTransform(scrollY, [0, 1000], ['0%', '20%']);

  return (
    <section className="relative w-full h-[111.12vh] min-h-[600px] bg-brand-dark overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="VYOM Architecture Building" 
          className="w-full h-full object-cover object-center brightness-110 contrast-105 saturate-110"
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full px-5 flex flex-col items-center justify-center">
        <h1 className="text-center text-[36px] md:text-[42px] text-white font-geom font-normal leading-[1.3] tracking-tighter">
          Bringing Architecture,<br />
          Engineering and Delivery<br />
          Together.
        </h1>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-[15px]">
          <BrandHoverButton as="a" href="#" variant="primary" className="!font-normal !text-[#14171a]">
            START A PROJECT
          </BrandHoverButton>
          
          <BrandHoverButton as="a" href="#" variant="secondary" className="!font-normal">
            EXPLORE PROJECTS
          </BrandHoverButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
