
import React, { useState } from 'react';
import CtaButton from './CtaButton';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Ensure it's an internal anchor link
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Use JavaScript to scroll smoothly, accounting for the sticky header.
        // The 80px offset matches the `scroll-padding-top` value for consistency.
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
    // If an onClick function is passed (e.g., for closing the mobile menu), execute it.
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <a href={href} onClick={handleSmoothScroll} className="text-gray-600 hover:text-brand-green-dark transition-colors duration-300 font-medium">
      {children}
    </a>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-md z-50 h-20">
      <div className="container mx-auto max-w-6xl px-6 h-full flex justify-between items-center">
        <div className="font-serif font-bold text-2xl text-brand-green-dark">
          Bio Alsyifa
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg">
          <nav className="flex flex-col items-center gap-6 p-6">
            <NavLink href="#features" onClick={closeMenu}>Features</NavLink>
            <NavLink href="#testimonials" onClick={closeMenu}>Testimonials</NavLink>
            <NavLink href="#pricing" onClick={closeMenu}>Pricing</NavLink>
            <NavLink href="#faq" onClick={closeMenu}>FAQ</NavLink>
            <CtaButton onClick={closeMenu} />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;