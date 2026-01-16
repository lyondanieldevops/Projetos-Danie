import React from 'react';
import Navbar from './components/Navbar';
import PaginaCurso from './components/PaginaCurso';

function App() {
  return (
    <div className="App" style={{ scrollBehavior: 'smooth' }}>
      <Navbar />
      
      <main>
        {/* Deixei apenas o que existe na sua pasta para o erro parar */}
        <div id="inicio" style={{ padding: '50px 0', textAlign: 'center', background: '#eee' }}>
          <h1>Escola de Música Prof. Daniel Lyon</h1>
          <p>Aulas personalizadas de música em Brasília</p>
        </div>

        <section id="cursos">
          <PaginaCurso />
        </section>
      </main>

      <footer style={{ background: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <p>© 2026 Prof. Daniel Lyon</p>
      </footer>
    </div>
  );
}

export default App;