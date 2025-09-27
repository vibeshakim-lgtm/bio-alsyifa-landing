
import React from 'react';

interface InfoCardProps {
  title: string;
  content: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-brand-gold transition-colors duration-300">
    <h3 className="font-serif text-xl font-bold text-brand-gold-dark mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{content}</p>
  </div>
);

const ProductInfo: React.FC = () => {
  return (
    <section className="py-16 bg-brand-green-light">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoCard
            title="Apa itu Bio Alsyifa Cream?"
            content="Krim pelembap serbaguna yang dirumus khas daripada bahan-bahan semulajadi terpilih untuk membantu melegakan masalah kulit kering, gatal-gatal, dan sensitif."
          />
          <InfoCard
            title="Kandungan & Keistimewaan"
            content="Diperkaya dengan ekstrak herba semulajadi yang terkenal dengan sifat penyembuhan. Teksturnya tidak berminyak, cepat meresap dan selamat untuk seisi keluarga."
          />
          <InfoCard
            title="Cara Penggunaan"
            content="Ambil sedikit krim dan sapu nipis pada kawasan kulit yang bermasalah. Ulangi 2 hingga 3 kali sehari atau apabila perlu untuk kelegaan optimum."
          />
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
