import React from 'react';

const TermsContent = () => {
  return (
    <div className="max-h-[70vh] overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Terms of Service</h2>
      <p className="mb-4">
        Welcome to DevVortex. By using our service, you agree to the following terms:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>You must be at least 13 years old to use this service.</li>
        <li>You are responsible for maintaining the confidentiality of your account.</li>
        <li>You agree not to use the service for any illegal or unauthorized purpose.</li>
        <li>We reserve the right to terminate or suspend your account at our discretion.</li>
      </ul>
      <p>
        These terms may be updated from time to time. It is your responsibility to review them periodically.
      </p>
    </div>
  );
};

export default TermsContent;