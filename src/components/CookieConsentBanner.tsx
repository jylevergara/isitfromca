"use client"

import React from 'react';

interface CookieConsentBannerProps {
  isShown: boolean;
  onAcceptAll: () => void;
  onAcceptNecessaryOnly: () => void;
}

const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ 
  isShown, 
  onAcceptAll, 
  onAcceptNecessaryOnly 
}) => {
  if (!isShown) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h3 className="text-sm font-bold text-gray-800 mb-2">Cookie Consent</h3>
            <p className="text-xs text-gray-600">
              We use cookies to enhance your experience. Necessary cookies are required for core functionality. 
              Analytics cookies help us improve our service. You can change your preferences anytime.
              By clicking "Accept All", you agree to the use of cookies.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={onAcceptNecessaryOnly}
              className="text-xs px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Necessary Only
            </button>
            <button
              onClick={onAcceptAll}
              className="text-xs px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;