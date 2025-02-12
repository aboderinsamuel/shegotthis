import React from 'react';
import { Dumbbell, Heart, Users } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      title: 'Girls in Sports',
      description: 'Empowering girls through athletics, building confidence, and developing leadership skills on and off the field.',
      icon: Dumbbell,
      action: 'Join Program',
    },
    {
      title: 'Girls/Female Supplies',
      description: "Providing essential supplies and resources to support girls' health, education, and well-being.",
      icon: Heart,
      action: 'Donate Supplies',
    },
    {
      title: 'Girls Talk Hub',
      description: 'A safe space for girls to connect, share experiences, and support each other through meaningful conversations.',
      icon: Users,
      action: 'Register Now',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we're making a difference in girls' lives through our diverse programs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform"
            >
              <program.icon className="h-12 w-12 text-pink-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <button className="w-full bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-colors">
                {program.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}