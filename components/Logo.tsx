import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <img 
      src="https://cosmosis.se/wp-content/uploads/2024/05/Text-Logo.png" 
      alt="COSMOSIS"
      // Removed h-auto and max-h-12 defaults to allow exact sizing via props
      className={`block object-contain ${className}`}
    />
  );
};

export default Logo;