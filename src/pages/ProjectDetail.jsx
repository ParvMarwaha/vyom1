import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

// Mock data to match the project page or screenshot
const PROJECT_DATA = {
  id: 1,
  title: 'Skyline Residences',
  category: 'Residential',
  heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80',
  images: [
    'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
  ],
  stats: {
    'Location': 'Mumbai, Maharashtra',
    'Country/Region': 'India',
    'Client': 'Skyline Developers',
    'Site Area': '18,500 SQ M',
    'Built Up Area': '120,000 SQ M',
    'Project Cost': '₹ 2.5 Billion',
    'Completion': 'Expected 2025',
    'Scope': 'Architecture & Interiors'
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Parallax setup for Hero image
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] lg:h-[70vh] bg-black overflow-hidden">
        <motion.img 
          src={PROJECT_DATA.heroImage} 
          alt={PROJECT_DATA.title}
          style={{ y }}
          className="absolute -top-[20%] left-0 w-full h-[140%] object-cover object-center opacity-80"
        />
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
        
        {/* Title Content Positioned at Bottom */}
        <div className="absolute inset-x-0 bottom-0 pb-12 lg:pb-16">
          <div className="w-full px-5 md:px-10 lg:px-[70px]">
            <div className="max-w-[800px]">
              <Link to="/projects" className="inline-flex items-center gap-2 text-[14px] text-white/70 hover:text-white transition-colors uppercase tracking-widest font-medium mb-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back to Projects
              </Link>
              <h1 className="text-5xl md:text-[72px] font-geom font-medium text-white tracking-[-2px] leading-[1.1]">
                {PROJECT_DATA.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-5 md:px-10 lg:px-[70px] mt-16 md:mt-24 pb-32">
        
        {/* Main Content & Sidebar Grid (Ramp Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-6 relative">
          
          {/* Left Column: Flow of Content */}
          <div className="lg:col-span-7 flex flex-col gap-16 lg:gap-24">
            
            {/* Section 1: Project Brief */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[20px] font-geom font-medium text-[#0D1775] mb-6">
                The Brief
              </h2>
              <p className="text-[20px] md:text-[24px] font-sans text-[#10131B] leading-[1.6] tracking-[-0.5px]">
                The Skyline Residences project aims to redefine modern urban luxury in the heart of Mumbai. The client's vision was to maximize the 18,500 SQ M site area while ensuring residents have access to expansive green spaces and premium amenities. The challenge was to balance high-density capacity with an open, breathable architectural footprint.
              </p>
            </motion.section>

            {/* In-content image */}
            <div className="w-full rounded-2xl overflow-hidden shadow-sm">
              <img src={PROJECT_DATA.images[0]} alt="Project view" className="w-full h-auto object-cover" />
            </div>

            {/* Section 2: Vyom's Intervention & Expertise */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[20px] font-geom font-medium text-[#0D1775] mb-6">
                Vyom's Intervention
              </h2>
              <div className="space-y-8">
                <p className="text-[20px] md:text-[24px] font-sans text-black/70 leading-[1.6] tracking-[-0.5px]">
                  Vyom Studio brought a multidisciplinary approach combining architectural design and structural engineering. We introduced an innovative staggered-block typology that minimizes wind resistance for the high-rise structure while maximizing natural daylight for every unit. 
                </p>
                <p className="text-[20px] md:text-[24px] font-sans text-black/70 leading-[1.6] tracking-[-0.5px]">
                  By utilizing advanced Building Information Modeling (BIM) during the engineering phase, we were able to reduce material waste and optimize the structural grid, ensuring that the massive 120,000 SQ M built-up area was delivered efficiently without compromising on the luxury aesthetic.
                </p>
              </div>
            </motion.section>

            {/* In-content image */}
            <div className="w-full rounded-2xl overflow-hidden shadow-sm">
              <img src={PROJECT_DATA.images[1]} alt="Engineering detail" className="w-full h-auto object-cover" />
            </div>

            {/* Section 3: Final Result and Outcome */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[20px] font-geom font-medium text-[#0D1775] mb-6">
                Final Result & Outcome
              </h2>
              <p className="text-[20px] md:text-[24px] font-sans text-[#10131B] leading-[1.5] tracking-[-0.5px]">
                Currently ongoing, the project has already achieved the prestigious Green Building pre-certification. The outcome is a highly efficient, aesthetically striking development that remains strictly aligned with the ₹ 2.5 Billion project cost, setting a new benchmark for large-scale residential architecture in the region.
              </p>
            </motion.section>
            
          </div>

          {/* Right Column: Sticky Sidebar ("At a glance") */}
          <div className="lg:col-span-4 lg:col-start-9 order-first lg:order-last mb-10 lg:mb-0">
            <div className="sticky top-[140px] flex flex-col gap-7">
              
              <h3 className="text-[18px] font-geom font-medium text-[#10131B] tracking-tight">
                At a Glance
              </h3>

              <div className="flex flex-col gap-4">
                {Object.entries(PROJECT_DATA.stats).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="text-[12px] font-geom font-medium text-[#6c7280] uppercase tracking-wider">
                      {key}
                    </span>
                    <span className="text-[15px] font-sans font-medium text-[#10131B] tracking-tight mt-1">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
