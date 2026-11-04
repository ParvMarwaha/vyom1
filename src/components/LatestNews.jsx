import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../new_images/1.png';
import img2 from '../../new_images/2.png';
import img3 from '../../new_images/3.png';

const LatestNews = () => {
  return (
    <section className="w-full bg-[#14171a] py-16 md:py-[7.5rem]">
      <div className="w-full px-5 md:px-10 lg:px-[4.375rem] flex flex-col xl:flex-row gap-10 md:gap-16 xl:gap-8 justify-between">
        
        {/* Left Side Content */}
        <motion.div 
          className="flex flex-col items-start gap-[4rem] w-full xl:w-[20.5625rem] shrink-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-[0.875rem]">
            <div className="w-[1.375rem] h-[0.125rem] bg-white"></div>
            <span className="text-[1.25rem] font-geom font-normal text-white uppercase tracking-[-0.0625rem]">
              Latest in the News
            </span>
          </div>
          
          <h2 className="text-lg md:text-[1.5rem] leading-snug text-white font-geom font-normal tracking-[-0.075rem] max-w-[20.5625rem]">
            Stay updated with our latest industry insights, project milestones, and thought leadership articles shaping the future of AEC.
          </h2>
        </motion.div>

        {/* Right Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[1.875rem] w-full xl:flex-1 pb-4">
          
          {/* Card 1 */}
          <motion.div 
            className="group bg-[#D75E1D] rounded-[0.625rem] w-full h-[32.5rem] flex flex-col justify-between pt-[1.75rem] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.15)] cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="px-6 flex flex-col gap-[2.3125rem]">
              <div className="flex flex-col gap-[0.875rem]">
                <h3 className="text-[1.25rem] leading-[1.2] tracking-tighter text-white font-sans font-normal">
                  Sustainable Future:<br />Award-Winning Eco-Tower<br />Design Released.
                </h3>
                <div className="w-[7.8125rem] h-[0.0938rem] bg-white origin-left transition-transform duration-500 group-hover:scale-x-110"></div>
              </div>
              <p className="text-[1.25rem] leading-[1.2] tracking-[-0.0625rem] text-white font-sans font-normal">
                Construction is progressing steadily, with structural works approaching a major completion milestone.
              </p>
            </div>
            <div className="h-[14.75rem] w-full mt-auto rounded-b-[0.625rem] overflow-hidden">
              <img src={img1} alt="Eco-Tower Construction" className="w-full h-full object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-110" />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="group bg-[#0D1775] rounded-[0.625rem] w-full h-[32.5rem] flex flex-col justify-between pt-[1.4375rem] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.15)] cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="px-6 flex flex-col gap-[2.3125rem]">
              <div className="flex flex-col gap-[0.875rem]">
                <h3 className="text-[1.25rem] leading-[1.2] tracking-tighter text-white font-sans font-normal">
                  Infrastructure Focus:<br />Massive Urban Tunnel<br />Network Enters Final Phase.
                </h3>
                <div className="w-[7.8125rem] h-[0.0938rem] bg-white origin-left transition-transform duration-500 group-hover:scale-x-110"></div>
              </div>
              <p className="text-[1.25rem] leading-[1.2] tracking-[-0.0625rem] text-white font-sans font-normal">
                A thoughtfully designed residence that balances architectural clarity, material warmth and everyday living.
              </p>
            </div>
            <div className="h-[14.75rem] w-full mt-auto rounded-b-[0.625rem] overflow-hidden">
              <img src={img2} alt="Urban Tunnel" className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110" />
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="group bg-[#9B9C18] rounded-[0.625rem] w-full h-[32.5rem] flex flex-col justify-between pt-[1.4375rem] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.15)] cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="px-6 flex flex-col gap-[2.3125rem]">
              <div className="flex flex-col gap-[0.875rem]">
                <h3 className="text-[1.25rem] leading-[1.2] tracking-tighter text-white font-sans font-normal">
                  Design Unveiled:<br />New Contemporary Arts<br />Center Breaks Ground.
                </h3>
                <div className="w-[7.8125rem] h-[0.0938rem] bg-white origin-left transition-transform duration-500 group-hover:scale-x-110"></div>
              </div>
              <p className="text-[1.25rem] leading-[1.2] tracking-[-0.0625rem] text-white font-sans font-normal">
                The project continues to advance on schedule, bringing commercial, workplace and community spaces together.
              </p>
            </div>
            <div className="h-[14.75rem] w-full mt-auto rounded-b-[0.625rem] overflow-hidden">
              <img src={img3} alt="Contemporary Arts Center" className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110" />
            </div>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
};

export default LatestNews;
