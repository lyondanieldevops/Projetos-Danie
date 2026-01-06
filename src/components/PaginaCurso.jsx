import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PaginaCurso = ({ cursos }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const curso = cursos.find(c => c.id === id);

  if (!curso) return <div className="py-20 text-center uppercase tracking-widest font-bold">Curso não encontrado.</div>;

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto text-left">
        <button onClick={() => navigate('/')} className="mb-12 text-gray-300 hover:text-black transition-colors text-sm uppercase font-bold tracking-widest">
          ← Voltar
        </button>

        <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight uppercase">
          {curso.title}
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 font-light">
          {curso.slogan}
        </p>
        
        <a 
          href="https://wa.me/5561981976241" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-orange-600 transition-all shadow-lg"
        >
          Agende sua aula agora com o Prof. Daniel Lyon
        </a>

        <div className="border-t border-gray-100 mt-16 pt-10">
          <h2 className="text-lg font-bold uppercase mb-6 tracking-tighter text-gray-400">Descrição do serviço</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {curso.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaginaCurso;