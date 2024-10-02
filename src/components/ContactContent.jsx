import React from 'react';

const ContactContent = () => {
  return (
    <div className="max-h-[70vh] overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
      <p className="mb-4">
        We're here to help! Get in touch with us using the following email:
      </p>
      <ul className="list-none mb-4">
        <li className="mb-2"><strong>Email:</strong> devvortexpremium@f5.si</li>
      </ul>
      <p>
        Our support team is available Monday through Friday, 9 AM to 5 PM PST.
      </p>
    </div>
  );
};

export default ContactContent;