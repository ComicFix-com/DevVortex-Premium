import React from 'react';
import * as HeroIcons from '@heroicons/react/24/solid';

const PremiumIcon = ({ icon, className }) => {
  const IconComponent = HeroIcons[icon];
  return <IconComponent className={className} />;
};

export default PremiumIcon;