import React from 'react';
import PremiumIcon from './PremiumIcon';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import TermsContent from './TermsContent';
import PrivacyContent from './PrivacyContent';
import ContactContent from './ContactContent';

const PremiumFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <PremiumIcon icon="ShieldCheckIcon" className="w-6 h-6" />
          <span>Premium Quality News</span>
        </div>
        <div className="flex items-center space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="link" className="text-white hover:text-gray-300 transition-colors">Terms</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Terms of Service</DialogTitle>
              </DialogHeader>
              <TermsContent />
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="link" className="text-white hover:text-gray-300 transition-colors">Privacy</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Privacy Policy</DialogTitle>
              </DialogHeader>
              <PrivacyContent />
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="link" className="text-white hover:text-gray-300 transition-colors">Contact</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Contact Us</DialogTitle>
              </DialogHeader>
              <ContactContent />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;