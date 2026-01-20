import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import ImageSlider from './components/ImageSlider'
import { X, PlayCircle, MessageCircle, ShoppingBag } from 'lucide-react'

// Suas imagens (Caminhos ajustados para minúsculo para compatibilidade com Vercel)
import fotoSobreMim from './assets/sobre.jpeg'
import fotoPiano from './assets/piano.jpeg'
import fotoBateria from './assets/bateria.png' 
import fotoViolao from './assets/violao.jpeg'
import fotoTeclado from './assets/teclado.jpeg'

function App() {
  const [selectedInst, setSelectedInst] = useState(null);
  const whatsappBase = "https://wa.me/5561981976241?text=";
  const instagramUrl = "https://www.instagram.com/daniel.lesson_?igsh=dGEyZmRkcmNlZzQ=";

  // Lista de instrumentos sincronizada
  const instrumentos = [
    { nome: 'Bateria', foto: fotoBateria },
    { nome: 'Piano', foto: fotoPiano },
    { nome: 'Teclado', foto: fotoTeclado },
    { nome: 'Violão', foto: fotoViolao },
    { nome: 'Guitarra', foto: fotoViolao } // Usando foto de violão temporariamente
  ];

  return (
    <div className="bg-[#050505] min-h-screen font-sans text-white scroll-smooth">
      <Navbar instagramUrl={instagramUrl} />
      
      {/* HOME */}
      <main id="home" className="flex flex-col items-center justify-center text-center px-4 min-h-screen pt-20">
        <h1 className="text-[#D4AF37] text-5xl md:text-8xl font-serif font-bold tracking-widest mb-6 uppercase">Escola de Música</h1>
        <p className="text-gray-200 text-xl md:text-2xl tracking-[0.5em] uppercase mb-12 font-light border-t border-[#D4AF37]/20 pt-6">Daniel Lesson</p>
        <a href={whatsappBase + encodeURIComponent("Olá Daniel Lesson!")} target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-[#25D366] text-white font-bold uppercase text-sm flex items-center gap-3 rounded-full hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(37,211,102,0.2)]">
          <MessageCircle size={24} /> Fale com o Professor
        </a>
      </main>

      {/* SOBRE */}
      <section id="sobre" className="py-40 bg-black border-b border-[#D4AF37]/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
          <div className="w-72 h-[450px] border border-[#D4AF37]/30 p-3 relative bg-[#0a0a0a]">
             <img src={fotoSobreMim} className="w-full h-full object-cover" alt="Daniel Lesson" />
             <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] text-black text-[10px] font-bold py-4 px-6 uppercase tracking-widest shadow-xl">Pedagogo & Músico</div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-[#D4AF37] font-serif text-4xl md:text-5xl uppercase tracking-widest mb-10">Daniel Lesson</h2>
            <p className="text-gray-300 text-lg italic leading-relaxed">"Transformando a casa do aluno em um ambiente de alta performance musical."</p>
          </div>
        </div>
      </section>

      {/* INSTRUMENTOS */}
      <section id="instrumentos" className="py-40 bg-black border-b border-[#D4AF37]/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-[#D4AF37] font-serif text-4xl mb-20 tracking-widest uppercase font-bold">Aulas Disponíveis</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {instrumentos.map((inst) => (
              <div key={inst.nome} onClick={() => setSelectedInst(inst)} className="group relative h-64 overflow-hidden border border-[#D4AF37]/20 cursor-pointer">
                <img src={inst.foto} className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" alt={inst.nome} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <PlayCircle className="text-[#D4AF37] mb-2 opacity-0 group-hover:opacity-100 transition-opacity" size={40} />
                  <p className="text-gray-100 tracking-widest uppercase text-[10px] font-semibold">{inst.nome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO LOJA */}
      <section id="loja" className="py-40 bg-[#050505] border-b border-[#D4AF37]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ShoppingBag className="text-[#D4AF37] mx-auto mb-6" size={48} />
          <h2 className="text-[#D4AF37] font-serif text-4xl uppercase tracking-[0.3em] mb-6">Loja Daniel Lesson</h2>
          <p className="text-gray-400 text-lg mb-10 font-light">Confira nossos materiais didáticos e cursos exclusivos.</p>
          <a 
            href={whatsappBase + encodeURIComponent("Olá! Gostaria de conhecer os materiais da loja Daniel Lesson.")} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-[#D4AF37] text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#D4AF37] hover:text-black transition-all rounded-full"
          >
            Ver Catálogo
          </a>
        </div>
      </section>

      <ImageSlider />

      {/* MODAL DE INSTRUMENTO */}
      {selectedInst && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedInst(null)}>
          <div className="relative w-full max-w-4xl bg-[#0a0a0a] border border-[#D4AF37]/30 rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedInst(null)} className="absolute top-4 right-4 text-white hover:text-[#D4AF37] z-[300]">
              <X size={28} />
            </button>
            <div className="relative aspect-video flex flex-col items-center justify-center">
              <img src={selectedInst.foto} className="absolute inset-0 w-full h-full object-cover opacity-20" alt="" />
              <div className="relative z-10 text-center px-6">
                <h3 className="text-white font-serif text-4xl md:text-6xl uppercase mb-12 tracking-widest">{selectedInst.nome}</h3>
                <a href={whatsappBase + encodeURIComponent(`Olá Daniel, vi no site as aulas de ${selectedInst.nome}!`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#128C7E] transition-all uppercase text-xs">
                  <MessageCircle size={20} /> Fale com o Professor
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="py-24 text-center bg-black">
        <p className="text-[10px] tracking-[0.8em] uppercase text-gray-600 font-medium">© {new Date().getFullYear()} DANIEL LESSON</p>
      </footer>
    </div>
  )
}

export default App