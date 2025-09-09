'use client';

import React from 'react';
import Image from 'next/image';

interface LogoSliderProps {
  title?: string;
  subtitle?: string;
}

const LogoSlider: React.FC<LogoSliderProps> = ({ 
  title = "Our Trusted Partners", 
  subtitle = "We collaborate with leading financial institutions and investment firms to bring you the best opportunities" 
}) => {
  // Logo data with correct file paths
  const logos = [
    { name: "Motilal Oswal", src: "/logo/Motilal_Oswal.png" },
    { name: "IIFL", src: "/logo/IIFL_Logo.png" },
    { name: "Alchemy PMS", src: "/logo/Alchemy_PMS.png" },
    { name: "ASK", src: "/logo/ASK.png" },
    { name: "2Point2", src: "/logo/2point2_logo.png" },
    { name: "Prabhudas Lilladher", src: "/logo/img1.jpg" },
    { name: "SBI Funds", src: "/logo/img2.png" },
    { name: "Joindre Portfolio", src: "/logo/img3.png" },
    { name: "Prabhudas Lilladher", src: "/logo/img4.jpg" },
    { name: "SBI Funds", src: "/logo/img5.jpg" },
    { name: "Joindre Portfolio", src: "/logo/img6.jpg" },
    { name: "Prabhudas Lilladher", src: "/logo/img7.png" },
    { name: "SBI Funds", src: "/logo/img8.jpg" },
    { name: "Joindre Portfolio", src: "/logo/img9.jpg" },
    { name: "IIFL Investment", src: "/logo/img10.png" },
    { name: "CARE Portfolio", src: "/logo/img11.png" },
    { name: "Nippon India", src: "/logo/img12.png" },
    { name: "Alchemy Capital", src: "/logo/img13.png" },
    { name: "Kotak Asset", src: "/logo/img14.jpeg" },
    { name: "ASK Investment", src: "/logo/img15.jpeg" },
    { name: "2Point2 Capital", src: "/logo/img16.png" },
    { name: "ASK Investment", src: "/logo/img17.png" },
    { name: "2Point2 Capital", src: "/logo/img18.jpg" },
    { name: "Marcellus", src: "/logo/marcellus.jpg" }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="relative">
          {/* First row of logos */}
          <div className="flex animate-scroll">
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <div className="w-32 h-20 flex items-center justify-center bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                  <Image 
                    src={logo.src}
                    alt={logo.name}
                    width={128}
                    height={80}
                    className="max-h-full max-w-full object-contain"
                    priority={index < 5} // Prioritize loading first 5 images
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Second row of logos (reversed) */}
          <div className="flex animate-scroll-reverse mt-8">
            {[...logos].reverse().map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <div className="w-32 h-20 flex items-center justify-center bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                  <Image 
                    src={logo.src}
                    alt={logo.name}
                    width={128}
                    height={80}
                    className="max-h-full max-w-full object-contain"
                    priority={index < 5} // Prioritize loading first 5 images
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-scroll-reverse {
          animation: scroll-reverse 40s linear infinite;
        }
        
        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default LogoSlider;
