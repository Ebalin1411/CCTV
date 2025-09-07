// app/page.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const images = ['/cctv1.jpg', '/cctv2.png', '/cctv3.jpg', '/cctv4.jpg'];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero with Carousel */}
      <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="CCTV Service"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Secure Your World with CCTV
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Professional installation & monitoring solutions to protect what
            matters most.
          </p>
          <Link
            href={'/getQuote'}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition"
          >
            Get a Quote
          </Link>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 flex justify-center w-full space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                index === i ? 'bg-yellow-500' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
