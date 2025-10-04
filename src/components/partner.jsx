"use client";
import React from "react";
import { motion } from "framer-motion";
import tatalogo from '/src/assests/tatacaptial-logo.png'
import idfclogo from '/src/assests/idfc-logo.png'
import incredlogo from '/src/assests/incred-logo.png'
import axisbanklogo from '/src/assests/axisbank-logo.png'
// import icicilogo from "/assests/ICICI_Bank_Logo.svg.png"

// Example logos (replace with your actual logo URLs or imported images)
const companies = [
  // { name: "ICICI Bank", logo: "icicilogo" },
  { name: "Tata Capital", logo: tatalogo },
  { name: "Axis Bank", logo: axisbanklogo },
  { name: "IDFC Bank", logo: idfclogo },
  { name: "Saraswat Bank", logo: "https://www.saraswatbank.com/images/logo.png" },
  { name: "InCred", logo: incredlogo }
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
