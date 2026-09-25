import React from 'react';
import './ClientStrip.css';

export default function ClientStrip() {
  const clients = [
    "/logos/image 9.png",
    "/logos/image 10.png",
    "/logos/image 11.png",
    "/logos/image 12.png",
    "/logos/image 13.png",
    "/logos/image 14.png",
    "/logos/image 15.png",
    "/logos/image 16.png",
    "/logos/image 17.png",
    "/logos/image 18.png",
  ];

  const logos = (
    <>
      {clients.map((src, index) => (
        <div key={index} className="flex items-center justify-center shrink-0 w-[180px] h-[100px]">
          <img 
            src={src} 
            alt={`Client ${index + 1}`} 
            className="w-auto max-h-[50px] max-w-[150px] object-contain transition-all duration-300 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-105"
          />
        </div>
      ))}
    </>
  );

  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="client-strip-wrapper">
        <div className="client-strip-track">
          <div className="client-strip-group">{logos}</div>
          <div className="client-strip-group">{logos}</div>
        </div>
      </div>
    </section>
  );
}
