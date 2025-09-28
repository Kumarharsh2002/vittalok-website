import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-slate-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@Vittalok.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Free Consultation Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <div className="ml-3">
              <h1 className="text-2xl font-bold text-slate-800">Vittalok</h1>
              <p className="text-sm text-slate-600">Financial Excellence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Home</Link>
            <Link to="/services" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Services</Link>
            <Link to="/about" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">About</Link>
            <Link to="/testimonials" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Testimonials</Link>
            <Link to="/resources" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Resources</Link>
            <Link to="/contact" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Contact</Link>
            <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors font-medium">
              Book Consultation
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-slate-700 hover:text-amber-600 font-medium">Home</a>
              <a href="#services" className="text-slate-700 hover:text-amber-600 font-medium">Services</a>
              <a href="#about" className="text-slate-700 hover:text-amber-600 font-medium">About</a>
              <a href="#testimonials" className="text-slate-700 hover:text-amber-600 font-medium">Testimonials</a>
              <a href="#resources" className="text-slate-700 hover:text-amber-600 font-medium">Resources</a>
              <a href="#contact" className="text-slate-700 hover:text-amber-600 font-medium">Contact</a>
              <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors font-medium w-fit">
                Book Consultation
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;