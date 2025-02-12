import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import Impact from '../components/Impact';
import Events from '../components/Events';
import GalleryPreview from '../components/GalleryPreview';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Programs />
        <Impact />
        <Events />
        <GalleryPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;