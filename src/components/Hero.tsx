import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="Girls empowerment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 to-purple-600/90" />
      </div>
      
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Empowering Girls to Become Tomorrow's Leaders
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Building confidence, fostering leadership, and creating opportunities for girls to thrive in every aspect of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Involved
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}