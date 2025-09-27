import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import ProductInfo from './components/ProductInfo';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import VideoShowcase from './components/VideoShowcase';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans text-gray-800 antialiased">
      <Header />
      <main>
        <Hero />
        <section id="features">
          <Features />
        </section>
        <ProductShowcase />
        <ProductInfo />
        <VideoShowcase />
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="faq">
          <Faq />
        </section>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default App;