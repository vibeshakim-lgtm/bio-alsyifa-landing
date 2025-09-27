import React from 'react';

const VideoShowcase: React.FC = () => {
  const testimonialVideoUrl = "https://www.youtube.com/embed/YLo7gY32JBE";
  const animationVideoUrl = "https://www.youtube.com/embed/EMb4BEgDiw4";

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-brand-green-dark mb-12">
          Lihat Testimoni & Animasi Produk
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Slot Video Testimoni */}
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-100">
            <iframe
              src={testimonialVideoUrl}
              className="w-full aspect-[9/16] border-0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Video Testimoni Pelanggan Bio Alsyifa Cream"
            ></iframe>
          </div>

          {/* Slot Video Animasi Produk */}
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-100">
            <iframe
              src={animationVideoUrl}
              className="w-full aspect-[9/16] border-0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Video Animasi Produk Bio Alsyifa Cream"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
