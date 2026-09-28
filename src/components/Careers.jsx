import React from 'react';
import { motion } from 'framer-motion';
import BrandHoverButton from './BrandHoverButton';
import careersImg from '../../images/careers.png';

const Careers = () => {
  return (
    <section className="w-full bg-[#1e1e1e] py-16 md:py-[120px]">
      <div className="w-full px-5 md:px-10 lg:px-[70px] mx-auto flex flex-col gap-[45px]">
        
        {/* Top Content */}
        <div className="flex flex-col gap-[28px] w-full">
          {/* Section Label */}
          <motion.div 
            className="flex items-center gap-[14px] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-[22px] h-px bg-white shrink-0" />
            <p className="font-geom font-normal text-[20px] text-white tracking-[-1px] uppercase">
              CAREERS
            </p>
          </motion.div>
          
          {/* Heading & Description */}
          <motion.div 
            className="flex flex-col gap-[28px] w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-geom font-normal text-4xl md:text-[48px] text-white tracking-[-2.4px] leading-tight">
              Build what comes next.
            </h2>
            <div className="flex flex-col gap-[28px] items-start w-full">
              <p className="font-sans font-normal text-[20px] text-white tracking-[-1px] leading-[1.45] max-w-[700px]">
                Join a team of architects, engineers, and builders creating intelligent environments with lasting impact.
              </p>
              <BrandHoverButton as="a" href="#" variant="primary" className="!font-normal px-[20px] py-[10px]">
                EXPLORE CAREERS
              </BrandHoverButton>
            </div>
          </motion.div>
        </div>

        {/* Image Container */}
        <motion.div 
          className="w-full h-[300px] md:h-[380px] lg:h-[clamp(380px,30vw,550px)] rounded-[10px] overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img 
            src={careersImg} 
            alt="Vyom team working together" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Careers;
