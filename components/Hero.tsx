
import React from 'react';
import CtaButton from './CtaButton';

const Hero: React.FC = () => {
  return (
    <section className="bg-brand-green-light pt-20 pb-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-green-dark mb-4 leading-tight">
              Bio Alsyifa Cream
            </h1>
            <h2 className="text-xl text-gray-600 mb-6">
              Rahsia Penjagaan Kulit Semulajadi & Halal
            </h2>
            <p className="text-lg text-gray-500 mb-8">
              Krim serbaguna dengan kelulusan KKM, sesuai untuk seisi keluarga.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
              <span className="text-4xl font-bold text-brand-gold-dark">RM50.00</span>
              <CtaButton />
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-full transform -translate-x-4 -translate-y-4"></div>
                <img
                  src="https://i.postimg.cc/766tc2Sv/20250927-0011-Krim-Bio-Al-Syifa-remix-01k63ckxkbfnat4sz3nwjtvqw8.png"
                  alt="Bio Alsyifa Cream"
                  className="relative rounded-lg shadow-2xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;