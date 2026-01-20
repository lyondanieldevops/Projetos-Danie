import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Ajustado para bater com os arquivos da sua pasta assets
import fotoPiano from '../assets/piano.jpeg';
import fotoBateria from '../assets/bateria.png'; 
import fotoViolao from '../assets/violao.jpeg';
import fotoTeclado from '../assets/teclado.jpeg';
import fotoSobre from '../assets/sobre.png'; // CORRIGIDO: de .jpeg para .png

const images = [fotoPiano, fotoBateria, fotoViolao, fotoTeclado, fotoSobre];

export default function ImageSlider() {
  return (
    <section className="py-24 bg-black border-t border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-[#D4AF37] font-serif text-3xl uppercase tracking-[0.3em] mb-12 font-bold">Ambiente de Ensino</h2>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="pb-12"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative group overflow-hidden border border-[#D4AF37]/20">
                <img src={img} className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Galeria" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}