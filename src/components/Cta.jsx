import React from 'react';
import BrandHoverButton from './BrandHoverButton';

const Cta = () => {
  return (
    <section className="w-full bg-white py-16 md:py-[7.5rem]">
      <div className="w-full px-5 md:px-10 lg:px-[4.375rem]">
        
        {/* Main CTA Container matches Figma proportion */}
        <div className="relative w-full">
          
          {/* Main Card */}
          <div className="relative w-full flex flex-col-reverse md:block">
            
            {/* The Image dictates the height of this container */}
            <div className="w-full flex justify-center md:justify-end bg-[#1e1e1e] md:bg-transparent">
              <div className="w-[80%] sm:w-[60%] md:w-[41.56%] z-20 pointer-events-none">
                <img 
                  src="/images/ctafooter.png" 
                  alt="CTA Building" 
                  className="w-full h-auto object-bottom block" 
                />
              </div>
            </div>

            {/* Left Content Box - 58.44% width on desktop */}
            <div 
              className="relative md:absolute md:left-0 md:bottom-0 w-full md:w-[58.44%] h-auto md:h-[70.646%] bg-[#1e1e1e] flex flex-col justify-center px-6 py-12 md:p-0 md:pl-[5%] md:pr-[7%] z-10"
            >
              <div className="max-w-[32.5rem]">
                <h2 className="text-[1.75rem] sm:text-[2rem] md:text-[1.75rem] lg:text-[2.25rem] xl:text-[2.8125rem] leading-[1.15] text-white font-geom tracking-[-0.0844rem] mb-4 md:mb-4 xl:mb-[2.9375rem]">
                  The Next Big Possibility<br />
                  Starts With Us.
                </h2>
                
                <p className="text-[1rem] md:text-[1.25rem] leading-[1.45] text-[#ced5db] font-sans tracking-[-0.0338rem] mb-4 md:mb-6 xl:mb-[3.625rem]">
                  Have a project in mind? Partner with us to create smarter, more resilient spaces and infrastructure that move us forward.
                </p>
                
                <div className="flex flex-wrap items-center gap-[0.6875rem]">
                  <BrandHoverButton variant="primary">
                    START A PROJECT
                  </BrandHoverButton>
                  <BrandHoverButton variant="secondary">
                    EXPLORE PROJECTS
                  </BrandHoverButton>
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Cta;
