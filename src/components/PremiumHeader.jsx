import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import DonationButton from './DonationButton';
import PremiumIcon from './PremiumIcon';

const PremiumHeader = ({ theme, setTheme }) => {
  return (
    <header className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white p-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <PremiumIcon icon="CubeTransparentIcon" className="w-8 h-8" />
        <h1 className="text-3xl font-bold">DevVortex Premium</h1>
      </div>
      <div className="flex items-center space-x-4">
        <DonationButton />
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="bg-transparent border-white text-white hover:bg-white hover:text-purple-800"
        >
          {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
      </div>
    </header>
  );
};

export default PremiumHeader;