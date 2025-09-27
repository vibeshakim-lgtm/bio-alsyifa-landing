import React from 'react';

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-brand-green-dark mb-4">Rasai Kesegaran Semulajadi</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Setiap sapuan Bio Alsyifa Cream memberikan kelembapan dan kelegaan yang menyegarkan, seolah-olah titisan embun pagi untuk kulit anda.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src="https://i.postimg.cc/FzWRm7qp/Whats-App-Image-2025-09-22-at-19-52-20-2.jpg" alt="Bio Alsyifa Cream Packaging Close-up" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src="https://i.postimg.cc/3Rj1LHqj/Whats-App-Image-2025-09-22-at-19-52-36.jpg" alt="Titisan embun pagi yang menyegarkan pada daun hijau" className="w-full h-full object-cover" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;