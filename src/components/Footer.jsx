import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      "Assurance Services & Risk Advisory",
      "Tax Advisory", 
      "Corporate Secretarial Services",
      "Consultancy Services",
      "Information Technology",
      "Other Services"
    ],
    company: [
      "About Us",
      "Our Team",
      // "Careers",
      // "Press",
      // "Awards",
      "Contact"
    ],
    resources: [
      "Retirement Calculator",
      "Market Insights",
      "Tax Planning Guide",
      "Estate Planning",
      // "Blog",
      // "Newsletter"
    ],
    legal: [
      "Privacy Policy",
      "Terms of Service",
      "Disclaimer",
      "Compliance",
      "FINRA BrokerCheck",
      "SEC Registration"
    ]
  };

  const socialLinks = [
    // { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    // { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <div className="ml-3">
                <h3 className="text-2xl font-bold">Vittalok</h3>
                <p className="text-slate-400">Financial Excellence</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Your trusted partner in building, protecting, and transferring wealth. 
              With over 15 years of experience, we help individuals and families 
              achieve their financial goals through comprehensive planning and 
              personalized strategies.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-amber-500 mr-3" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-amber-500 mr-3" />
                <span className="text-slate-300">info@Vittalok.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-amber-500 mr-3" />
                <span className="text-slate-300">123 Financial District, New York, NY 10004</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup
        <div className="bg-slate-800 rounded-xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold mb-2">Stay Updated</h4>
              <p className="text-slate-300">
                Get weekly financial insights and market updates delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-400 text-sm">
                © {currentYear} Vittalok. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Securities offered through registered representatives. Investment advisory services offered through Vittalok.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="mt-6 pt-6 border-t border-slate-800">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {footerLinks.legal.map((link, index) => (
                <a key={index} href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;