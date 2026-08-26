import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'WHAT WE DO' },
    { id: 'menus', label: 'MENUS' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'enquire', label: 'ENQUIRE' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#F9F8F6]/95 backdrop-blur-md py-3 shadow-sm border-b border-[#006B46]/15' 
        : 'bg-[#F9F8F6] py-3.5 border-b border-[#006B46]/10'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left focus:outline-none group"
          >
            <img 
              src="Primary Logo - Wordmark.png" 
              alt="Fresh Catering" 
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Clean Editorial Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-title text-[11px] tracking-[0.2em] transition-all duration-300 relative py-1 uppercase ${
                  activePage === link.id
                    ? 'text-[#006B46] font-extrabold'
                    : 'text-[#111827]/75 hover:text-[#006B46]'
                }`}
              >
                {link.label}
                {activePage === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#006B46] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-[#111827] hover:text-[#006B46] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F9F8F6] border-b border-[#006B46]/20 px-6 py-4 space-y-2 shadow-xl">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-title text-[11px] tracking-widest text-left py-2.5 px-3 rounded-lg uppercase ${
                  activePage === link.id
                    ? 'text-white bg-[#006B46] font-bold'
                    : 'text-[#111827] hover:bg-[#006B46]/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
