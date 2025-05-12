import React from 'react'; 
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Importing local images
import img7 from '../assets/images/img7.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/s14.jpg';
import img6 from '../assets/images/img6.jpg';


export default function GalleryPreview() {
  // Local featured images
  const featuredImages = [
    { url: img7, category: 'Friends' },
    { url: img2, category: 'Education' },
    { url: img3, category: 'Classroom' },
    { url: img4, category: 'Technology' },
    { url: img5, category: 'Community' },
    { url: img6, category: 'Travel' },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h2>
          <p className="text-xl text-gray-600">Featured moments from our journey</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {featuredImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[16/9] overflow-hidden"
            >
              <img
                src={image.url}
                alt={`Featured gallery image ${index + 1}`}
                className="h-full w-full object-cover transition-transform hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <span className="text-white font-medium">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors"
          >
            View Full Gallery
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
