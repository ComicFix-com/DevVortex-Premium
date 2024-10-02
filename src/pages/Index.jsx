import React from 'react';
import HackerNewsStories from '../components/HackerNewsStories';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-orange-500 text-white p-4">
        <h1 className="text-3xl font-bold">welearn</h1>
      </header>
      <main className="container mx-auto p-4">
        <HackerNewsStories />
      </main>
    </div>
  );
};

export default Index;