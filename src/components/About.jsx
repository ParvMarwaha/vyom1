import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // In static mode (?static) show the final number straight away, no count-up
  const isStatic = typeof document !== 'undefined' && document.documentElement.classList.contains('static-mode');
  const [value, setValue] = useState(isStatic ? to : from);

  useEffect(() => {
    if (isInView && !isStatic) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          setValue(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, isStatic, from, to, duration]);

  return <span ref={ref}>{value}{suffix}</span>;
};

const About = () => {
  return (
    <section className="w-full px-5 md:px-10 lg:px-[4.375rem] py-16 md:py-[7.5rem]">
      <div className="grid grid-cols-12 gap-8">
        
        {/* Left Column - Section Title */}
        <motion.div 
          className="col-span-12 md:col-span-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-[0.875rem]">
            <div className="w-[1.375rem] h-[0.125rem] bg-[#6c7280]"></div>
            <span className="text-[1.25rem] font-geom font-normal text-[#6c7280] tracking-[-0.0625rem] uppercase">
              ABOUT VYOM
            </span>
          </div>
        </motion.div>
        
        {/* Right Column - Content */}
        <div className="col-span-12 md:col-span-8">
          <motion.h3 
            className="text-3xl sm:text-4xl md:text-[3rem] leading-[1.2] tracking-[-0.15rem] text-black font-geom font-normal max-w-[43.75rem]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Built on experience.<br />Focused on what&rsquo;s next.
          </motion.h3>
          
          <motion.p 
            className="mt-8 md:mt-[5.125rem] text-lg md:text-[1.5rem] leading-snug tracking-tight text-black font-sans font-normal max-w-[59.8125rem]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            With decades of experience across architecture, engineering and construction, we bring clarity to complex challenges. Our integrated expertise and thoughtful approach enable us to deliver efficient, reliable solutions that create lasting value for people, businesses and communities.
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            className="mt-12 md:mt-[4.625rem] flex flex-wrap xl:flex-nowrap gap-8 md:gap-[4.125rem] xl:gap-[2.5rem] justify-start md:justify-between items-end"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.4 }
              }
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="flex flex-col gap-[0.9375rem] md:gap-[1.9375rem]">
              <div className="text-4xl md:text-[3rem] leading-none tracking-[-0.09rem] text-black font-sans font-normal">
                <AnimatedCounter to={1000} duration={2} suffix="+" />
              </div>
              <div className="text-[1.125rem] md:text-[1.25rem] leading-tight tracking-[-0.0625rem] text-black font-sans font-normal">Projects delivered<br />across various sectors</div>
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="w-[0.0625rem] h-[8.3125rem] bg-[#e5e7eb] hidden xl:block"></motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="flex flex-col gap-[0.9375rem] md:gap-[1.9375rem]">
              <div className="text-4xl md:text-[3rem] leading-none tracking-[-0.09rem] text-black font-sans font-normal">
                <AnimatedCounter to={25} duration={2} suffix="+" />
              </div>
              <div className="text-[1.125rem] md:text-[1.25rem] leading-tight tracking-[-0.0625rem] text-black font-sans font-normal">Years of<br />Experience</div>
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="w-[0.0625rem] h-[8.3125rem] bg-[#e5e7eb] hidden xl:block"></motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="flex flex-col gap-[0.9375rem] md:gap-[1.9375rem]">
              <div className="text-4xl md:text-[3rem] leading-none tracking-[-0.09rem] text-black font-sans font-normal">
                <AnimatedCounter to={60} duration={2} suffix="+" />
              </div>
              <div className="text-[1.125rem] md:text-[1.25rem] leading-tight tracking-[-0.0625rem] text-black font-sans font-normal">Architects<br />and Engineers</div>
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="w-[0.0625rem] h-[8.3125rem] bg-[#e5e7eb] hidden xl:block"></motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="flex flex-col gap-[0.9375rem] md:gap-[1.9375rem]">
              <div className="text-4xl md:text-[3rem] leading-none tracking-[-0.09rem] text-black font-sans font-normal">
                <AnimatedCounter to={15} duration={2} suffix="+" />
              </div>
              <div className="text-[1.125rem] md:text-[1.25rem] leading-tight tracking-[-0.0625rem] text-black font-sans font-normal">Sectors<br />Served Across</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
