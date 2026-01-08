import React from 'react';
import './App.css';
import Navbar from './Navbar';
import WhatsAppButton from './WhatsAppButton';

import imgViolao from '../assets/violao.png';
import imgPiano from '../assets/piano.png';
import imgBateria from '../assets/bateria.png';
import imgTeclado from '../assets/teclado.png';
import videoBanner from '../assets/video-banner.mp4';
import imgSobre from '../assets/sobre.mim.png'; 

function App() {
  const zapLink = "https://wa.me/5561992984080";

  return (
    <div className="App">
      <Navbar />
      
      <header id="inicio" className="hero">
        <video autoPlay loop muted playsInline className="video-bg">
          <source src={videoBanner} type="video/mp4" />
        </video>
        <div className="hero-text-box">
          <h1>PROF. DANIEL LYON</h1>
          <p>Escola de Música</p>
          <button className="btn-banner" onClick={() => window.open(zapLink, '_blank')}>
            Clique aqui e agende agora sua aula!
          </button>
        </div>
      </header>

      <section id="sobre" className="sobre-section">
        <div className="sobre-container">
          {/* Título no topo da seção */}
          <h2 className="sobre-titulo-topo">Sobre o Professor</h2>
          
          <div className="sobre-flex">
            <img src={imgSobre} alt="Professor" className="img-sobre" />
            <div className="sobre-content">
              <p>
                Aulas presenciais em Brasília e online para todo o Brasil. 
                Foco no aprendizado prático e resultados reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="cursos" className="cursos-container">
        <h2>Nossos Cursos</h2>
        <div className="cursos-grid">
          <div className="curso-card">
            <img src={imgViolao} alt="Violão" />
            <h3>Violão</h3>
            <button onClick={() => window.open(zapLink, '_blank')} className="btn-laranja">Saiba Mais</button>
          </div>
          <div className="curso-card">
            <img src={imgPiano} alt="Piano" />
            <h3>Piano</h3>
            <button onClick={() => window.open(zapLink, '_blank')} className="btn-laranja">Saiba Mais</button>
          </div>
          <div className="curso-card">
            <img src={imgBateria} alt="Bateria" />
            <h3>Bateria</h3>
            <button onClick={() => window.open(zapLink, '_blank')} className="btn-laranja">Saiba Mais</button>
          </div>
          <div className="curso-card">
            <img src={imgTeclado} alt="Teclado" />
            <h3>Teclado</h3>
            <button onClick={() => window.open(zapLink, '_blank')} className="btn-laranja">Saiba Mais</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p><strong>PROF. DANIEL LYON - ESCOLA DE MÚSICA</strong></p>
        <p>Brasília - DF | @prof.daniellyon</p>
      </footer>

      <WhatsAppButton />
    </div>
  );
}

export default App;