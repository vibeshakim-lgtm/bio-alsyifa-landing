
import React from 'react';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <CheckIcon className="text-brand-green" />
    <span className="text-gray-700">{text}</span>
  </div>
);

const Features: React.FC = () => {
  const features = [
    'Diluluskan KKM (NOT221005711K)',
    'Halal & selamat digunakan',
    'Berasaskan bahan semulajadi',
    'Sesuai untuk semua peringkat umur',
    'Melegakan kulit kering, gatal & sensitif',
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureItem key={index} text={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
