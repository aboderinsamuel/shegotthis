import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Impact() {
  const stats = [
    { number: '1000+', label: 'Girls Empowered' },
    { number: '50+', label: 'Community Partners' },
    { number: '100+', label: 'Annual Events' },
    { number: '90%', label: 'Success Rate' },
  ];

  const testimonials = [
    {
      quote: "Yes She Can Initiative changed my life. I found my confidence and learned that I can achieve anything I set my mind to.",
      author: "Sarah Johnson",
      role: "Program Graduate",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600">Making a difference in our community</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-pink-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-8">
              <img
                src={testimonials[0].image}
                alt={testimonials[0].author}
                className="w-20 h-20 rounded-full"
              />
              <div>
                <blockquote className="text-xl text-gray-800 mb-4">
                  "{testimonials[0].quote}"
                </blockquote>
                <cite className="block font-semibold text-gray-800">
                  {testimonials[0].author}
                </cite>
                <span className="text-gray-600">{testimonials[0].role}</span>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50">
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50">
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}