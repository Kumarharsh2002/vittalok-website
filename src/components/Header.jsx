import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
// import company-logo from 'src\assests\company-logo.png'

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
              {/* Logo image instead of span */}
              <img
                    src="src\assests\company-logo.png" // replace with your actual PNG path
                    alt="Vittalok Logo"
                    className="w-60 h-10 object-contain rounded-lg "
                />
              
            
            </div>

      

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Home</Link>
            <Link to="/services" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Services</Link>
            <Link to="/about" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">About</Link>
            {/* <Link to="/testimonials" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Testimonials</Link> */}
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
              <Link to="/" className="text-slate-700 hover:text-amber-600 font-medium">Home</Link>
              <Link to="/services" className="text-slate-700 hover:text-amber-600 font-medium">Services</Link>
              <Link to="/about" className="text-slate-700 hover:text-amber-600 font-medium">About</Link>
              {/* <Link to="/testimonials" className="text-slate-700 hover:text-amber-600 font-medium">Testimonials</Link> */}
              <Link to="/resources" className="text-slate-700 hover:text-amber-600 font-medium">Resources</Link>
              <Link to="/contact" className="text-slate-700 hover:text-amber-600 font-medium">Contact</Link>
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