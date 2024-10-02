import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const DonationButton = () => {
  const handleDonation = () => {
    // Open UPI app or show QR code
    window.open('upi://pay?pa=adnanmuhammad4393@okicici&pn=DevVortex&mc=0000&tid=0000&tr=Thank you for your donation&tn=Donation to DevVortex');
  };

  return (
    <Button onClick={handleDonation} className="bg-pink-500 hover:bg-pink-600 text-white">
      <Heart className="mr-2 h-4 w-4" /> Donate
    </Button>
  );
};

export default DonationButton;