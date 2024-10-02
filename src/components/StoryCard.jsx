import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpIcon, ExternalLinkIcon } from 'lucide-react';

const StoryCard = ({ story }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">{story.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-500">By {story.author}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center">
          <ArrowUpIcon className="w-4 h-4 mr-1 text-orange-500" />
          <span>{story.points}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(story.url, '_blank')}
        >
          Read More <ExternalLinkIcon className="w-4 h-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StoryCard;