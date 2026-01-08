import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed', 
      top: 0, 
      width: '100%', 
      height: '80px', 
      background: 'white', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', // Mudamos para separar os lados
      padding: '0 50px', // Adiciona margem nas laterais
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)', 
      zIndex: 1000
    }}>
      
      {/* LADO ESQUERDO: Ícone Instagram + Nome */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <a 
          href="https://www.instagram.com/lyon_daniel_silvestre_da_cunha" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" 
            alt="Instagram" 
            style={{ width: '28px', height: '28px' }} 
          />
        </a>
        
        <div style={{
          fontWeight: '800', 
          color: '#e65100', 
          fontSize: '22px', 
          letterSpacing: '1px'
        }}>
          PROF. DANIEL LYON
        </div>
      </div>

      {/* LADO DIREITO: Links do Menu */}
      <ul style={{
        display: 'flex', 
        listStyle: 'none', 
        gap: '50px',
        margin: 0,
        padding: 0
      }}>
        <li>
          <a href="#inicio" style={{
            textDecoration: 'none', 
            color: '#333', 
            fontWeight: 'bold', 
            fontSize: '18px'
          }}>
            INÍCIO
          </a>
        </li>
        <li>
          <a href="#sobre" style={{
            textDecoration: 'none', 
            color: '#333', 
            fontWeight: 'bold', 
            fontSize: '18px'
          }}>
            SOBRE
          </a>
        </li>
        <li>
          <a href="#cursos" style={{
            textDecoration: 'none', 
            color: '#333', 
            fontWeight: 'bold', 
            fontSize: '18px'
          }}>
            CURSOS
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;