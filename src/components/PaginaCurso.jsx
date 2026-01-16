import React from 'react';
import imgViolao from '../assets/violao.png';
import imgPiano from '../assets/piano.png';
import imgBateria from '../assets/bateria.png';
import imgTeclado from '../assets/teclado.png';

const PaginaCurso = () => {
  const zapLink = "https://wa.me/5561992984080";

  const cursos = [
    { nome: "Violão", img: imgViolao, desc: "Aulas de 50 min. Técnica e repertório." },
    { nome: "Piano", img: imgPiano, desc: "Aulas de 50 min. Teoria e prática." },
    { nome: "Bateria", img: imgBateria, desc: "Aulas de 50 min. Ritmo e coordenação." },
    { nome: "Teclado", img: imgTeclado, desc: "Aulas de 50 min. Harmonia e timbres." }
  ];

  return (
    <section id="cursos" style={{ padding: '60px 20px', background: '#f9f9f9', textAlign: 'center' }}>
      <h2 style={{ color: '#e65100', marginBottom: '40px' }}>Nossos Cursos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {cursos.map((curso, index) => (
          <div key={index} style={{ background: '#fff', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
            <img src={curso.img} alt={curso.nome} style={{ width: '100%', borderRadius: '10px' }} />
            <h3>{curso.nome}</h3>
            <p style={{ fontSize: '14px', color: '#555', margin: '15px 0' }}>{curso.desc}</p>
            <button onClick={() => window.open(zapLink, '_blank')} style={{ background: '#e65100', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
              Falar no WhatsApp
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaginaCurso;