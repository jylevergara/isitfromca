"use client"

import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-24 h-24" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className={className}>
      {/* Background Circle */}
      <circle cx="150" cy="150" r="145" fill="white" stroke="#E0E0E0" strokeWidth="2"/>
      
      {/* Magnifying Glass Handle */}
      <line x1="210" y1="210" x2="250" y2="250" stroke="#333333" strokeWidth="20" strokeLinecap="round"/>
      
      {/* Magnifying Glass Rim */}
      <circle cx="150" cy="140" r="90" fill="#F5F5F5" stroke="#333333" strokeWidth="10"/>
      
      {/* Magnifying Glass Glass */}
      <circle cx="150" cy="140" r="80" fill="white"/>
      
      {/* Official Canadian Maple Leaf (scaled and translated to fit in the magnifying glass) */}
      <g transform="scale(0.03) translate(4000, 3000)">
        <path fill="#D80621" d="m-90 2030 45-863a95 95 0 0 0-111-98l-859 151 116-320a65 65 0 0 0-20-73l-941-762 212-99a65 65 0 0 0 34-79l-186-572 542 115a65 65 0 0 0 73-38l105-247 423 454a65 65 0 0 0 111-57l-204-1052 327 189a65 65 0 0 0 91-27l332-652 332 652a65 65 0 0 0 91 27l327-189-204 1052a65 65 0 0 0 111 57l423-454 105 247a65 65 0 0 0 73 38l542-115-186 572a65 65 0 0 0 34 79l212 99-941 762a65 65 0 0 0-20 73l116 320-859-151a95 95 0 0 0-111 98l45 863z"/>
      </g>
      
      {/* Light Reflection on Glass */}
      <path d="M120 95 Q130 85 145 90" fill="none" stroke="#E0E0E0" strokeWidth="5" strokeLinecap="round"/>
    </svg>
  );
};

export default Logo;