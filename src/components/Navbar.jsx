import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = (id) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center relative">
        {/* Logo */}
        <div 
          onClick={handleGoHome}
          className="text-xl font-black text-gray-900 tracking-tighter uppercase cursor-pointer"
        >
          Prof. Daniel Lyon
        </div>

        {/* Instagram Centralizado com seu link oficial */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <a 
            href="https://www.instagram.com/daniel.lesson_?igsh=dGEyZmRkcmNlZzQ=" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-xl transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-md"
            style={{
              background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              color: 'white'
            }}
          >
            <Instagram size={24} />
          </a>
        </div>

        {/* Links de navegação */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={handleGoHome} 
            className="text-xs font-bold text-gray-400 hover:text-black uppercase tracking-widest"
          >
            Início
          </button>
          <button 
            onClick={() => handleScroll('sobre')} 
            className="text-xs font-bold text-gray-400 hover:text-black uppercase tracking-widest"
          >
            Sobre
          </button>
          <button 
            onClick={() => handleScroll('aulas')} 
            className="text-xs font-bold text-gray-400 hover:text-black uppercase tracking-widest"
          >
            Cursos
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;