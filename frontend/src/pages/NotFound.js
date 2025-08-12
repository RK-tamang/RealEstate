import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaPhone } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Main 404 Content */}
        <div className="text-center">
          {/* 404 Number */}
          <div className="relative">
            <h1 className="text-9xl md:text-[200px] font-bold text-gray-300 relative z-0">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-primary-100 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Error Message */}
          <div className="mt-8 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Oops! The page you're looking for seems to have wandered off. 
              Let's help you find your way back home.
            </p>
          </div>

          {/* Search Suggestion */}
          <div className="mt-8">
            <p className="text-sm text-gray-500 mb-4">
              Try one of these instead:
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <FaHome className="mr-2" />
                Go Home
              </Link>
              
              <Link
                to="/properties"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                <FaSearch className="mr-2" />
                Browse Properties
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                <FaPhone className="mr-2" />
                Contact Us
              </Link>
            </div>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Popular Pages
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/" className="text-primary-600 hover:text-primary-800 hover:underline">
                Home
              </Link>
              <span className="text-gray-400">•</span>
              <Link to="/properties" className="text-primary-600 hover:text-primary-800 hover:underline">
                All Properties
              </Link>
              <span className="text-gray-400">•</span>
              <Link to="/about" className="text-primary-600 hover:text-primary-800 hover:underline">
                About Us
              </Link>
              <span className="text-gray-400">•</span>
              <Link to="/contact" className="text-primary-600 hover:text-primary-800 hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-100 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary-200 rounded-full opacity-50 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-primary-300 rounded-full opacity-50 animate-pulse"></div>
      </div>
    </div>
  );
};

export default NotFound;
