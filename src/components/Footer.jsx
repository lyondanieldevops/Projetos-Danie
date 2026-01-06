import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-2">
          Prof. Lyon Daniel
        </h2>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-8">
          Escola de Música
        </p>
        
        <div className="space-y-2 mb-12">
          <p className="text-gray-600 font-medium">(61) 98197-6241</p>
          <p className="text-gray-400 text-sm">Brasília - DF</p>
        </div>

        <div className="pt-8 border-t border-gray-50">
          <p className="text-[10px] text-gray-300 uppercase tracking-widest font-bold">
            © 2026 Prof. Lyon Daniel. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;