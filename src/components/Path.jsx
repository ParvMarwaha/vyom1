import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const pathCards = [
  {
    letter: 'P',
    title: 'Purpose - Driven',
    desc: 'We think beyond the immediate brief, making decisions that create enduring value for our clients, communities, and the environment. By balancing performance, responsibility, and long-term impact, we build with the future in mind.',
    imgSrc: '/images/p.png'
  },
  {
    letter: 'A',
    title: 'Accountability',
    desc: 'We take ownership of our decisions and remain invested in every outcome we influence. We recognise our responsibility to our communities, our clients, our people, and our environment, acting with integrity, discipline, and working collaboratively to create lasting value.',
    imgSrc: '/images/a.png'
  },
  {
    letter: 'T',
    title: 'Transparency',
    desc: 'We communicate openly and honestly, sharing progress, challenges, decisions, and financial commitments with clarity. By keeping everyone informed, we create alignment, build trust, and enable confident decision-making.',
    imgSrc: '/images/t.png'
  },
  {
    letter: 'H',
    title: 'Human - Centricity',
    desc: 'We believe the best outcomes are created together. By listening deeply, embracing diverse perspectives, and collaborating across departments, we create solutions that are thoughtful, integrated, and centred on the people they serve, creating a lasting positive impact on the lives and communities we touch.',
    imgSrc: '/images/h.png'
  }
];

const Path = () => {
  const timelineRef = useRef(null);
  
  // Track scroll progress of the right column to draw the line perfectly in sync
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="w-full bg-white relative">
      
      {/* Container: padding top ensures spacing before scroll starts */}
      <div className="w-full px-5 md:px-10 lg:px-[70px] pt-20 pb-40">
        
        {/* Desktop Sticky Layout / Mobile Vertical Layout */}
        <div className="flex flex-col lg:flex-row relative">
          
          {/* LEFT SIDE (Sticky on Desktop) */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-[20vh] h-fit lg:pr-12 mb-20 lg:mb-0">
            <motion.div 
              className="flex items-center gap-[14px] mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-[22px] h-[2px] bg-[#6c7280]"></div>
              <span className="text-[16px] md:text-[20px] font-geom font-normal text-[#6c7280] uppercase tracking-[-1px]">
                Our Approach
              </span>
            </motion.div>
            
            <motion.div 
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-[56px] leading-[1.1] text-black font-geom tracking-[-2.4px] mb-10">
                A collaborative approach. Intelligent outcomes.
              </h2>
              <p className="text-[18px] md:text-[20px] text-[#10131b] font-sans font-normal leading-[1.6] tracking-[-0.5px]">
                Our approach is built on collaboration, innovation and technical excellence. We integrate design thinking with engineering intelligence and construction expertise to deliver solutions that create lasting impact.
              </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE (Scrolling Timeline) */}
          <div className="w-full lg:w-1/2 relative pl-8 lg:pl-12" ref={timelineRef}>
            
            {/* The Vertical Line (sits at left-0 of the Right Column) */}
            <div className="absolute left-0 top-[14px] bottom-0 w-[2px] bg-gray-200"></div>
            
            <motion.div 
              className="hidden lg:block absolute left-0 top-[14px] w-[2px] bg-[#0D1775] origin-top z-10"
              style={{ height: lineHeight }}
            ></motion.div>

            {/* Path Items */}
            <div className="flex flex-col gap-24 lg:gap-40">
              {pathCards.map((card, idx) => (
                <motion.div 
                  key={card.letter} 
                  className="relative group"
                  initial="inactive"
                  whileInView="active"
                  viewport={{ margin: "-40% 0px -40% 0px" }}
                  variants={{
                    active: { opacity: 1, scale: 1 },
                    inactive: { opacity: 0.3, scale: 0.97 }
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  
                  {/* Timeline Node (The Blue Dot) - Perfectly aligned to line */}
                  <div className="absolute -left-[32px] lg:-left-[48px] top-[14px] w-[22px] h-[22px] bg-white transform -translate-x-[10px] z-20 flex items-center justify-center">
                    <motion.div 
                      className="w-[14px] h-[14px] rounded-full bg-[#0D1775]"
                      variants={{
                        active: { scale: 1, opacity: 1 },
                        inactive: { scale: 0, opacity: 0 }
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="pl-0">
                    {/* Letter & Title */}
                    <div className="mb-6">
                      <motion.span 
                        className="block text-[48px] md:text-[56px] leading-none font-sans font-normal mb-2 relative inline-block"
                        variants={{
                          active: { color: "#000000" },
                          inactive: { color: "#9CA3AF" }
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        {card.letter}
                        <motion.div 
                          className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#000000]"
                          variants={{
                            active: { opacity: 1, scaleX: 1 },
                            inactive: { opacity: 0.2, scaleX: 0.5 }
                          }}
                          transition={{ duration: 0.4 }}
                        ></motion.div>
                      </motion.span>
                      <motion.h3 
                        className="text-[20px] md:text-[24px] font-geom tracking-tight mt-6"
                        variants={{
                          active: { color: "#1f2937" }, // gray-800
                          inactive: { color: "#9ca3af" } // gray-400
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        {card.title}
                      </motion.h3>
                    </div>

                    {/* Description */}
                    <p className="text-[16px] text-gray-500 leading-[1.6] font-sans mb-10">
                      {card.desc}
                    </p>

                    {/* Image */}
                    <div className="w-full aspect-video md:aspect-[4/3] overflow-hidden rounded-[4px] shadow-sm bg-gray-100">
                      <motion.img 
                        src={card.imgSrc} 
                        alt={card.title}
                        className="w-full h-full object-cover"
                        variants={{
                          active: { filter: "grayscale(0%) blur(0px)", scale: 1 },
                          inactive: { filter: "grayscale(100%) blur(2px)", scale: 1.05 }
                        }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                  
                </motion.div>
              ))}
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Path;
