import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl text-gray-800">
          <a href="#/">PROF. DANIEL LYON</a>
        </div>
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <a href="#/" className="hover:text-orange-600">INÍCIO</a>
          <a href="#/sobre" className="hover:text-orange-600">SOBRE</a>
          <a href="#/cursos" className="hover:text-orange-600">CURSOS</a>
        </div>
        <div className="md:hidden text-gray-600">
          {/* Menu Mobile aqui se desejar futuramente */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;