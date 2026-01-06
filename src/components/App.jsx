import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Componentes
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import PaginaCurso from './PaginaCurso';
import ScrollToTop from './ScrollToTop';

// Importação das fotos [cite: 2026-01-01]
import imgViolao from '../assets/violao.png';
import imgPiano from '../assets/piano.png';
import imgTeclado from '../assets/teclado.png';
import imgBateria from '../assets/bateria.png';
import sobremim from '../assets/sobre.mim.png';

function App() {
  const cursos = [
    { 
      id: 'violao', 
      title: 'Violão', 
      image: imgViolao, 
      slogan: 'Sinta a vibração das cordas!',
      desc: 'Aulas personalizadas para dominar o violão com técnica e fluidez.' 
    },
    { 
      id: 'piano', 
      title: 'Piano', 
      image: imgPiano, 
      slogan: 'A elegância das teclas ao seu alcance.',
      desc: 'Descubra a sensibilidade do piano através de um método exclusivo.' 
    },
    { 
      id: 'teclado', 
      title: 'Teclado', 
      image: imgTeclado, 
      slogan: 'A versatilidade sonora em suas mãos.',
      desc: 'Domine as teclas e a teoria musical de forma prática.' 
    },
    { 
      id: 'bateria', 
      title: 'Bateria', 
      image: imgBateria, 
      slogan: 'Sinta a energia do ritmo!',
      desc: 'Desenvolva coordenação e técnica com aulas dinâmicas.' 
    },
  ];

  const Home = () => (
    <div className="bg-white">
      <ImageSlider />
      
      <section id="aulas" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-20 uppercase tracking-tighter text-gray-900">Nossos Cursos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cursos.map((curso) => (
              <Link to={`/curso/${curso.id}`} key={curso.id} className="group">
                <div className="overflow-hidden rounded-[40px] shadow-2xl mb-6 bg-gray-100 aspect-[3/4] relative">
                  <img 
                    src={curso.image} 
                    alt={curso.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">{curso.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <img src={sobremim} alt="Prof. Daniel Lyon" className="rounded-[50px] shadow-2xl w-full" />
          </div>
          <div className="md:w-1/2 text-left">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-orange-500 mb-4">Sobre Mim</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-8 tracking-tighter">Ensino musical com o Prof. Daniel Lyon</h3>
            <p className="text-gray-500 text-xl leading-relaxed font-light">
              Acredito que a música deve ser acessível e prazerosa. Cada aula é desenhada exclusivamente para o seu objetivo e ritmo em Brasília.
            </p>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop /> 
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curso/:id" element={<PaginaCurso cursos={cursos} />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;