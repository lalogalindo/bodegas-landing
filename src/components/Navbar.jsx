import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Ubicación', href: '#location' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className={`text-2xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
          bodegas<span className="text-accent">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-accent ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5212441154541?text=Hola!%20Me%20gustaría%20cotizar%20una%20bodega%20en%20Atlixco."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-amber-600 text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md"
          >
            Cotizar Ahora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden text-2xl ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-700 font-medium hover:text-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5212441154541?text=Hola!%20Me%20gustaría%20cotizar%20una%20bodega%20en%20Atlixco."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-6 py-3 rounded-lg font-semibold text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Cotizar Ahora
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
