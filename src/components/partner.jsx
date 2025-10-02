"use client";
import React from "react";
import { motion } from "framer-motion";
// import icicilogo from "/assests/ICICI_Bank_Logo.svg.png"

// Example logos (replace with your actual logo URLs or imported images)
const companies = [
  // { name: "ICICI Bank", logo: "icicilogo" },
  { name: "Tata Capital", logo: "https://companieslogo.com/img/orig/TATACAPITAL.NS_BIG-ad7a2cbb.png" },
  { name: "Axis Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Axis_Bank_logo.svg" },
  { name: "IDFC Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/IDFC_FIRST_Bank_logo.png" },
  { name: "Saraswat Bank", logo: "https://www.saraswatbank.com/images/logo.png" },
  { name: "InCred", logo: "https://www.incred.com/images/logo.png" }
];

const Partners = () => {
  return (
    <div className="w-full bg-gray-50 py-10 overflow-hidden">
      <h2 className="text-center text-2xl font-bold text-slate-800 mb-8">
        Trusted By Leading Institutions
      </h2>
      
      {/* Motion Scroller */}
      <motion.div
        className="flex gap-12"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity
        }}
      >
        {/* Duplicate logos twice for seamless loop */}
        {[...companies, ...companies].map((company, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={company.logo}
              alt={company.name}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Partners;
