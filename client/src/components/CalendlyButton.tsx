import React from 'react';

interface CalendlyButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function CalendlyButton({ 
  text = "Book a Demo", 
  className = "", 
  children,
  ...rest
}: CalendlyButtonProps) {
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // @ts-ignore - Calendly is loaded from external script
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/darrylalexander/leadoconnect-web-b2b-leadgeneration'
      });
    }
  };

  return (
    <a 
      href="#" 
      onClick={handleClick}
      className={className}
      {...rest}
    >
      {children || text}
    </a>
  );
}