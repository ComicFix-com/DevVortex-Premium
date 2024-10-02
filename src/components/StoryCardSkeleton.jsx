import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const StoryCardSkeleton = () => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <Skeleton className="h-6 w-full" />
      </CardHeader>
      <CardContent className="flex-grow">
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-8 w-24" />
      </CardFooter>
    </Card>
  );
};

export default StoryCardSkeleton;