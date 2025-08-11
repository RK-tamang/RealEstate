import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const isPropertyDetailPage = location.pathname.startsWith('/property/');

  // Background: charcoal gray on scroll everywhere,
  // otherwise white for property detail page, transparent elsewhere
  const bgClass = scrolled
    ? 'bg-gray-900/95 backdrop-blur-md shadow-md'
    : isPropertyDetailPage
    ? 'bg-white shadow-md'
    : 'bg-transparent';

  // Text color: white on scroll everywhere,
  // black by default on property detail page, white elsewhere
  const textClass = scrolled ? 'text-white' : isPropertyDetailPage ? 'text-black' : 'text-white';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${bgClass} ${textClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Logo" className="h-6 w-auto" />
            <span className="text-lg font-semibold">RAWATIESTATE</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="hover:text-primary-400 transition">
              Home
            </Link>
            <div className="relative group">
              <Link
                to="/properties"
                className="flex items-center space-x-1 hover:text-primary-400 transition"
              >
                <span>Properties</span>
                <FiChevronDown className="mt-0.5" />
              </Link>
            </div>
            <Link to="/about" className="hover:text-primary-400 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-primary-400 transition">
              Contact
            </Link>
          </div>

          {/* Contact and Socials */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-sm">+972356753212</span>
            <div className="flex space-x-2">
              <a
                href="https://instagram.com"
                className="p-2 border rounded-full hover:bg-white hover:text-black transition"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="https://twitter.com"
                className="p-2 border rounded-full hover:bg-white hover:text-black transition"
              >
                <FaTwitter size={14} />
              </a>
              <a
                href="https://facebook.com"
                className="p-2 border rounded-full hover:bg-white hover:text-black transition"
              >
                <FaFacebookF size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
