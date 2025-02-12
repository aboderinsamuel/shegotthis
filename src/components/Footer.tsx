import React from 'react';
import { Users, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Newsletter form submitted');
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-xl font-bold">Yes She Can</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering girls to become tomorrow's leaders through education, mentorship, and community support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pink-500">Home</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-pink-500">Programs</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-pink-500">About Us</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-pink-500">Events</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-pink-500">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest news and events.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              />
              <button className="w-full bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <address className="text-gray-400 not-italic">
              123 Empowerment Street<br />
              City, State 12345<br />
              <a href="tel:+1234567890" className="hover:text-pink-500">
                (123) 456-7890
              </a><br />
              <a href="mailto:info@yesshecan.org" className="hover:text-pink-500">
                info@yesshecan.org
              </a>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Yes She Can Initiative. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-pink-500 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}