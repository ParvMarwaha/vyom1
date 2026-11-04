import React from 'react';

const footerLinks = {
  quickLinks: ['Home', 'Expertise', 'Projects', 'Media Hub'],
  expertise: ['Architecture', 'Engineering', 'Construction'],
  mediaHub: ['Articles', 'Publications', 'Research', 'Awards']
};

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-[3.875rem] pb-[3.375rem]">
      <div className="w-full pl-5 pr-5 md:pl-10 md:pr-10 lg:pl-[4.375rem] lg:pr-[4.375rem]">
        
        {/* Top Section */}
        <div className="flex flex-col xl:flex-row justify-between xl:gap-[7.4375rem] mb-16 lg:mb-[5.5625rem]">
          
          {/* Left Column - Brand & Socials */}
          <div className="w-full xl:w-[20.0625rem] flex flex-col justify-between mb-12 xl:mb-0 shrink-0">
            <div className="flex flex-col gap-[2.25rem]">
              <img 
                src="/images/logo.svg" 
                alt="VYOM Logo" 
                className="w-[8.125rem] h-[2rem] object-contain" 
              />
              <p className="text-[1rem] text-[#20242b] tracking-[-0.05rem] font-sans leading-[1.7]">
                VYOM combines architecture, engineering and delivery expertise to create intelligent solutions for a rapidly evolving world.
              </p>
            </div>
            <div className="flex items-center gap-6 mt-[7.125rem]">
              <a href="#linkedin" className="hover:opacity-70 transition-opacity">
                <img src="/images/linkedin.svg" alt="LinkedIn" className="w-[2.5rem] h-[2.4375rem]" />
              </a>
            </div>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="w-full xl:w-auto xl:flex-1 flex flex-col md:flex-row flex-wrap xl:flex-nowrap justify-between gap-8 lg:gap-10">
            
            {/* Quick Links */}
            <div className="flex flex-col gap-[0.625rem] w-full md:w-auto shrink-0">
              <h4 className="text-[1.25rem] font-medium text-[#0D1775] tracking-[-0.0625rem] uppercase font-geom whitespace-nowrap">
                QUICK LINKS
              </h4>
              <ul className="flex flex-col gap-[0.1875rem]">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-[1rem] text-black tracking-[-0.05rem] hover:text-[#0D1775] transition-colors font-sans">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expertise */}
            <div className="flex flex-col gap-[0.625rem] w-full md:w-auto shrink-0">
              <h4 className="text-[1.25rem] font-medium text-[#0D1775] tracking-[-0.0625rem] uppercase font-geom whitespace-nowrap">
                EXPERTISE
              </h4>
              <ul className="flex flex-col gap-[0.1875rem]">
                {footerLinks.expertise.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-[1rem] text-black tracking-[-0.05rem] hover:text-[#0D1775] transition-colors font-sans">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Media Hub */}
            <div className="flex flex-col gap-[0.625rem] w-full md:w-auto shrink-0">
              <h4 className="text-[1.25rem] font-medium text-[#0D1775] tracking-[-0.0625rem] uppercase font-geom whitespace-nowrap">
                MEDIA HUB
              </h4>
              <ul className="flex flex-col gap-[0.1875rem]">
                {footerLinks.mediaHub.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-[1rem] text-black tracking-[-0.05rem] hover:text-[#0D1775] transition-colors font-sans">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-[0.625rem] w-full md:w-[16.25rem] shrink-0">
              <h4 className="text-[1.25rem] font-medium text-[#0D1775] tracking-[-0.0625rem] uppercase font-geom">
                CONTACT US
              </h4>
              <div className="flex flex-col gap-6 text-[1rem] text-black tracking-[-0.05rem] font-sans">
                <p className="w-full leading-[1.7]">
                  E 147, Okhla Phase III, Okhla Industrial Estate, New Delhi 110020, India
                </p>
                <div className="flex flex-col gap-[0.375rem]">
                  <a href="mailto:info@vyomaec.com" className="hover:text-[#0D1775] transition-colors">
                    info@vyomaec.com
                  </a>
                  <a href="tel:01141825315" className="hover:text-[#0D1775] transition-colors">
                    011 - 418 25 315
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section - Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <p className="text-[1rem] tracking-[-0.05rem] text-black font-sans mb-4 md:mb-0">
            © 2026 VYOM. All rights reserved.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-[1.75rem] text-[1rem] tracking-[-0.05rem] text-black font-sans w-full md:w-[16.25rem] shrink-0">
            <a href="#privacy" className="hover:text-[#0D1775] transition-colors whitespace-nowrap">Privacy Policy</a>
            <div className="w-[0.0625rem] h-[0.875rem] bg-black shrink-0"></div>
            <a href="#terms" className="hover:text-[#0D1775] transition-colors whitespace-nowrap">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
