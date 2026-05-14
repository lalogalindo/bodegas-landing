import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-3xl font-bold tracking-tight mb-6 block">
              bodegas<span className="text-accent">.</span>
            </a>
            <p className="text-slate-400 leading-relaxed mb-6">
              Líderes en renta de bodegas en Atlixco, Puebla. Brindamos seguridad, confianza y el espacio que necesitas para crecer.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://wa.me/5212441154541?text=Hola!%20Me%20gustaría%20más%20información%20sobre%20las%20bodegas." 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Navegación</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Servicios</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">Nosotros</a></li>
              <li><a href="#location" className="hover:text-accent transition-colors">Ubicación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-accent transition-colors">Aviso de Privacidad</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} bodegas. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0">Diseñado para impactar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
