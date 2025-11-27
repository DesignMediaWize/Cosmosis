import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading, 
  className = '', 
  disabled,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-display font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden";
  
  const variants = {
    // Primary: White with dark text, classic modern
    primary: "bg-white text-black hover:bg-slate-200 border border-white",
    
    // Neon: The acid lime brand color
    neon: "bg-neon text-black hover:bg-neon-hover border border-neon shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.5)]",
    
    // Secondary: Dark theme accent
    secondary: "bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700",
    
    // Outline: Transparent with border
    outline: "bg-transparent border border-white/30 text-white hover:border-neon hover:text-neon"
  };

  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-5 text-base"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {/* Hover slide effect for some complexity */}
      <span className="relative z-10 flex items-center">
        {isLoading ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : children}
      </span>
    </button>
  );
};

export default Button;