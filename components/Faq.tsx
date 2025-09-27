
import React from 'react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: 'Adakah produk ini selamat untuk ibu mengandung & bayi?',
    answer: 'Ya, Bio Alsyifa Cream diperbuat daripada bahan semulajadi yang lembut pada kulit. Ia selamat digunakan oleh ibu mengandung, ibu berpantang, dan bayi.'
  },
  {
    question: 'Berapa lama tahan 1 botol?',
    answer: 'Bergantung pada kekerapan penggunaan. Untuk kegunaan biasa pada kawasan kecil, satu botol boleh bertahan sehingga 1-2 bulan.'
  },
  {
    question: 'Adakah sesuai untuk kulit sensitif?',
    answer: 'Sangat sesuai. Formula kami direka khas untuk menenangkan kulit sensitif, mengurangkan kemerahan dan keradangan tanpa bahan kimia berbahaya.'
  },
  {
    question: 'Macam mana cara nak order?',
    answer: 'Sangat mudah! Hanya klik butang "Order Sekarang di WhatsApp" di laman ini dan team kami akan bantu anda untuk proses pesanan.'
  }
];

const FaqAccordionItem: React.FC<{ item: FaqItem }> = ({ item }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <details className="group">
        <summary className="flex justify-between items-center font-semibold cursor-pointer list-none">
          <span>{item.question}</span>
          <span className="transition group-open:rotate-180">
            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
          </span>
        </summary>
        <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
          {item.answer}
        </p>
      </details>
    </div>
  )
}

const Faq: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto max-w-3xl px-6">
        <h2 className="font-serif text-3xl font-bold text-center text-brand-green-dark mb-12">
          Soalan Lazim (FAQ)
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FaqAccordionItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
