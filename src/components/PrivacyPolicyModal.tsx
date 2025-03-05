"use client";

import React from "react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Privacy Policy</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="prose prose-sm max-w-none text-gray-600">
            <h3 className="text-lg font-semibold mb-2">1. Introduction</h3>
            <p>
              Welcome to Is It From Canada's Privacy Policy. This policy
              explains how we collect, use, and protect your personal
              information when you use our service.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">
              2. Information We Collect
            </h3>
            <p>We collect the following information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Search queries you enter</li>
              <li>Usage data through Google Analytics (with your consent)</li>
              <li>Cookie preferences</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">
              3. How We Use Google Analytics
            </h3>
            <p>With your consent, we use Google Analytics to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Understand how users interact with our application</li>
              <li>Improve user experience</li>
              <li>Track search patterns and improve search results</li>
            </ul>
            <p>
              We have configured Google Analytics to anonymize IP addresses and
              minimize data collection to what is necessary for our service
              improvement.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">4. Cookies</h3>
            <p>We use two types of cookies:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Necessary cookies:</strong> Required for the application
                to function properly
              </li>
              <li>
                <strong>Analytics cookies:</strong> Used only with your consent
                to improve our service
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">5. Your Rights</h3>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access the information we hold about you</li>
              <li>Have your data deleted</li>
              <li>Change your cookie preferences at any time</li>
              <li>Opt-out of analytics</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">
              6. Data Retention
            </h3>
            <p>
              We store your recent searches locally on your device. Analytics
              data is retained for 14 months.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">7. Contact Us</h3>
            <p>
              If you have questions about this privacy policy, please contact us
              at privacy@truenorthdetector.com.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">
              8. Changes to This Policy
            </h3>
            <p>
              We may update this policy from time to time. Last updated: March
              2025.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
