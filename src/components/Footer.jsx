import React from 'react';

const footerLinks = {
  quickLinks: ['Home', 'Expertise', 'Projects', 'Media Hub'],
  expertise: ['Architecture', 'Engineering', 'Construction'],
  mediaHub: ['Articles', 'Publications', 'Research', 'Awards']
};

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-[62px] pb-[54px]">
      <div className="w-full pl-5 pr-5 md:pl-10 md:pr-10 lg:pl-[70px] lg:pr-[87px]">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between lg:gap-[119px] mb-16 lg:mb-[89px]">
          
          {/* Left Column - Brand & Socials */}
          <div className="w-full lg:w-[321px] flex flex-col justify-between mb-12 lg:mb-0 shrink-0">
            <div className="flex flex-col gap-[36px]">
              <img 
                src="/images/logo.svg" 
                alt="VYOM Logo" 
                className="w-[130px] h-[32px] object-contain" 
              />
              <p className="text-[16px] text-[#20242b] tracking-[-0.8px] font-sans leading-[1.7]">
                VYOM combines architecture, engineering and delivery expertise to create intelligent solutions for a rapidly evolving world.
              </p>
            </div>
            <div className="flex items-center gap-6 mt-[114px] lg:mt-auto">
              <a href="#linkedin" className="hover:opacity-70 transition-opacity">
                <img src="/images/linkedin.svg" alt="LinkedIn" className="w-[40px] h-[39px]" />
              </a>
            </div>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="w-full flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between gap-8 lg:gap-[119px]">
            
            {/* Quick Links */}
            <div className="flex flex-col gap-[10px] w-full md:w-auto lg:w-[115px] shrink-0">
              <h4 className="text-[20px] font-medium text-[#0D1775] tracking-[-1px] uppercase font-geom">
                QUICK LINKS
              </h4>
              <ul className="flex flex-col gap-[3px]">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-[16px] text-black tracking-[-0.8px] hover:text-[#0D1775] transition-colors font-sans">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expertise */}
            <div className="flex flex-col gap-[10px] w-full md:w-auto lg:w-[98px] shrink-0">
              <h4 className="text-[20px] font-medium text-[#0D1775] tracking-[-1px] uppercase font-geom">
                EXPERTISE
              </h4>
              <ul className="flex flex-col gap-[3px]">
                {footerLinks.expertise.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-[16px] text-black tracking-[-0.8px] hover:text-[#0D1775] transition-colors font-sans">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Media Hub */}
            <div className="flex flex-col gap-[10px] w-full md:w-auto lg:w-[102px] shrink-0">
              <h4 className="text-[20px] font-medium text-[#0D1775] tracking-[-1px] uppercase font-geom">
                MEDIA HUB
              </h4>
              <ul className="flex flex-col gap-[3px]">
                {footerLinks.mediaHub.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-[16px] text-black tracking-[-0.8px] hover:text-[#0D1775] transition-colors font-sans">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-[10px] w-full md:w-auto lg:w-[243px] shrink-0">
              <h4 className="text-[20px] font-medium text-[#0D1775] tracking-[-1px] uppercase font-geom">
                CONTACT US
              </h4>
              <div className="flex flex-col gap-6 text-[16px] text-black tracking-[-0.8px] font-sans">
                <p className="w-full leading-[1.7]">
                  E 147, Okhla Phase III, Okhla Industrial Estate, New Delhi 110020, India
                </p>
                <div className="flex flex-col gap-[6px]">
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
          <p className="text-[16px] tracking-[-0.8px] text-black font-sans mb-4 md:mb-0">
            © 2026 VYOM. All rights reserved.
          </p>
          <div className="flex items-center justify-center md:justify-end lg:justify-start gap-[28px] text-[16px] tracking-[-0.8px] text-black font-sans w-full md:w-auto lg:w-[243px] shrink-0">
            <a href="#privacy" className="hover:text-[#0D1775] transition-colors whitespace-nowrap">Privacy Policy</a>
            <div className="w-[1px] h-[14px] bg-black shrink-0"></div>
            <a href="#terms" className="hover:text-[#0D1775] transition-colors whitespace-nowrap">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
