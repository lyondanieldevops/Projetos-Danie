import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed', 
      top: 0, 
      width: '100%', 
      height: '85px', 
      background: 'white', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-around', 
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)', 
      zIndex: 1000
    }}>
      <div style={{
        fontWeight: '800', 
        color: '#e65100', 
        fontSize: '24px', 
        letterSpacing: '1px'
      }}>
        PROF. DANIEL LYON
      </div>

      <ul style={{
        display: 'flex', 
        listStyle: 'none', 
        gap: '60px' 
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