import React from 'react';

const WeTrust = () => {
  const logos = [
    './images/photos/p1.png',
    './images/photos/p2.png',
    './images/photos/p3.png',
    './images/photos/p4.png',
    './images/photos/p5.png',
    './images/photos/p6.png',
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          We Are Trusted for Our Quality Products
        </h2>
      </div>

      <div className="overflow-hidden relative">
        <div className="marquee flex items-center space-x-8 animate-marquee whitespace-nowrap">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-24 md:w-28 h-auto object-contain"
            />
          ))}
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default WeTrust;
