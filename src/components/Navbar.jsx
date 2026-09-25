import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import './Navbar.css';
import logoSvg from '../../logos/horizontal lockup.svg';
import coloredLogoSvg from '../../logos/vyomcolored.svg';
import BrandHoverButton from './BrandHoverButton';

const dropdownData = {
  capabilities: {
    links: ['Architecture', 'Engineering', 'Construction', 'Sustainability'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    caption: 'VISUALIZATION BY VYOM STUDIO'
  },
  firm: {
    links: ['About Us', 'Leadership', 'Careers'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    caption: 'PHOTOGRAPH OF VYOM HEADQUARTERS'
  },
  media: {
    links: ['News', 'Press Releases', 'Publications', 'Exhibitions', 'Podcasts', 'Video Archive'],
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
    caption: 'LATEST EXHIBITION GALLERY'
  }
};

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const location = useLocation();
  // Only use light mode (black text/logo) on pages where the top background is white.
  // The home page and individual project pages have dark hero images/videos at the top.
  const isLightMode = location.pathname === '/projects' || location.pathname === '/projects/';
  
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Scrolled state for background color
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide/Show logic (don't hide if mobile menu is open)
    if (latest > previous && latest > 150 && !isMobileMenuOpen) {
      setIsHidden(true);
      setActiveDropdown(null);
    } else {
      setIsHidden(false);
    }
  });

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const DropdownArrow = () => (
    <svg className="nav-dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''} ${isLightMode && !isScrolled ? 'light-mode' : ''}`} 
      onMouseLeave={handleMouseLeave}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar-logo">
        <Link to="/" onClick={handleScrollToTop}>
          <img 
            src={(isScrolled || isLightMode) ? coloredLogoSvg : logoSvg} 
            alt="VYOM Logo" 
            className="w-full h-full object-contain" 
          />
        </Link>
      </div>

      <div className="navbar-right-group">
        <div className="navbar-links">
          <div className="nav-item-wrapper" onMouseEnter={() => handleMouseEnter(null)}>
            <Link to="/" onClick={handleScrollToTop}>HOME</Link>
          </div>
          
          <div className="nav-item-wrapper" onMouseEnter={() => handleMouseEnter(null)}>
            <a href="#">EXPERTISE</a>
          </div>

          <div className="nav-item-wrapper" onMouseEnter={() => handleMouseEnter(null)}>
            <Link to="/projects" onClick={handleScrollToTop}>PROJECTS</Link>
          </div>
          
          <div className="nav-item-wrapper" onMouseEnter={() => handleMouseEnter('firm')}>
            <a href="#">OUR FIRM <DropdownArrow /></a>
          </div>
          
          <div className="nav-item-wrapper" onMouseEnter={() => handleMouseEnter(null)}>
            <a href="#">MEDIA HUB</a>
          </div>
        </div>
        
        <div className="navbar-actions">


          <button 
            className="search-btn" 
            aria-label="Search"
            onClick={() => setIsSearchOpen(true)}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          
          <BrandHoverButton as="a" href="#" className="get-in-touch-btn !flex" variant="none" colorMode={(isScrolled || isLightMode) ? 'white' : 'original'}>
            GET IN TOUCH
          </BrandHoverButton>

          {/* Hamburger Menu Button */}
          <button 
            className="hamburger-btn block lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {activeDropdown && !isMobileMenuOpen && (
          <div className="mega-menu-wrapper">
            <motion.div 
              className="mega-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 380, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div className="mega-menu-content">
              <div className="mega-menu-left">
                <ul>
                  {dropdownData[activeDropdown].links.map((link, idx) => (
                    <li key={idx}>
                      <a href="#">
                        {link}
                        <svg className="mega-menu-link-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mega-menu-right">
                <div className="mega-menu-image-container">
                  <img src={dropdownData[activeDropdown].image} alt="Featured" />
                  <div className="mega-menu-caption">{dropdownData[activeDropdown].caption}</div>
                </div>
              </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu-links">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>EXPERTISE</a>
              <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>PROJECTS</Link>
              
              {/* Accordion for Firm */}
              <div className="mobile-menu-accordion">
                <div className="accordion-header" onClick={() => setActiveDropdown(activeDropdown === 'firm' ? null : 'firm')}>
                  <span>OUR FIRM</span>
                  <svg className={`transition-transform duration-300 ${activeDropdown === 'firm' ? 'rotate-180' : ''}`} width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 1.5L6 6.5L11 1.5" />
                  </svg>
                </div>
                <AnimatePresence>
                  {activeDropdown === 'firm' && (
                    <motion.div
                      className="accordion-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      {dropdownData.firm.links.map((link, i) => (
                        <a key={i} href="#" onClick={() => setIsMobileMenuOpen(false)}>{link}</a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>MEDIA HUB</a>
              
              <BrandHoverButton as="a" href="#" className="mobile-get-in-touch !flex" variant="none" colorMode="white" onClick={() => setIsMobileMenuOpen(false)}>
                GET IN TOUCH
              </BrandHoverButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Search Overlay via Portal to escape backdrop-filter containing block */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              className="fixed inset-0 bg-white/95 backdrop-blur-md z-[110] flex flex-col items-center justify-center px-5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
            >
              <button 
                className="absolute top-10 right-10 p-2 text-black hover:opacity-50 transition-opacity"
                onClick={() => setIsSearchOpen(false)}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div className="w-full max-w-4xl relative">
                <input 
                  type="text" 
                  placeholder="What are you looking for?" 
                  className="w-full bg-transparent border-b-[2px] border-black/20 text-4xl md:text-6xl font-sans text-black placeholder:text-black/30 pb-4 focus:outline-none focus:border-black transition-colors"
                  autoFocus
                />
                <p className="mt-6 text-black/50 font-sans tracking-tight">
                  Press Enter to search, or Esc to close.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.nav>
  );
};

export default Navbar;
