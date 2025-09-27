
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green-dark text-white">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div>
            <h3 className="font-bold text-lg mb-3 text-brand-gold">Teguh H&A Trading</h3>
            <p className="text-gray-300">Kami komited untuk membawakan produk penjagaan diri berasaskan bahan semulajadi, halal dan berkualiti tinggi untuk anda sekeluarga.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3 text-brand-gold">Hubungi Kami</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Telefon: 013-9825973</li>
              <li>Email: vibeshakim@gmail.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3 text-brand-gold">Jaminan Kualiti</h3>
            <ul className="space-y-2 text-gray-300">
              <li>✅ Lulus KKM: NOT221005711K</li>
              <li>✅ Dijamin Halal</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p className="mb-2">
            Disclaimer: “Produk ini tidak bertujuan untuk menggantikan nasihat doktor. Sila rujuk pakar jika ada masalah kesihatan serius.”
          </p>
          <p>&copy; {new Date().getFullYear()} Teguh H&A Trading. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
