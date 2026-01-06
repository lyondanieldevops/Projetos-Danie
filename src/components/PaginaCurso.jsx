import React from 'react';
import { useParams, Link } from 'react-router-dom';

import imgViolao from '../assets/violao.png';
import imgPiano from '../assets/piano.png';
import imgBateria from '../assets/bateria.png';
import imgTeclado from '../assets/teclado.png';

const dadosCursos = {
  violao: { nome: 'Violão', imagem: imgViolao, detalhes: 'Técnicas de dedilhado, acordes e leitura de partitura.' },
  piano: { nome: 'Piano', imagem: imgPiano, detalhes: 'Desenvolvimento de agilidade e expressividade melódica.' },
  bateria: { nome: 'Bateria', imagem: imgBateria, detalhes: 'Independência dos membros e grooves variados.' },
  teclado: { nome: 'Teclado', imagem: imgTeclado, detalhes: 'Harmonia moderna e timbragem para bandas.' }
};

const PaginaCurso = () => {
  const { id } = useParams();
  const curso = dadosCursos[id];

  if (!curso) return <div className="pt-24 text-center">Curso não encontrado.</div>;

  return (
    <div className="pt-24 pb-20 px-4 max-w-4xl mx-auto">
      <Link to="/" className="text-orange-600 font-bold mb-8 inline-block">← Voltar para Início</Link>
      <img src={curso.imagem} alt={curso.nome} className="w-full h-64 object-cover rounded-xl mb-8 shadow-lg" />
      <h1 className="text-4xl font-bold mb-4">{curso.nome}</h1>
      <p className="text-xl text-gray-700 leading-relaxed mb-8">{curso.detalhes}</p>
      <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" 
         className="inline-block bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-colors">
        Quero me matricular
      </a>
    </div>
  );
};

export default PaginaCurso;