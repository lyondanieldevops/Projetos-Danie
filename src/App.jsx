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
      {/* Menu Superior */}
      <Navbar />
      
      {/* Botão Flutuante do WhatsApp */}
      <WhatsAppButton />
      
      {/* Volta ao topo ao navegar */}
      <ScrollToTop />

      {/* Seção Principal com Vídeo */}
      <section id="inicio">
        <Banner />
      </section>

      {/* Seção Biografia */}
      <section id="sobre">
        <SobreMim />
      </section>

      {/* Seção dos Instrumentos com 50 min */}
      <section id="cursos">
        <PaginaCurso />
      </section>

      {/* Rodapé Final */}
      <Footer />
    </div>
  );
}

export default App;