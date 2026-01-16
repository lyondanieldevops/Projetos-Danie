import React from 'react';
import Navbar from './components/Navbar';
import PaginaCurso from './components/PaginaCurso';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// Verifique se estes arquivos existem na sua pasta components antes de tirar o comentário //
// import Banner from './components/Banner';
// import SobreMim from './components/SobreMim';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{ scrollBehavior: 'smooth' }}>
      <Navbar />
      <WhatsAppButton />
      <ScrollToTop />

      <main>
        {/* O Banner e SobreMim ficam comentados para evitar a tela branca se o arquivo sumiu */}
        {/* <Banner /> */}
        {/* <SobreMim /> */}
        
        <PaginaCurso />
      </main>

      <footer style={{ background: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <p>© 2026 Prof. Daniel Lyon</p>
      </footer>
    </div>
  );
}

export default App;