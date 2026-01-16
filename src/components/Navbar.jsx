import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '20px 5%', 
      background: '#ffffff', 
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
      position: 'sticky', 
      top: 0, 
      zIndex: 1000 
    }}>
      <div style={{ 
        fontWeight: 'bold', 
        fontSize: '1.5rem', 
        color: '#e65100',
        fontFamily: 'Arial, sans-serif'
      }}>
        PROF. DANIEL LYON
      </div>
      
      <div style={{ display: 'flex', gap: '25px' }}>
        <a href="#inicio" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', fontSize: '14px' }}>INÍCIO</a>
        <a href="#sobre" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', fontSize: '14px' }}>SOBRE</a>
        <a href="#cursos" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', fontSize: '14px' }}>CURSOS</a>
      </div>
    </nav>
  );
};

export default Navbar;