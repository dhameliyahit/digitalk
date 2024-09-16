import React, { useState } from "react";

const HeroSection = () => {
  // Initial state for the main image
  const [mainImage, setMainImage] = useState("./images/img-1.png");
  const [fadeIn, setFadeIn] = useState(true);

  // List of thumbnail images
  const thumbnails = [
    "./images/img-1.png",
    "./images/img-2.png",
    "./images/img-3.png",
    "./images/img-4.png",
  ];

  // Handle image click
  const handleImageClick = (thumbnail) => {
    setFadeIn(false); // Trigger fade out
    setTimeout(() => {
      setMainImage(thumbnail); // Change the main image after fade out
      setFadeIn(true); // Trigger fade in after image change
    }, 200); // Adjust timeout for smooth transition
  };

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Circle */}
      <div className="absolute top-0 right-10 transform translate-x-1/4 -translate-y-1/4 w-64 h-64 sm:w-96 sm:h-96 lg:w-[40vw] lg:h-[40vw] bg-[#9ABCFF] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:flex lg:items-center lg:justify-between">
        {/* Left Section - Text & CTA */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Build For your Next
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            We provide NFC Stand for your business.
          </p>
          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500">
            Book Now
          </button>
        </div>

        {/* Right Section - Image and Gallery */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex flex-col items-center">
          {/* Main Image */}
          <div className="relative">
            <img
              src={mainImage} // The main image displayed
              alt="NFC Stand"
              className={`w-64 h-80 object-contain transition-opacity duration-300 ease-in-out ${
                fadeIn ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Image Thumbnails */}
          <div className="mt-6 flex justify-center space-x-4">
            {thumbnails.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover border border-gray-200 rounded-md cursor-pointer ${
                  mainImage === thumbnail ? "border-blue-600" : ""
                }`}
                onClick={() => handleImageClick(thumbnail)} // Set main image on click
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
