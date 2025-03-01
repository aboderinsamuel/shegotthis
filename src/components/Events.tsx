"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import classroom from "../assets/images/classroom.jpg";
import camp from "../assets/images/camp.jpg";

export default function Events() {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const events = [
    {
      title: "March Break Camp 2025",
      date: "March 10th - 14th, 2025",
      time: "All Day",
      location: "Galloway Road PS, Lawrence Ave, Scarborough",
      description:
        "Join us for an exciting and engaging March Break Camp from March 10th - 14th, 2025. Our camp offers a dynamic mix of sports, recreation, arts, and leadership training for all participants.",
      image: camp,
      registerUrl: "https://forms.gle/AoimcoNqD9D1jhPe7",
    },
    {
      title: "April Girls Empowerment Session",
      date: "April 15th, 2025",
      time: "TBA",
      location: "William G Miller Ps 60 Bennet road Scarborough M1E 3Y3",
      description:
        "A dynamic session focused on self-esteem, leadership, and career mentorship, designed to equip girls with the tools for success.",
      image: classroom,
    },
  ];

  const handleNavigation = useCallback(
    (direction: string) => {
      if (isTransitioning) return;

      setIsTransitioning(true);

      if (direction === "next") {
        setCurrentEvent((prev) => (prev + 1) % events.length);
      } else {
        setCurrentEvent((prev) => (prev - 1 + events.length) % events.length);
      }

      // Reset transition state after animation completes
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning, events.length]
  );

  // Auto-advance carousel (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNavigation("next");
    }, 8000);

    return () => clearInterval(interval);
  }, [handleNavigation]);

  const handleRegisterClick = () => {
    const event = events[currentEvent];
    if (event.registerUrl) {
      window.open(event.registerUrl, "_blank");
    }
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

        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white">
            {/* Event Content */}
            <div
              className={`flex flex-col lg:flex-row transition-opacity duration-500 ${
                isTransitioning ? "opacity-70" : "opacity-100"
              }`}
            >
              {/* Image Section */}
              <div className="relative w-full lg:w-1/2 h-[250px] lg:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                <img
                  src={events[currentEvent].image || "/placeholder.svg"}
                  alt={events[currentEvent].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Event counter on image */}
                <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                  {currentEvent + 1} / {events.length}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                    {events[currentEvent].title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start text-gray-700">
                      <Calendar className="h-5 w-5 mr-3 mt-0.5 text-pink-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Date</p>
                        <p>{events[currentEvent].date}</p>
                      </div>
                    </div>

                    <div className="flex items-start text-gray-700">
                      <Clock className="h-5 w-5 mr-3 mt-0.5 text-pink-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Time</p>
                        <p>{events[currentEvent].time}</p>
                      </div>
                    </div>

                    <div className="flex items-start text-gray-700">
                      <MapPin className="h-5 w-5 mr-3 mt-0.5 text-pink-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="break-words">
                          {events[currentEvent].location}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {events[currentEvent].description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className="flex-1 bg-pink-600 text-white px-6 py-3.5 rounded-lg hover:bg-pink-700 transition-colors font-medium shadow-sm hover:shadow-md"
                    onClick={handleRegisterClick}
                  >
                    Register Now
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 px-6 py-3.5 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Controls - Professional Style */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 lg:px-8 transform -translate-y-1/2 pointer-events-none z-20">
              {/* Previous Button */}
              <button
                onClick={() => handleNavigation("prev")}
                className="group w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm text-gray-800 rounded-full shadow-lg hover:bg-white transition-all duration-300 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-pink-400"
                disabled={isTransitioning}
                aria-label="Previous event"
              >
                <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6 group-hover:text-pink-600 transition-colors" />
              </button>

              {/* Next Button */}
              <button
                onClick={() => handleNavigation("next")}
                className="group w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm text-gray-800 rounded-full shadow-lg hover:bg-white transition-all duration-300 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-pink-400"
                disabled={isTransitioning}
                aria-label="Next event"
              >
                <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6 group-hover:text-pink-600 transition-colors" />
              </button>
            </div>

            {/* Event Indicators */}
            <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 flex gap-1.5 z-20">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEvent(index)}
                  className={`w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-all duration-300 ${
                    currentEvent === index
                      ? "bg-pink-600 w-4 lg:w-5"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to event ${index + 1}`}
                  disabled={isTransitioning}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}