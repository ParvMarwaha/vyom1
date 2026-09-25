import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BrandHoverButton from '../components/BrandHoverButton';

const CATEGORIES = [
  'All',
  'Residential',
  'Institutional',
  'Commercial',
  'Industrial',
  'Healthcare & Hospitality',
  'Master Planning',
  'Interiors',
  'Public Spaces'
];

// Sample project data
const PROJECTS = [
  {
    id: 1,
    title: 'Skyline Residences',
    category: 'Residential',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    description: 'A premium high-rise residential complex focusing on sustainable living.'
  },
  {
    id: 2,
    title: 'National Institute of Science',
    category: 'Institutional',
    location: 'New Delhi, India',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    description: 'State-of-the-art research facility and educational campus.'
  },
  {
    id: 3,
    title: 'Tech Park Sigma',
    category: 'Commercial',
    location: 'Bengaluru, India',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    description: 'A sprawling 5-million sq.ft. commercial workspace for IT giants.'
  },
  {
    id: 4,
    title: 'Nexus Manufacturing Hub',
    category: 'Industrial',
    location: 'Pune, India',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    description: 'Automated manufacturing facility with advanced robotics integration.'
  },
  {
    id: 5,
    title: 'City General Hospital',
    category: 'Healthcare & Hospitality',
    location: 'Hyderabad, India',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    description: 'A 500-bed multi-specialty healthcare center.'
  },
  {
    id: 6,
    title: 'EcoCity Masterplan',
    category: 'Master Planning',
    location: 'Kochi, India',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive urban planning for a sustainable 200-acre township.'
  },
  {
    id: 7,
    title: 'Zenith Corporate HQ',
    category: 'Interiors',
    location: 'Gurugram, India',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    description: 'Modern, agile workspace interior design for a global corporation.'
  },
  {
    id: 8,
    title: 'Riverfront Plaza',
    category: 'Public Spaces',
    location: 'Ahmedabad, India',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80',
    description: 'Urban revitalization project featuring recreational parks and walkways.'
  },
  {
    id: 9,
    title: 'Lumina Towers',
    category: 'Residential',
    location: 'Chennai, India',
    image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=800&q=80',
    description: 'Twin luxury residential towers overlooking the bay.'
  }
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(PROJECTS.filter(p => p.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="w-full min-h-screen bg-white pt-[180px] pb-[100px]">
      <div className="w-full px-5 md:px-10 lg:px-[70px]">
        
        {/* Header Section */}
        <div className="mb-16 lg:mb-[100px]">
          <div className="flex items-center gap-[14px] mb-8">
            <div className="w-[22px] h-[2px] bg-[#6c7280]"></div>
            <span className="text-[14px] md:text-[16px] font-geom font-normal text-[#6c7280] uppercase tracking-wide">
              Projects
            </span>
          </div>
          <h1 className="text-5xl md:text-[72px] font-geom font-normal text-[#10131B] tracking-[-2px] leading-[1.1] max-w-[800px]">
            Explore our defining projects and architectural landmarks.
          </h1>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-3 mb-[80px]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-[24px] py-[10px] rounded-[100px] font-sans text-[16px] tracking-[-0.5px] transition-all duration-300 border ${
                activeCategory === cat 
                  ? 'bg-[#10131B] text-white border-[#10131B]' 
                  : 'bg-transparent text-[#10131B] border-black/10 hover:border-black/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[70px]">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                onClick={() => navigate(`/projects/${project.id}`)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
                className="group cursor-pointer flex flex-col"
              >
                {/* Image Card (Sharp Corners for architectural look) */}
                <div className="relative w-full aspect-[4/3] overflow-hidden mb-[24px] bg-[#F9F9FD]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-[12px] mb-[12px]">
                    <span className="text-[14px] font-medium text-[#0D1775] tracking-[-0.5px]">
                      {project.category}
                    </span>
                    <span className="w-[4px] h-[4px] rounded-full bg-black/20"></span>
                    <span className="text-[14px] text-[#6c7280] tracking-[-0.5px]">
                      {project.location}
                    </span>
                  </div>
                  <h3 className="text-[28px] font-geom font-normal text-[#10131B] tracking-[-1px] mb-[12px] group-hover:text-[#0D1775] transition-colors leading-[1.2]">
                    {project.title}
                  </h3>
                  <p className="text-[16px] text-black/70 tracking-[-0.5px] leading-[1.6]">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="w-full py-[100px] flex flex-col items-center justify-center text-center">
            <h3 className="text-[32px] font-geom font-normal text-[#10131B] tracking-[-1px] mb-4">No projects found</h3>
            <p className="text-[16px] text-[#6c7280] tracking-[-0.5px]">We are currently updating our portfolio for this category.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectsPage;
