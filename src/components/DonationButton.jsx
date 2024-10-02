import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DonationButton = () => {
  const handleDonation = (amount) => {
    const upiLink = `upi://pay?pa=adnanmuhammad4393@okicici&pn=DevVortex&mc=0000&tid=0000&tr=Thank you for your donation&tn=Donation to DevVortex&am=${amount}`;
    window.open(upiLink);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-pink-500 hover:bg-pink-600 text-white">
          <Heart className="mr-2 h-4 w-4" /> Donate
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Make a Donation</DialogTitle>
          <DialogDescription>
            Choose your donation amount. For every ₹1 you donate, we'll contribute ₹10!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button onClick={() => handleDonation(100)} className="w-full">
            Donate ₹100 (We'll add ₹1000) <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button onClick={() => handleDonation(500)} className="w-full">
            Donate ₹500 (We'll add ₹5000) <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button onClick={() => handleDonation(1000)} className="w-full">
            Donate ₹1000 (We'll add ₹10000) <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Every 10 donations help support open source projects, teams, and contributors!
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default DonationButton;