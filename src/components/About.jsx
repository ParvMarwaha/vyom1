import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          setValue(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{value}{suffix}</span>;
};

const About = () => {
  return (
    <section className="w-full px-5 md:px-10 lg:px-[70px] py-16 md:py-[120px]">
      <div className="grid grid-cols-12 gap-8">
        
        {/* Left Column - Section Title */}
        <motion.div 
          className="col-span-12 md:col-span-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-[14px]">
            <div className="w-[22px] h-[2px] bg-[#6c7280]"></div>
            <span className="text-[20px] font-geom font-normal text-[#6c7280] tracking-[-1px] uppercase">
              ABOUT
            </span>
          </div>
        </motion.div>
        
        {/* Right Column - Content */}
        <div className="col-span-12 md:col-span-8">
          <motion.h3 
            className="text-3xl sm:text-4xl md:text-[48px] leading-[1.2] tracking-[-2.4px] text-black font-geom font-normal max-w-[700px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Over 40 Years, designing, building, innovating
          </motion.h3>
          
          <motion.p 
            className="mt-8 md:mt-[82px] text-lg md:text-[24px] leading-snug tracking-tight text-black font-sans font-normal max-w-[957px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From master plans to infrastructure networks, buildings to entire urban ecosystems, 
            <span className="text-[#0D1775]"> VYOM brings architecture, engineering and technology </span> 
            together to shape environments that perform, endure and inspire. Through design, research and innovation, we create intelligent solutions for a rapidly evolving world.
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            className="mt-12 md:mt-[74px] flex flex-wrap lg:flex-nowrap gap-8 md:gap-[66px] justify-start md:justify-between items-end"
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
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="flex flex-col gap-[15px] md:gap-[31px]">
              <div className="text-4xl md:text-[48px] leading-none tracking-[-1.44px] text-black font-sans font-normal">
                <AnimatedCounter to={1000} duration={2} suffix="+" />
              </div>
              <div className="text-[18px] md:text-[20px] leading-tight tracking-[-1px] text-black font-sans font-normal">Projects delivered<br />across various sectors</div>
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="w-[1px] h-[133px] bg-[#e5e7eb] hidden lg:block"></motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="flex flex-col gap-[15px] md:gap-[31px]">
              <div className="text-4xl md:text-[48px] leading-none tracking-[-1.44px] text-black font-sans font-normal">
                <AnimatedCounter to={25} duration={2} suffix="+" />
              </div>
              <div className="text-[18px] md:text-[20px] leading-tight tracking-[-1px] text-black font-sans font-normal">Years of<br />Experience</div>
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="w-[1px] h-[133px] bg-[#e5e7eb] hidden lg:block"></motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="flex flex-col gap-[15px] md:gap-[31px]">
              <div className="text-4xl md:text-[48px] leading-none tracking-[-1.44px] text-black font-sans font-normal">
                <AnimatedCounter to={60} duration={2} suffix="+" />
              </div>
              <div className="text-[18px] md:text-[20px] leading-tight tracking-[-1px] text-black font-sans font-normal">Architects<br />and Engineers</div>
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="w-[1px] h-[133px] bg-[#e5e7eb] hidden lg:block"></motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="flex flex-col gap-[15px] md:gap-[31px]">
              <div className="text-4xl md:text-[48px] leading-none tracking-[-1.44px] text-black font-sans font-normal">
                <AnimatedCounter to={15} duration={2} suffix="+" />
              </div>
              <div className="text-[18px] md:text-[20px] leading-tight tracking-[-1px] text-black font-sans font-normal">Sectors<br />Served Across</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
