import React from 'react';

const ContactContent = () => {
  return (
    <div className="max-h-[70vh] overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
      <p className="mb-4">
        We're here to help! Get in touch with us using any of the following methods:
      </p>
      <ul className="list-none mb-4">
        <li className="mb-2"><strong>Email:</strong> support@devvortex.com</li>
        <li className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</li>
        <li className="mb-2"><strong>Address:</strong> 123 Tech Street, Silicon Valley, CA 94000</li>
      </ul>
      <p>
        Our support team is available Monday through Friday, 9 AM to 5 PM PST.
      </p>
    </div>
  );
};

export default ContactContent;