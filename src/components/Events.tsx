import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import img23 from "../assets/images/img23.jpg";

export default function Events() {
  const featuredEvent = {
    title: "April Girls Empowerment Session",
    date: "April 15th, 2025",
    time: "TBA",
    location: "Room 9, 1250 Markham Road",
    description:
      "A dynamic session focused on self-esteem, leadership, and career mentorship, designed to equip girls with the tools for success.",
    image: img23,
  };

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600">
            Join us in making a difference
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Card with increased desktop height */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row md:h-[450px]">
            {/* Image container */}
            <div className="relative w-full md:w-1/2 overflow-hidden h-[250px] md:h-full">
              <img
                src={featuredEvent.image}
                alt="Featured event"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>

            {/* Content container */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {featuredEvent.title}
                </h3>
                <div className="space-y-3 mb-4">
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
                <p className="text-gray-600 mb-4">
                  {featuredEvent.description}
                </p>
              </div>
              <button className="w-full bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-colors">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
