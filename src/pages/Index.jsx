import React from 'react';
import { useTheme } from 'next-themes';
import HackerNewsStories from '../components/HackerNewsStories';
import PremiumHeader from '../components/PremiumHeader';
import PremiumFooter from '../components/PremiumFooter';

const Index = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <PremiumHeader theme={theme} setTheme={setTheme} />
      <main className="container mx-auto p-8">
        <HackerNewsStories />
      </main>
      <PremiumFooter />
    </div>
  );
};

export default Index;