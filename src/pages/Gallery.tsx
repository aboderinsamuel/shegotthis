import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import image2 from "../assets/images/img2.jpg";
import image3 from "../assets/images/img3.jpg";
import image4 from "../assets/images/img4.jpg";

import image6 from "../assets/images/img6.jpg";
import image7 from "../assets/images/img7.jpg";
import image8 from "../assets/images/img8.jpg";
import image9 from "../assets/images/img9.jpg";
import image10 from "../assets/images/img10.jpg";
import image11 from "../assets/images/img11.jpg";
import image12 from "../assets/images/img12.jpg";
import image14 from "../assets/images/img14.jpg";
import image15 from "../assets/images/img15.jpg";
import image16 from "../assets/images/img16.jpg";
import image17 from "../assets/images/img17.jpg";
import image18 from "../assets/images/img18.jpg";
import image19 from "../assets/images/img19.jpg";
import image20 from "../assets/images/img20.jpg";
import image24 from "../assets/images/img24.jpg";
import image25 from "../assets/images/img25.jpg";
import image26 from "../assets/images/img26.jpg";
import image28 from "../assets/images/s4.jpg";
import image29 from "../assets/images/s5.jpg";
import image30 from "../assets/images/s6.jpg";
import image31 from "../assets/images/s7.jpg";
import image32 from "../assets/images/s8.jpg";
import image33 from "../assets/images/s9.jpg";
import image34 from "../assets/images/s10.jpg";
import image35 from "../assets/images/s11.jpg";
import image36 from "../assets/images/s12.jpg";
import image37 from "../assets/images/s13.jpg";
import image38 from "../assets/images/s14.jpg";
import image39 from "../assets/images/s15.jpg";
import image40 from "../assets/images/s16.jpg";
import image41 from "../assets/images/s17.jpg";
import image42 from "../assets/images/s18.jpg";
import image43 from "../assets/images/s19.jpg";
import image44 from "../assets/images/s20.jpg";
import image45 from "../assets/images/s21.jpg";
import image46 from "../assets/images/s22.jpg";
import image47 from "../assets/images/s23.jpg";
import image48 from "../assets/images/s24.jpg";
import image49 from "../assets/images/shecan2.jpg";
import image50 from "../assets/images/shecan3.jpg";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const images = [
    { src: image28, category: "Sports" },
    { src: image29, category: "Sports" },
    { src: image30, category: "Sports" },
    { src: image31, category: "Sports" },
    { src: image32, category: "Sports" },
    { src: image33, category: "Sports" },
    { src: image34, category: "Sports" },
    { src: image35, category: "Sports" },
    { src: image36, category: "Sports" },
    { src: image37, category: "Sports" },
    { src: image38, category: "Sports" },
    { src: image39, category: "Sports" },
    { src: image40, category: "Sports" },
    { src: image41, category: "Sports" },
    { src: image42, category: "Sports" },
    { src: image43, category: "Sports" },
    { src: image44, category: "Sports" },
    { src: image45, category: "Sports" },
    { src: image46, category: "Sports" },
    { src: image47, category: "Sports" },
    { src: image48, category: "Sports" },
    { src: image49, category: "Sports" },
    { src: image50, category: "Sports" },
    { src: image2, category: "Sports" },
    { src: image3, category: "Community" },
    { src: image4, category: "Events" },
    { src: image6, category: "Community" },
    { src: image7, category: "Events" },
    { src: image8, category: "Sports" },
    { src: image9, category: "Community" },
    { src: image10, category: "Events" },
    { src: image11, category: "Sports" },
    { src: image12, category: "Community" },
    { src: image14, category: "Sports" },
    { src: image15, category: "Community" },
    { src: image16, category: "Events" },
    { src: image17, category: "Sports" },
    { src: image18, category: "Community" },
    { src: image19, category: "Events" },
    { src: image20, category: "Sports" },
    { src: image24, category: "Community" },
    { src: image26, category: "Sports" },
    { src: image25, category: "Events" },
  ];

  const categories = ["all", ...new Set(images.map((img) => img.category))];
  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage !== null) {
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedImage(null);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-20">
        <section className="py-10 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-16">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
                Our Gallery
              </h1>
              <p className="text-base md:text-xl text-gray-600">
                Capturing moments of empowerment and growth
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${
                    filter === category
                      ? "bg-pink-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
              {filteredImages.map((image, index) => (
                <div
                  key={image.src}
                  className="relative aspect-square cursor-pointer overflow-hidden"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.src}
                    alt={`Gallery image ${index + 1}`}
                    className="h-full w-full object-cover transition-transform hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          <div className="w-full h-full flex items-center justify-center p-4">
            <img
              src={filteredImages[selectedImage].src}
              alt={`Gallery image ${selectedImage + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
