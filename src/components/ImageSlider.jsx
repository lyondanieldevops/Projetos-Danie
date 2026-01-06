import React from 'react';
// Importamos o seu vídeo local da pasta assets
import videoBanner from '../assets/video-banner.mp4';

const ImageSlider = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black rounded-[40px] shadow-2xl mt-4">
      {/* Vídeo Local com ajuste fino de posição */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        /* O estilo inline permite subir o vídeo milimetricamente */
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        style={{ objectPosition: 'center 80%' }}
      >
        <source src={videoBanner} type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Conteúdo sobre o vídeo */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-tight max-w-4xl">
          Quando tocamos música, <br /> criamos histórias.
        </h1>
        <a 
          href="https://wa.me/5561981976241"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all shadow-2xl"
        >
          Agende sua aula
        </a>
      </div>

      {/* Gradiente para suavizar a base */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
    </section>
  );
};

export default ImageSlider;