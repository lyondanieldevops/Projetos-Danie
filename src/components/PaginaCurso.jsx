import React from 'react';
import imgViolao from '../assets/violao.png';
import imgPiano from '../assets/piano.png';
import imgBateria from '../assets/bateria.png';
import imgTeclado from '../assets/teclado.png';

const PaginaCurso = () => {
  const zapLink = "https://wa.me/5561992984080";

  const cursos = [
    { 
      nome: "Violão", 
      img: imgViolao, 
      desc: "Aulas práticas de 50 min. Foco em técnica, acordes e repertório personalizado." 
    },
    { 
      nome: "Piano", 
      img: imgPiano, 
      desc: "Aulas de 50 min. Desenvolvimento de leitura, postura e musicalidade clássica ou popular." 
    },
    { 
      nome: "Bateria", 
      img: imgBateria, 
      desc: "Aulas de 50 min. Estudo de ritmos, coordenação motora e rudimentos em estúdio." 
    },
    { 
      nome: "Teclado", 
      img: imgTeclado, 
      desc: "Aulas de 50 min. Harmonia, escalas e timbres para todas as idades e níveis." 
    }
  ];

  return (
    <section id="cursos" style={{ padding: '60px 20px', background: '#f9f9f9', textAlign: 'center' }}>
      <h2 style={{ 
        color: '#e65100', 
        marginBottom: '40px', 
        fontSize: '2.5rem', 
        fontFamily: 'Arial, sans-serif' 
      }}>
        Nossos Cursos
      </h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '25px', 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        {cursos.map((curso, index) => (
          <div key={index} style={{ 
            background: '#fff', 
            padding: '0 0 20px 0', 
            borderRadius: '15px', 
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <img 
              src={curso.img} 
              alt={curso.nome} 
              style={{ width: '100%', height: '220px', objectFit: 'cover' }} 
            />
            <h3 style={{ margin: '20px 0 10px', color: '#333' }}>{curso.nome}</h3>
            <p style={{ 
              fontSize: '15px', 
              color: '#666', 
              padding: '0 20px', 
              lineHeight: '1.5',
              minHeight: '60px' 
            }}>
              {curso.desc}
            </p>
            <button 
              onClick={() => window.open(zapLink, '_blank')} 
              style={{ 
                background: '#e65100', 
                color: '#fff', 
                border: 'none', 
                padding: '12px 25px', 
                borderRadius: '50px', 
                cursor: 'pointer', 
                fontWeight: 'bold',
                marginTop: '15px',
                fontSize: '16px'
              }}>
              Falar com o Professor
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaginaCurso;