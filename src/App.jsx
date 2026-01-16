import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SobreMim from './components/SobreMim';
import PaginaCurso from './components/PaginaCurso';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App" style={{ scrollBehavior: 'smooth' }}>
      {/* Componentes de utilidade e navegação */}
      <Navbar />
      <WhatsAppButton />
      <ScrollToTop />

      {/* Conteúdo Principal do Site */}
      <main>
        <section id="inicio">
          <Banner />
        </section>

        <section id="sobre">
          <SobreMim />
        </section>

        <section id="cursos">
          <PaginaCurso />
        </section>
      </main>

      {/* Rodapé original */}
      <Footer />
    </div>
  );
}

export default App;