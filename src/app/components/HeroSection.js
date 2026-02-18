"use client";

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-corporate-navy text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">
            Transforming Agriculture Through Strategic Integration
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-meadow-green animate-fade-in-up">
            Livestock · Grains · Bee Farming · Processing · Export
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/about" 
              className="bg-sun-gold hover:bg-forest-green text-corporate-navy font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
            >
              Explore Our Integrated Model
            </Link>
            <Link 
              href="/downloads" 
              className="border-2 border-white hover:bg-white hover:text-corporate-navy text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Download Corporate Overview (PDF)
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}