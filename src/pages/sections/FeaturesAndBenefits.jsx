import React from 'react';

const FeaturesAndBenefits = () => {
  // Features and Benefits data
  const features = [
    "NFC Technology for Instant Access",
    "Customizable Information Storage",
    "Durable and Stylish Design",
    "Easy to Update and Reprogram"
  ];

  const benefits = [
    "Quickly share your contact details with a simple tap",
    "Update your information anytime without needing a new card",
    "Stand out with a modern and professional appearance",
    "Reduce waste with a reusable and eco-friendly option"
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24 font-inter">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-mono font-semibold text-gray-800 mb-4">Features & Benefits</h2>
        <p className="text-lg text-gray-600">Discover what makes our NFC business card exceptional</p>
      </div>

      {/* Features and Benefits Container */}
      <div className="flex flex-col lg:flex-row lg:space-x-12">
        
        {/* Features */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Key Features</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            {features.map((feature, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out flex items-start">
                <svg className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m-6 4V4a1 1 0 011-1h10a1 1 0 011 1v16a1 1 0 01-1 1H9a1 1 0 01-1-1z"></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Benefits</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            {benefits.map((benefit, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out flex items-start">
                <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAndBenefits;
