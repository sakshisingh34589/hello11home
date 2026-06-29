import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // यह ज़रूरी है
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // लिंक्स का डेटा
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-black text-[#EAB308] tracking-tighter">
          HELLO11<span className="text-white">HOME</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-wider">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="hover:text-[#EAB308] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white absolute w-full left-0 px-6 py-8 space-y-6 text-center border-t border-neutral-800">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="block hover:text-[#EAB308] font-bold uppercase"
              onClick={() => setIsMobileMenuOpen(false)} // क्लिक करते ही मेनू बंद हो जाएगा
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}