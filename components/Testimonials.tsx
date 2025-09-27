
import React from 'react';
import { Testimonial } from '../types';

const testimonialData: Testimonial[] = [
  {
    avatarUrl: 'https://picsum.photos/seed/aisyah/100/100',
    name: 'Aisyah',
    age: 29,
    quote: 'Saya suka teksturnya, cepat meresap dan tak melekit. Kulit rasa sangat selesa lepas guna. Bau pun wangi, natural je.'
  },
  {
    avatarUrl: 'https://picsum.photos/seed/farhan/100/100',
    name: 'Farhan',
    age: 34,
    quote: 'Packaging kecil, senang dibawa ke mana-mana. Sangat membantu bila kulit anak saya tiba-tiba jadi kering. Kulit lebih lembut sekarang.'
  },
  {
    avatarUrl: 'https://picsum.photos/seed/siti/100/100',
    name: 'Puan Siti',
    age: 45,
    quote: 'Produk yang wajib ada dalam setiap rumah. Sesuai untuk semua dari anak kecil sampai orang dewasa. Kesan sangat cepat, gatal-gatal pun hilang.'
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
    <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 border-4 border-brand-green-light" />
    <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
    <h4 className="font-bold text-brand-green-dark">{testimonial.name}, {testimonial.age}</h4>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="font-serif text-3xl font-bold text-center text-brand-green-dark mb-12">
          Apa Kata Pengguna Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
