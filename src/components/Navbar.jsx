import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed', 
      top: 0, 
      width: '100%', 
      height: '80px', // Aumentei para 80px para as letras maiores respirarem bem
      background: 'white', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-around', 
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)', 
      zIndex: 1000
    }}>
      {/* Nome do Professor - Aumentado para 22px e negrito extra */}
      <div style={{
        fontWeight: '800', 
        color: '#e65100', 
        fontSize: '22px', 
        letterSpacing: '1px'
      }}>
        PROF. DANIEL LYON
      </div>

      {/* Links do Menu - Espaçamento aumentado para 50px e fonte para 18px */}
      <ul style={{
        display: 'flex', 
        listStyle: 'none', 
        gap: '50px' // Afasta INÍCIO, SOBRE e CURSOS para não ficarem colados
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