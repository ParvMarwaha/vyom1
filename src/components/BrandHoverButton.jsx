import React, { useState } from 'react';
import BrandHoverIcon from './BrandHoverIcon';

const BrandHoverButton = ({ children, variant = 'primary', colorMode, className = '', as, href, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = "relative flex items-center justify-center gap-2 px-[1rem] py-[0.5rem] md:px-[1.25rem] md:py-[0.625rem] text-[16px] font-sans font-normal tracking-[-0.0262rem] rounded-full transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-white text-[#0D1775] hover:bg-gray-100 hover:shadow-lg",
    secondary: "bg-transparent border border-white text-white hover:bg-white hover:text-[#0D1775] hover:shadow-lg",
    none: ""
  };

  const resolvedColorMode = colorMode || (variant === 'none' ? 'white' : 'original');
  const Component = as || (href ? 'a' : 'button');

  return (
    <Component 
      href={href}
      className={`${baseClasses} ${variantClasses[variant] || ''} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
      <div className={`overflow-hidden transition-all duration-300 ${isHovered ? 'w-6 opacity-100 ml-1' : 'w-0 opacity-0 ml-0'}`}>
        <BrandHoverIcon isHovered={isHovered} className="w-6 h-6" colorMode={resolvedColorMode} />
      </div>
    </Component>
  );
};

export default BrandHoverButton;
