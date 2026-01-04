import React from 'react';
import { Instagram } from 'lucide-react';
import imgPerfil from '../assets/perfil.jpeg';

const Navbar = ({ instagramUrl }) => {
  const menuItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Aulas', href: '#instrumentos' },
    { name: 'Loja', href: '#loja' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] bg-black/90 backdrop-blur-md border-b border-[#D4AF37]/10 px-6 py-4">
      <svg width="0" height="0" className="absolute">
        <linearGradient id="instagram-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#405DE6" offset="0%" />
          <stop stopColor="#E1306C" offset="50%" />
          <stop stopColor="#FCAF45" offset="100%" />
        </linearGradient>
      </svg>

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#D4AF37]/50 overflow-hidden shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            <img src={imgPerfil} alt="Daniel Lesson" className="w-full h-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <h2 className="text-[#D4AF37] font-serif text-sm md:text-lg leading-none tracking-widest font-bold uppercase">Daniel Lesson</h2>
            <p className="text-gray-500 text-[8px] md:text-[10px] tracking-[0.3em] uppercase mt-1">Music Education</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-[#D4AF37] text-[11px] uppercase tracking-[0.2em] font-medium transition-colors">
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="group transition-transform hover:scale-110 duration-300">
            <Instagram size={24} style={{ stroke: "url(#instagram-gradient)" }} className="drop-shadow-[0_0_5px_rgba(193,53,132,0.4)]" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;