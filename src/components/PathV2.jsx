import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import logoWhiteSvg from '../../logos/logowhite.svg';

const pathCards = [
  {
    letter: 'P',
    title: 'Purpose - Driven',
    desc: 'We think beyond the immediate brief, making decisions that create enduring value for our clients, communities, and the environment. By balancing performance, responsibility, and long-term impact, we build with the future in mind.',
  },
  {
    letter: 'A',
    title: 'Accountability',
    desc: 'We take ownership of our decisions and remain invested in every outcome we influence. We recognise our responsibility to our communities, our clients, our people, and our environment, acting with integrity, discipline, and working collaboratively to create lasting value.',
  },
  {
    letter: 'T',
    title: 'Transparency',
    desc: 'We communicate openly and honestly, sharing progress, challenges, decisions, and financial commitments with clarity. By keeping everyone informed, we create alignment, build trust, and enable confident decision-making.',
  },
  {
    letter: 'H',
    title: 'Human - Centricity',
    desc: 'We believe the best outcomes are created together. By listening deeply, embracing diverse perspectives, and collaborating across departments, we create solutions that are thoughtful, integrated, and centred on the people they serve, creating a lasting positive impact on the lives and communities we touch.',
  }
];

// Inline SVG component to allow dynamic color changes
const VyomLogo = ({ className, defaultColor = "#F9F9FD", activeIndex = -1, lineProgress }) => {
  // Determine colors based on active scroll node
  const outermostColor = activeIndex >= 0 ? "#0D1775" : defaultColor; // P: Outermost ring
  const middleColor    = activeIndex >= 1 ? "#9B9C18" : defaultColor; // A: Middle ring
  const innermostColor = activeIndex >= 2 ? "#D75E1D" : defaultColor; // T: Innermost ring
  const birdColor      = activeIndex >= 3 ? "#0D1775" : defaultColor; // H: Bird (same as outermost)

  return (
    <svg className={className} viewBox="0 0 434 436" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Path 1: Innermost line (T) */}
      <path 
        d="M352.987 272.036C331.985 326.626 280.67 363.429 222.264 365.76C218.13 365.919 213.922 365.907 209.776 365.723C170.692 363.981 134.65 347.113 108.262 318.26C81.8627 289.407 68.3071 251.991 70.0614 212.919C72.2573 163.677 98.8532 119.121 141.225 93.7891H141.25L158.13 122.053C125.314 141.73 104.668 176.239 102.975 214.403C101.613 244.618 112.151 273.594 132.626 296.007C153.112 318.382 181.021 331.46 211.248 332.821C214.462 332.956 217.701 332.969 220.927 332.846C266.219 331.03 305.99 302.533 322.257 260.21L353.011 272.036H352.987Z" 
        fill={innermostColor} 
        className="transition-colors duration-500"
      />
      
      {/* Path 2: Middle line (A) */}
      <path 
        d="M389.004 285.874C362.482 354.866 297.673 401.348 223.859 404.317C218.621 404.525 213.297 404.513 208.022 404.28C106.14 399.704 26.9289 313.108 31.4924 211.202C34.2648 148.956 67.8901 92.6853 121.425 60.6426H121.45L135.398 84.0244C89.7385 111.356 61.057 159.335 58.6894 212.416C54.8129 299.319 122.358 373.169 209.248 377.071C213.726 377.279 218.277 377.279 222.755 377.107C285.712 374.617 340.977 334.956 363.574 276.109L389.004 285.886V285.874Z" 
        fill={middleColor} 
        className="transition-colors duration-500"
      />
      
      {/* Path 3: Outermost line (P) */}
      <path 
        d="M418.226 297.111C387.25 377.77 311.462 432.14 225.135 435.587C218.977 435.832 212.757 435.82 206.624 435.525C148.917 432.961 95.6394 408.046 56.6778 365.404C17.6672 322.762 -2.36562 267.497 0.222825 209.767C3.47371 136.996 42.8033 71.1805 105.38 33.7646H105.404L116.421 52.215C60.0391 85.9138 24.6351 145.178 21.7154 210.736C19.3846 262.725 37.4301 312.507 72.552 350.892C107.649 389.301 155.603 411.726 207.593 414.033C213.15 414.278 218.768 414.303 224.289 414.082C302.016 410.978 370.272 362.031 398.181 289.395L418.238 297.099L418.226 297.111Z" 
        fill={outermostColor} 
        className="transition-colors duration-500"
      />
      
      {/* Path 4: Bird/Center (H) */}
      <path 
        d="M229.147 203.607C230.558 204.895 229.712 207.851 229.086 209.409C228.325 211.311 219.149 236.631 219.971 237.158C220.474 237.489 221.603 236.815 223.566 235.011C225.553 233.183 248.898 208.82 248.898 208.82C261.362 195.939 272.268 182.31 286.706 171.92L335.077 137.117C349.467 142.22 364.715 147.151 375.241 158.646C390.256 175.048 399.04 195.35 407.038 216.033C415.944 239.096 418.398 262.368 423.82 287.762C432.96 259.804 434.91 231.993 433.659 203.668C432.248 172.386 420.52 104.902 398.095 91.2362L370.285 72.5282C374.664 64.125 382.835 53.3296 383.779 44.3989C384.454 37.9584 385.705 33.5544 388.563 27.2857L381.914 26.1203C376.186 18.3672 357.981 20.9434 349.442 27.9604C343.358 32.9778 337.249 36.609 329.704 39.5778L308.297 16.7724C290.718 -2.74517 222.228 -1.77602 191.228 2.64028C163.173 6.65175 136.196 13.7178 110.41 27.8745C136.368 28.5002 159.701 26.5987 184.015 31.0886C205.827 35.1246 227.405 39.9826 246.297 51.7103C259.546 59.9173 267.226 74.0004 274.893 87.1879L249.646 141.165C242.102 157.272 230.73 170.509 220.376 185.144C220.376 185.144 200.76 212.599 199.325 214.88C197.914 217.15 197.46 218.389 197.877 218.818C198.552 219.53 221.738 205.827 223.467 204.723C224.878 203.815 227.638 202.441 229.16 203.594" 
        fill={birdColor} 
        className="transition-colors duration-500"
      />
    </svg>
  );
};

const PathV2 = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress within the 400vh desktop section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start tracking 250px from top, so the drawing begins BEFORE the sticky element pins at 100px.
    offset: ["start 250px", "end end"]
  });

  // Dynamic Scale calculation for large screens
  const [scale, setScale] = useState(1);
  
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // Width scale to try and touch exactly the right side of the user's screen
        const widthScale = (window.innerWidth - 140) / 1300;
        
        // Precise height scale that mathematically guarantees AT LEAST 40px of padding
        // from both the top and bottom of the viewport so it NEVER sticks to the edges!
        const maxHeightScale = (window.innerHeight - 80) / 650;
        
        // Use the smaller scale so it perfectly balances both constraints
        let newScale = Math.min(widthScale, maxHeightScale);
        
        // Cap it so it doesn't get ridiculously massive on ultrawides, but allow it to shrink
        // as much as needed cohesively on small laptops/tablets.
        if (newScale > 2.2) newScale = 2.2;
        
        setScale(newScale);
      } else {
        setScale(1);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Map scroll progress to the exact path length percentages based on dot positions on the extended circular arc
  const lineProgress = useTransform(
    scrollYProgress, 
    [0, 0.1, 0.3, 0.5, 0.7, 0.8], // Finishes drawing at 0.8, leaving a massive 20% dead zone for H before unpinning!
    [0, 0.269, 0.434, 0.566, 0.731, 1] // Exact mathematical path lengths for P, A, T, H on the extended arc
  );

  const [activeIndex, setActiveIndex] = useState(-1);

  // Activate nodes EXACTLY when the drawing line touches their dots
  useMotionValueEvent(lineProgress, "change", (latest) => {
    if (latest < 0.269) setActiveIndex(-1);
    else if (latest < 0.434) setActiveIndex(0);
    else if (latest < 0.566) setActiveIndex(1);
    else if (latest < 0.731) setActiveIndex(2);
    else setActiveIndex(3);
  });

  return (
    <>
      {/* DESKTOP INTERACTIVE SCROLL VERSION */}
      <section className="hidden lg:block w-full bg-white relative">
        
        {/* TOP SECTION (Normal scroll flow) */}
        {/* Restored to absolute original state to keep alignment exactly as requested */}
        <div className="w-full px-[70px] pt-[150px] pb-[180px]">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* LEFT COLUMN: Eyebrow + Heading */}
            <div className="w-full lg:w-[48%] shrink-0 mb-12 lg:mb-0 lg:pr-8">
              <div className="flex items-center gap-[14px] mb-8">
                <div className="w-[22px] h-[2px] bg-[#6c7280]"></div>
                <span className="text-[14px] md:text-[16px] font-geom font-normal text-[#6c7280] uppercase tracking-wide">
                  Our Approach
                </span>
              </div>
              <h2 className="text-4xl md:text-[48px] lg:text-[52px] leading-[1.1] text-[#10131b] font-geom tracking-[-2px]">
                A collaborative<br/>approach. Intelligent<br/>outcomes.
              </h2>
            </div>
            
            {/* RIGHT COLUMN: Support Text. Added mt-[56px] to offset the eyebrow height so it centers exactly with the H2 heading */}
            <div className="w-full lg:w-[48%] shrink-0 lg:mt-[56px]">
              <p className="text-[18px] md:text-[20px] text-[#10131b] font-sans font-normal leading-[1.45] tracking-[-1px] max-w-[728px] lg:ml-auto">
                Our approach is built on collaboration, innovation and technical excellence. We integrate design thinking with engineering intelligence and construction expertise to deliver solutions that create lasting impact.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION (Scroll-jacked interactive path) */}
        <div ref={containerRef} className="w-full h-[400vh] relative z-10">
          
          {/* Sticky wrapper with explicit padding from top and bottom so it never sticks to the edges! */}
          <div 
            className="sticky top-[100px] w-full h-[calc(100vh-200px)] flex items-center justify-start bg-white z-0 rounded-[20px]"
            style={{ overflowX: 'clip', overflowY: 'visible' }}
          >
            
            {/* Layout Container. Fixed to 1370px (exact width of the content) so it perfectly scales to the margin without overflowing!
                Height increased to 820px to perfectly balance the visual weight so it doesn't look bottom-heavy.
                Added mt-[60px] to manually shift the entire graphic downwards so the top padding feels visually balanced and not stuck to the top.
                transformOrigin is left at 70px so it remains PERFECTLY left-aligned with the 70px header padding! */}
            <div 
              className="relative w-[1370px] h-[820px] shrink-0 mt-[10px]"
              style={{
                transform: `scale(${scale})`,
                transformOrigin: '70px center'
              }}
            >
              
              {/* Subtle Ambient Background Glow for depth */}
              <motion.div 
                className="absolute rounded-full pointer-events-none blur-[120px]"
                style={{
                  background: 'radial-gradient(circle, rgba(13,23,117,0.08) 0%, rgba(215,94,29,0.03) 100%)',
                  width: '700px',
                  height: '700px',
                  left: '0px',
                  top: '25px',
                  zIndex: 0
                }}
                animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Logo Graphic perfectly left-aligned (70px) with the header text */}
              <div 
                className="absolute z-10 pointer-events-none" 
                style={{ left: '70px', top: '200px', width: '350px', height: '350px' }}
              >
                <VyomLogo 
                  className="w-full h-full object-contain" 
                  activeIndex={activeIndex} 
                  defaultColor="#F9F9FD"
                />
              </div>

              {/* The Dashed Circular Arc (Background) mathematically extended to x=70 while maintaining perfect radius=300 */}
              <svg className="absolute left-0 top-0 w-full h-full pointer-events-none z-0">
                <path 
                  d="M 70 131.33 A 300 300 0 1 1 70 618.67" 
                  fill="none" 
                  stroke="#D1D5DB" 
                  strokeWidth="1.5" 
                  strokeDasharray="8 8" 
                />
              </svg>

              {/* The Animated Foreground Line that draws itself based on scroll */}
              <svg className="absolute left-0 top-0 w-full h-full pointer-events-none z-10">
                <motion.path 
                  d="M 70 131.33 A 300 300 0 1 1 70 618.67" 
                  fill="none" 
                  stroke="#0D1775" 
                  strokeWidth="1.5" 
                  style={{ pathLength: lineProgress }}
                />
              </svg>

              {/* Nodes mathematically positioned to perfectly track the curve while avoiding all overlaps */}
              {pathCards.map((card, index) => {
                // Highly optimized coordinates for perfect staggered layout and guaranteed vertical clearances.
                // Gap between letter and body has been slightly reduced per request.
                const coords = [
                  { dot: {x: 403, y: 120}, letter: {x: 513, y: 88}, body: {x: 603, y: 88} }, // P
                  { dot: {x: 532, y: 290}, letter: {x: 642, y: 258}, body: {x: 732, y: 258} }, // A
                  { dot: {x: 532, y: 460}, letter: {x: 642, y: 428}, body: {x: 732, y: 428} }, // T
                  { dot: {x: 403, y: 630}, letter: {x: 513, y: 598}, body: {x: 603, y: 598} } // H
                ];
                
                const pos = coords[index];
                const isActive = index <= activeIndex; // Nodes stay active as the path reaches them

                return (
                  <React.Fragment key={card.letter}>
                    {/* Node Dot */}
                    <div 
                      className={`absolute w-[20px] h-[20px] rounded-full flex items-center justify-center transition-all duration-500 ease-out ${isActive ? 'z-30 scale-125 drop-shadow-sm' : 'z-20 scale-100'}`}
                      style={{ left: `${pos.dot.x - 10}px`, top: `${pos.dot.y - 10}px` }}
                    >
                      <div className={`w-[14px] h-[14px] rounded-full ring-[3px] ring-white transition-colors duration-500 ${isActive ? 'bg-[#0D1775]' : 'bg-[#D1D5DB]'}`}></div>
                    </div>

                    {/* Letter (Pushed safely right from dot so they never clip into the curved line) */}
                    <div 
                      className={`absolute text-[64px] font-sans font-bold leading-none tracking-[-2px] transition-all duration-500 ease-out z-20 origin-left ${isActive ? 'text-[#0D1775] scale-110' : 'text-[#D1D5DB] scale-100'}`}
                      style={{ left: `${pos.letter.x}px`, top: `${pos.letter.y}px` }}
                    >
                      {card.letter}
                    </div>

                    {/* Body Copy - Restored to perfectly staggered position beside the letters. 
                        Font size reduced to 18px (as requested) allowing the whole block to be shorter and fit flawlessly. */}
                    <div 
                      className={`absolute text-[18px] leading-[1.5] tracking-[-0.5px] font-sans transition-all duration-700 ease-out z-20 ${isActive ? 'text-[#0D1775] opacity-100 translate-y-0' : 'text-[#9CA3AF] opacity-40 translate-y-4'}`}
                      style={{ left: `${pos.body.x}px`, top: `${pos.body.y}px`, right: '0px', maxWidth: '750px' }}
                    >
                       <span className={`font-bold block mb-2 text-[20px] transition-colors duration-700 ${isActive ? 'text-[#0D1775]' : 'text-[#9CA3AF]'}`}>{card.title}</span>
                       <span className={`transition-colors duration-700 block ${isActive ? 'text-[#0D1775] opacity-90' : 'text-[#9CA3AF] opacity-100'}`}>{card.desc}</span>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* Spacer to ensure generous padding before the next section arrives */}
        <div className="w-full h-[200px] bg-white relative z-0"></div>
      </section>

      {/* MOBILE VERSION (Vertical Stack) */}
      <section className="lg:hidden w-full bg-[#f9f9fd] relative px-5 pt-20 pb-20">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-[14px] mb-8">
            <div className="w-[22px] h-[2px] bg-[#6c7280]"></div>
            <span className="text-[16px] font-geom font-normal text-[#6c7280] uppercase tracking-[-1px]">
              Our Approach
            </span>
          </div>
          <h2 className="text-4xl leading-[1.1] text-[#10131b] font-geom tracking-[-2px] mb-8">
            A collaborative approach. Intelligent outcomes.
          </h2>
          <p className="text-[18px] text-[#10131b] font-sans font-normal leading-[1.45] tracking-[-1px]">
            Our approach is built on collaboration, innovation and technical excellence. We integrate design thinking with engineering intelligence and construction expertise to deliver solutions that create lasting impact.
          </p>
        </div>

        {/* Vertical Timeline Cards */}
        <div className="flex flex-col gap-12 relative pl-2">
          {/* Vertical Track Line */}
          <div className="absolute left-[26px] top-[24px] bottom-[24px] w-[2px] bg-gray-200"></div>
          
          {pathCards.map((card, idx) => (
            <div key={card.letter} className="relative flex gap-6 z-10">
              {/* Timeline Node */}
              <div className="w-[28px] h-[28px] rounded-full bg-white flex items-center justify-center ring-[3px] ring-white shadow-sm shrink-0 mt-1 relative z-20" style={{ marginLeft: '12px' }}>
                <div className="w-[14px] h-[14px] rounded-full bg-[#0D1775]"></div>
              </div>
              
              {/* Card Content */}
              <div className="flex flex-col pt-0">
                <div className="text-[48px] font-sans font-bold text-[#0D1775] leading-none tracking-[-2px] mb-2">{card.letter}</div>
                <h3 className="text-[20px] font-bold text-[#0D1775] font-geom tracking-tight mb-2">{card.title}</h3>
                <p className="text-[16px] text-gray-500 leading-[1.5] font-sans pr-2">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PathV2;
