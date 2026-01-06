import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ImageSlider from './ImageSlider';
import PaginaCurso from './PaginaCurso';
import WhatsAppButton from './WhatsAppButton';
import ScrollToTop from './ScrollToTop';
import './App.css';

import imgViolao from '../assets/violao.png';
import imgPiano from '../assets/piano.png';
import imgBateria from '../assets/bateria.png';
import imgTeclado from '../assets/teclado.png';

const cursos = [
  { id: 'violao', nome: 'Violão', imagem: imgViolao, descricao: 'Aulas personalizadas de violão popular e erudito.' },
  { id: 'piano', nome: 'Piano', imagem: imgPiano, descricao: 'Aprenda piano do zero com metodologia prática.' },
  { id: 'bateria', nome: 'Bateria', imagem: imgBateria, descricao: 'Ritmo e técnica para dominar as baquetas.' },
  { id: 'teclado', nome: 'Teclado', imagem: imgTeclado, descricao: 'Teoria e prática aplicada ao teclado musical.' }
];

function Home() {
  return (
    <div className="pt-16">
      <ImageSlider />
      <section id="cursos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nossos Cursos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cursos.map((curso) => (
              <div key={curso.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img src={curso.imagem} alt={curso.nome} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{curso.nome}</h3>
                  <p className="text-gray-600 mb-4">{curso.descricao}</p>
                  <a href={`#/curso/${curso.id}`} className="block text-center bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors">
                    Saiba Mais
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curso/:id" element={<PaginaCurso />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;