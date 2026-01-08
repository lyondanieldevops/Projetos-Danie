import React from 'react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/5500000000000" 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25d366',
        color: 'white',
        borderRadius: '50px',
        padding: '15px',
        zIndex: '100',
        textDecoration: 'none',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
      }}
    >
      WhatsApp
    </a>
  );
};

export default WhatsAppButton;