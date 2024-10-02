import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import StoryCard from './StoryCard';
import StoryCardSkeleton from './StoryCardSkeleton';
import PremiumIcon from './PremiumIcon';
import gsap from 'gsap';

const fetchStories = async (searchTerm = '') => {
  const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${searchTerm}&hitsPerPage=10000`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const HackerNewsStories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['hackerNewsStories', searchTerm],
    queryFn: () => fetchStories(searchTerm),
    enabled: false,
  });

  const storiesRef = useRef(null);

  useEffect(() => {
    if (data && !isLoading) {
      gsap.from(storiesRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power3.out'
      });
    }
  }, [data, isLoading]);

  const handleSearch = () => {
    refetch();
  };

  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-lg">
        <PremiumIcon icon="SearchIcon" className="w-6 h-6 text-purple-400" />
        <Input
          type="text"
          placeholder="Search premium stories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow bg-gray-700 text-white border-purple-500 focus:ring-purple-400"
        />
        <Button onClick={handleSearch} className="bg-purple-600 hover:bg-purple-700">
          Search
        </Button>
      </div>
      <div ref={storiesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? [...Array(9)].map((_, index) => <StoryCardSkeleton key={index} />)
          : data?.hits.map((story) => <StoryCard key={story.objectID} story={story} />)
        }
      </div>
    </div>
  );
};

export default HackerNewsStories;