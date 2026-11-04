import React from 'react';
import { motion } from 'framer-motion';
import BrandHoverButton from './BrandHoverButton';
import careersImg from '../../images/careers.png';

const Careers = () => {
  return (
    <section className="w-full bg-[#1e1e1e] py-16 md:py-[7.5rem]">
      <div className="w-full px-5 md:px-10 lg:px-[4.375rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[3.75rem] items-center">

        {/* Left: label, heading, description, CTA */}
        <div className="lg:col-span-6 flex flex-col gap-[1.75rem] w-full">
          {/* Section Label */}
          <motion.div
            className="flex items-center gap-[0.875rem] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-[1.375rem] h-px bg-white shrink-0" />
            <p className="font-geom font-normal text-[1.25rem] text-white tracking-[-0.0625rem] uppercase">
              CAREERS
            </p>
          </motion.div>

          {/* Heading & Description */}
          <motion.div
            className="flex flex-col gap-[1.75rem] w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-geom font-normal text-4xl md:text-[3rem] text-white tracking-[-0.15rem] leading-tight">
              Work on Projects<br />That Shape the World.
            </h2>
            <div className="flex flex-col gap-[1.75rem] items-start w-full">
              <p className="font-sans font-normal text-[1.25rem] text-white tracking-[-0.0625rem] leading-[1.45] max-w-[35rem]">
                Join a multidisciplinary team working on complex projects across architecture, engineering and construction, where your expertise contributes to real-world solutions and meaningful outcomes.
              </p>
              <BrandHoverButton as="a" href="#" variant="primary" className="!font-normal !px-[1.25rem]">
                JOIN OUR TEAM
              </BrandHoverButton>
            </div>
          </motion.div>
        </div>

        {/* Right: image */}
        <motion.div
          className="lg:col-span-6 w-full h-[18.75rem] md:h-[25rem] lg:h-[clamp(23.75rem,28.8vw,32.5rem)] rounded-[0.625rem] overflow-hidden relative"
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
