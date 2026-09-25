import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Using img3 as architecture image for now, and the generated ones for others
import imgArch from '../../new_images/3.png';
const imgEng = '/images/engineering.jpg';
const imgConst = '/images/construction.jpg';

const servicesData = [
  {
    id: 'architecture',
    number: '01',
    subTitle: 'Adaptive',
    title: 'Architecture',
    desc: 'Thoughtful spaces shaped by context, purpose and human experience.',
    bgColor: 'bg-[#0D1775]', // Deep Navy
    textColor: 'text-white',
    buttonColor: 'bg-[#0D1775]', // Changed from white to blue as per user request
    buttonIconColor: 'text-white',
    activeLineColor: 'bg-white/20',
    inactiveLineColor: 'bg-gray-200',
    image: imgArch,
    capabilities: ['Building Design', 'Urban Design', 'Interior Design']
  },
  {
    id: 'engineering',
    number: '02',
    subTitle: 'Efficient',
    title: 'Engineering',
    desc: 'Intelligent systems designed for performance, efficiency and long-term resilience.',
    bgColor: 'bg-[#D75E1D]', // Terracotta
    textColor: 'text-white',
    buttonColor: 'bg-[#D75E1D]',
    buttonIconColor: 'text-white',
    activeLineColor: 'bg-white/20',
    inactiveLineColor: 'bg-gray-200',
    image: imgEng,
    capabilities: [
      'Sustainability', 'Structural Engineering', 'Electrical Engineering', 
      'Public Health', 'Mechanical', 'Infrastructure', 'Process'
    ]
  },
  {
    id: 'construction',
    number: '03',
    subTitle: 'Conscious',
    title: 'Construction',
    desc: 'Precise execution that transforms design intent into enduring built environments.',
    bgColor: 'bg-[#9B9C18]', // Olive
    textColor: 'text-white',
    buttonColor: 'bg-[#9B9C18]',
    buttonIconColor: 'text-white',
    activeLineColor: 'bg-white/20',
    inactiveLineColor: 'bg-gray-200',
    image: imgConst,
    capabilities: ['Building Design', 'Urban Design', 'Interior Design']
  }
];

const Services = () => {
  const [activeId, setActiveId] = useState(null); // All closed by default
  const sectionRefs = useRef({});

  // Removed scrollIntoView useEffect as it fights with the height animation and causes jitter.

  return (
    <section className="w-full bg-white py-16 md:py-[120px]">
      <div className="w-full">
        
        {/* Section Header */}
        <motion.div 
          className="px-5 md:px-10 lg:px-[70px] mb-[69px] flex items-center gap-[14px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-[22px] h-[2px] bg-[#6c7280]"></div>
          <span className="text-[20px] font-geom font-normal text-[#6c7280] uppercase tracking-[-0.6px]">
            Our Services
          </span>
        </motion.div>

        {/* Accordion Rows */}
        <motion.div 
          className="w-full border-t border-gray-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {servicesData.map((service) => {
            const isActive = activeId === service.id;
            
            return (
              <div 
                key={service.id}
                ref={(el) => (sectionRefs.current[service.id] = el)}
                className={`group w-full scroll-mt-[120px] transition-colors duration-500 overflow-hidden cursor-pointer ${isActive ? service.bgColor : 'bg-white hover:bg-gray-50'}`}
                onClick={() => setActiveId(isActive ? null : service.id)}
              >
                <div className="w-full px-5 md:px-10 lg:px-[70px] relative">
                  
                  {/* Floating Toggle Button */}
                  <div 
                    className={`absolute right-5 md:right-10 lg:right-[70px] ${isActive ? 'top-[36px]' : 'top-1/2 -translate-y-1/2'} w-[41px] h-[41px] rounded-full flex items-center justify-center shrink-0 transition-all duration-500 z-20 ${isActive ? 'bg-white hover:scale-105' : `${service.buttonColor} group-hover:rotate-90`}`}
                    onClick={(e) => { e.stopPropagation(); setActiveId(isActive ? null : service.id); }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: isActive ? service.bgColor.replace('bg-[', '').replace(']', '') : '#fff' }}>
                      {isActive ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      )}
                    </svg>
                  </div>
                  
                  <AnimatePresence initial={false} mode="wait">
                    {!isActive ? (
                      <motion.div
                        key="collapsed"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="relative flex items-center justify-between py-[38px] overflow-hidden"
                      >
                        <div className="flex items-center gap-6 md:gap-[60px] w-full max-w-[85%] lg:max-w-[50%]">
                          <span className="text-[20px] tracking-[-1px] text-[#14171a] font-sans font-normal shrink-0">{service.number}</span>
                          <div className="flex flex-col items-start w-full">
                            <span className="text-[20px] tracking-[-1px] font-geom font-normal leading-tight" style={{ color: service.bgColor.replace('bg-[', '').replace(']', '') }}>{service.subTitle}</span>
                            <h3 className="text-3xl sm:text-4xl md:text-[48px] text-[#1b1b1b] font-sans font-normal tracking-[-2.4px] leading-none shrink-0">{service.title}</h3>
                          </div>
                        </div>
                        <div className="hidden lg:flex items-center pr-[70px] w-full max-w-[450px]">
                          <p className="text-[20px] tracking-[-1px] text-[#6e6d6a] font-sans font-normal leading-tight">{service.desc}</p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="expanded"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className={`pt-12 pb-16 flex flex-col md:flex-row gap-8 md:gap-12 justify-between ${service.textColor}`}>
                          
                          {/* Left: Title & Desc */}
                          <div className="flex gap-6 md:gap-[60px] w-full md:w-1/3 shrink-0">
                            <span className="text-[20px] tracking-[-1px] font-sans font-normal shrink-0">{service.number}</span>
                            <div className="flex flex-col gap-[38px] pt-1">
                              <div className="flex flex-col items-start">
                                <span className="text-[20px] tracking-[-1px] font-geom font-normal leading-tight opacity-90">{service.subTitle}</span>
                                <h3 className="text-3xl md:text-[48px] font-sans font-normal tracking-[-2.4px] leading-none">{service.title}</h3>
                              </div>
                              <p className="text-[20px] tracking-[-1px] font-sans font-normal max-w-[260px] opacity-90 leading-tight">{service.desc}</p>
                            </div>
                          </div>

                          {/* Center: Image */}
                          <div className="w-full md:w-1/3 h-[320px] rounded-[10px] overflow-hidden shrink-0">
                            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                          </div>

                          {/* Right: Capabilities List & Minus Button */}
                          <div className="w-full md:w-1/3 flex flex-col justify-between shrink-0 pl-4">
                            <div className="flex flex-col gap-4 relative pt-2">
                              {service.capabilities.map((cap, idx) => (
                                <div key={idx} className="flex flex-col">
                                  <div className="flex items-center gap-6 py-2">
                                    <span className="text-[12px] font-sans opacity-80 w-4">{String(idx + 1).padStart(2, '0')}</span>
                                    <span className="text-[14px] font-sans">{cap}</span>
                                  </div>
                                  <div className={`w-full h-px ${service.activeLineColor}`}></div>
                                </div>
                              ))}
                            </div>
                            
                            <div className="mt-12">
                              <button className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-[12px] font-sans tracking-tight transition-transform duration-300 hover:scale-105 hover:shadow-lg" style={{ color: service.bgColor.replace('bg-[', '').replace(']', '') }}>
                                Explore More
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                </div>
                {/* Bottom Border only visible when NOT active so it doesn't double up */}
                {!isActive && <div className="w-full h-px bg-gray-200"></div>}
              </div>
            );
          })}
          {/* Final bottom border when the last item is active to close off the accordion */}
          {activeId === servicesData[servicesData.length - 1].id && <div className="w-full h-px bg-gray-200"></div>}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
