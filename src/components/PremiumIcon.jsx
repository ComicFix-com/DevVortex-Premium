import React from 'react';
import * as HeroIcons from '@heroicons/react/24/solid';

const PremiumIcon = ({ icon, className }) => {
  const IconComponent = HeroIcons[icon];
  
  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found in Heroicons library`);
    return null;
  }

  return <IconComponent className={className} />;
};

export default PremiumIcon;