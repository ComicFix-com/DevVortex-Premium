import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PremiumIcon from './PremiumIcon';

const StoryCard = ({ story }) => {
  return (
    <Card className="h-full flex flex-col bg-gradient-to-br from-gray-800 to-gray-900 border-purple-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-t-lg">
        <CardTitle className="text-lg text-white">{story.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <p className="text-sm text-gray-300">By {story.author}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4 bg-gray-800 rounded-b-lg">
        <div className="flex items-center text-purple-400">
          <PremiumIcon icon="ThumbUpIcon" className="w-4 h-4 mr-1" />
          <span>{story.points}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(story.url, '_blank')}
          className="bg-purple-600 text-white hover:bg-purple-700 border-none"
        >
          Read More <PremiumIcon icon="ArrowRightIcon" className="w-4 h-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StoryCard;