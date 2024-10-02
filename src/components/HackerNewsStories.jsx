import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import StoryCard from './StoryCard';
import StoryCardSkeleton from './StoryCardSkeleton';
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

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <Input
          type="text"
          placeholder="Search stories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div ref={storiesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading
          ? [...Array(9)].map((_, index) => <StoryCardSkeleton key={index} />)
          : data?.hits.map((story) => <StoryCard key={story.objectID} story={story} />)
        }
      </div>
    </div>
  );
};

export default HackerNewsStories;