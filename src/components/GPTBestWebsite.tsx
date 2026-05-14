import React from 'react';
import Hero from './sections/Hero';
import Features from './sections/Features';
import ChatPreview from './sections/ChatPreview';
import About from './sections/About';
import Footer from './sections/Footer';

export default function GPTBestWebsite() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <ChatPreview />
      <About />
      <Footer />
    </div>
  );
}
