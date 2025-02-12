import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function Events() {
  const featuredEvent = {
    title: "April Girls Empowerment Session",
    date: "April 15th, 2025",
    time: "TBA",
    location: "Room 9, 1250 Markham Road",
    description: "A dynamic session focused on self-esteem, leadership, and career mentorship, designed to equip girls with the tools for success.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80"
  };

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600">Join us in making a difference</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredEvent.image}
                  alt="Featured event"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {featuredEvent.title}
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    {featuredEvent.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    {featuredEvent.time}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    {featuredEvent.location}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  {featuredEvent.description}
                </p>
                <button className="w-full bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}