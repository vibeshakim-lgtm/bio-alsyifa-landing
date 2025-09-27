import React from 'react';
import CtaButton from './CtaButton';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="bg-gradient-to-br from-brand-green to-brand-green-dark text-white p-10 rounded-2xl shadow-2xl text-center">
          <h2 className="font-serif text-4xl font-bold mb-4">Dapatkan Bio Alsyifa Cream Hari Ini!</h2>
          
          <div className="text-xl space-y-2 mb-6">
            <p>• Botol Kecil — <span className="font-bold">RM50</span> (Sesuai untuk cuba / travel)</p>
            <p>• Botol Besar — <span className="font-bold">RM80</span> (Jimat lebih, sesuai penggunaan kerap)</p>
          </div>

          <div className="my-6 space-y-3">
             <p className="text-lg bg-yellow-400 text-yellow-900 font-semibold px-4 py-2 rounded-full inline-block">
              🔥 Promosi: Beli 2 Percuma 1! 🔥
            </p>
            <p className="text-lg">
              🚚 Penghantaran Percuma untuk pembelian RM200 ke atas.
            </p>
          </div>
          <div className="mt-8">
            <CtaButton large />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;