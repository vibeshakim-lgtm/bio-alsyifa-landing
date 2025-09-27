
import React from 'react';

const WhatsAppIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.166l-1.138 4.167 4.274-1.119z" />
    </svg>
);


interface CtaButtonProps {
  large?: boolean;
  href?: string;
  // FIX: Add onClick prop to fix type error in Header.tsx.
  onClick?: () => void;
}

const CtaButton: React.FC<CtaButtonProps> = ({ large = false, href = "https://wa.link/5xgn3a", onClick }) => {
  const sizeClasses = large
    ? 'py-4 px-8 text-lg'
    : 'py-3 px-6 text-base';

  const isInternalLink = href.startsWith('#');

  return (
    <a
      href={href}
      target={isInternalLink ? '_self' : '_blank'}
      rel={isInternalLink ? '' : 'noopener noreferrer'}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-3 font-bold text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition-transform transform hover:scale-105 duration-300 ${sizeClasses}`}
    >
        <WhatsAppIcon />
        <span>Order Sekarang di WhatsApp</span>
    </a>
  );
};

export default CtaButton;
