import React from 'react';
import { Mail, Phone, MapPin, User } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">Get in touch with our team</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
                ></textarea>
              </div>
              <button className="w-full bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-pink-600 mr-3" />
                <div>
                  <p className="text-gray-800">Email</p>
                  <a href="mailto:yesshecantoronto@gmail.com" className="text-gray-600 hover:text-pink-600">
                    yesshecantoronto@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-pink-600 mr-3" />
                <div>
                  <p className="text-gray-800">Office Address</p>
                  <p className="text-gray-600">
                    708 – 75 Eastdale Avenue<br />
                    Toronto, ON, M4C 5N3
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <User className="h-6 w-6 text-pink-600 mr-3" />
                <div>
                  <p className="text-gray-800">Executive Director</p>
                  <p className="text-gray-600">
                    Mercy Efetobore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}