import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Gift, Users, Calendar } from 'lucide-react';

export default function SupportPage() {
  const supportOptions = [
    {
      icon: Gift,
      title: 'Make a Donation',
      description: 'Your financial support helps us continue our mission of empowering young girls.',
      action: 'Donate Now',
      primary: true
    },
    {
      icon: Users,
      title: 'Become a Mentor',
      description: 'Share your experience and knowledge to inspire the next generation.',
      action: 'Join as Mentor',
      primary: false
    },
    {
      icon: Calendar,
      title: 'Volunteer',
      description: 'Contribute your time and skills to our various programs and events.',
      action: 'Volunteer',
      primary: false
    },
    {
      icon: Heart,
      title: 'Partner With Us',
      description: 'Create lasting impact through organizational partnerships.',
      action: 'Partner',
      primary: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Support Our Mission
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join us in making a difference in the lives of young girls. Your support helps us create more opportunities and empower the next generation of leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {supportOptions.map((option) => (
                <div key={option.title} className="bg-white rounded-xl shadow-lg p-8">
                  <option.icon className="h-12 w-12 text-pink-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-8">
                    {option.description}
                  </p>
                  <button
                    className={`w-full py-3 px-6 rounded-full font-medium transition-colors ${
                      option.primary
                        ? 'bg-pink-600 text-white hover:bg-pink-700'
                        : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
                    }`}
                  >
                    {option.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-12">
                Your Support Makes a Difference
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-pink-600 mb-2">1000+</div>
                  <div className="text-gray-600">Girls Supported</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-600 mb-2">50+</div>
                  <div className="text-gray-600">Active Mentors</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-600 mb-2">100+</div>
                  <div className="text-gray-600">Annual Events</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-600 mb-2">90%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}