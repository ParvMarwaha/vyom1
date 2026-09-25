import React, { useState } from 'react';
import BrandHoverIcon from './BrandHoverIcon';

const BrandHoverButton = ({ children, variant = 'primary', colorMode, className = '', as, href, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = "relative flex items-center justify-center gap-2 px-[16px] py-[8px] md:px-[20px] md:py-[10px] text-[16px] font-sans font-medium tracking-[-0.42px] rounded-full transition-all duration-300";
  
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
