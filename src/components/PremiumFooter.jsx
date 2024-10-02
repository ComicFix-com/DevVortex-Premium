import React from 'react';
import PremiumIcon from './PremiumIcon';

const PremiumFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <PremiumIcon icon="ShieldCheckIcon" className="w-6 h-6" />
          <span>Premium Quality News</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;