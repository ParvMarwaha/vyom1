import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../new_images/1.png';
import img2 from '../../new_images/2.png';
import img3 from '../../new_images/3.png';

const LatestNews = () => {
  return (
    <section className="w-full bg-[#14171a] py-16 md:py-[120px]">
      <div className="w-full px-5 md:px-10 lg:px-[70px] flex flex-col xl:flex-row gap-10 md:gap-16 xl:gap-8 justify-between">
        
        {/* Left Side Content */}
        <motion.div 
          className="flex flex-col items-start gap-[64px] w-full xl:w-[329px] shrink-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-[14px]">
            <div className="w-[22px] h-[2px] bg-white"></div>
            <span className="text-[20px] font-geom font-normal text-white uppercase tracking-[-1px]">
              Latest in the News
            </span>
          </div>
          
          <h2 className="text-lg md:text-[24px] leading-snug text-white font-geom font-normal tracking-[-1.2px] max-w-[329px]">
            Stay updated with our latest industry insights, project milestones, and thought leadership articles shaping the future of AEC.
          </h2>
        </motion.div>

        {/* Right Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px] w-full xl:flex-1 pb-4">
          
          {/* Card 1 */}
          <motion.div 
            className="group bg-white rounded-[10px] w-full h-[520px] flex flex-col justify-between pt-[28px] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.15)] cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="px-6 flex flex-col gap-[37px]">
              <div className="flex flex-col gap-[14px]">
                <h3 className="text-[20px] leading-[1.2] tracking-tighter text-[#1b1b1b] font-geom font-normal transition-colors duration-300 group-hover:text-[#0D1775]">
                  Sustainable Future:<br />Award-Winning Eco-Tower<br />Design Released.
                </h3>
                <div className="w-[125px] h-[1.5px] bg-[#0D1775] origin-left transition-transform duration-500 group-hover:scale-x-110"></div>
              </div>
              <p className="text-[20px] leading-[1.2] tracking-[-1px] text-[#1b1b1b] font-sans font-normal">
                Construction is progressing steadily, with structural works approaching a major completion milestone.
              </p>
            </div>
            <div className="h-[236px] w-full mt-auto rounded-b-[10px] overflow-hidden">
              <img src={img1} alt="Eco-Tower Construction" className="w-full h-full object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-110" />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="group bg-white rounded-[10px] w-full h-[520px] flex flex-col justify-between pt-[23px] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.15)] cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="px-6 flex flex-col gap-[37px]">
              <div className="flex flex-col gap-[14px]">
                <h3 className="text-[20px] leading-[1.2] tracking-tighter text-[#1b1b1b] font-geom font-normal transition-colors duration-300 group-hover:text-[#D75E1D]">
                  Infrastructure Focus:<br />Massive Urban Tunnel<br />Network Enters Final Phase.
                </h3>
                <div className="w-[125px] h-[1.5px] bg-[#D75E1D] origin-left transition-transform duration-500 group-hover:scale-x-110"></div>
              </div>
              <p className="text-[20px] leading-[1.2] tracking-[-1px] text-[#1b1b1b] font-sans font-normal">
                A thoughtfully designed residence that balances architectural clarity, material warmth and everyday living.
              </p>
            </div>
            <div className="h-[236px] w-full mt-auto rounded-b-[10px] overflow-hidden">
              <img src={img2} alt="Urban Tunnel" className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110" />
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="group bg-white rounded-[10px] w-full h-[520px] flex flex-col justify-between pt-[23px] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.15)] cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="px-6 flex flex-col gap-[37px]">
              <div className="flex flex-col gap-[14px]">
                <h3 className="text-[20px] leading-[1.2] tracking-tighter text-[#1b1b1b] font-geom font-normal transition-colors duration-300 group-hover:text-[#9B9C18]">
                  Design Unveiled:<br />New Contemporary Arts<br />Center Breaks Ground.
                </h3>
                <div className="w-[125px] h-[1.5px] bg-[#9B9C18] origin-left transition-transform duration-500 group-hover:scale-x-110"></div>
              </div>
              <p className="text-[20px] leading-[1.2] tracking-[-1px] text-[#1b1b1b] font-sans font-normal">
                The project continues to advance on schedule, bringing commercial, workplace and community spaces together.
              </p>
            </div>
            <div className="h-[236px] w-full mt-auto rounded-b-[10px] overflow-hidden">
              <img src={img3} alt="Contemporary Arts Center" className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110" />
            </div>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
};

export default LatestNews;
