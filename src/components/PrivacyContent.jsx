import React from 'react';

const PrivacyContent = () => {
  return (
    <div className="max-h-[70vh] overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Privacy Policy</h2>
      <p className="mb-4">
        At DevVortex, we take your privacy seriously. Here's how we handle your information:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>We collect only the information necessary to provide our service.</li>
        <li>Your personal data is stored securely and is never sold to third parties.</li>
        <li>We use cookies to enhance your browsing experience and analyze site traffic.</li>
        <li>You can request to view, modify, or delete your personal data at any time.</li>
      </ul>
      <p>
        For more information about our privacy practices, please contact us.
      </p>
    </div>
  );
};

export default PrivacyContent;