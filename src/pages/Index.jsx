import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import HackerNewsStories from '../components/HackerNewsStories';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import DonationButton from '../components/DonationButton';
import gsap from 'gsap';

const Index = () => {
  const { theme, setTheme } = useTheme();
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <header ref={headerRef} className="bg-orange-500 dark:bg-orange-700 text-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">DevVortex</h1>
        <div className="flex items-center space-x-4">
          <DonationButton />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <HackerNewsStories />
      </main>
    </div>
  );
};

export default Index;