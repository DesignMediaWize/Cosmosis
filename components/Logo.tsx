import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <img 
      src="https://cosmosis.se/wp-content/uploads/2024/05/Text-Logo.png" 
      alt="COSMOSIS"
      className={`h-auto w-auto object-contain max-h-12 ${className}`}
    />
  );
};

export default Logo;