import React from 'react';
import { motion } from 'framer-motion';
import { aboutImg } from '../assets/images';

const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img
                src={aboutImg}
                alt="Our Facility"
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent/20 rounded-3xl -z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-primary/20 rounded-3xl -z-0"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Sobre Nosotros</span>
            <h2 className="text-primary font-bold text-3xl md:text-5xl mb-6">Más que una bodega, <br />tu socio de confianza.</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              En <strong>bodegas.</strong> nos tomamos muy en serio la seguridad de tus pertenencias. Con años de experiencia en el sector inmobiliario y de almacenamiento en Atlixco, hemos diseñado instalaciones que garantizan la integridad de lo que más valoras.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Ubicación estratégica en Atlixco, Puebla.',
                'Sistemas de monitoreo de última generación.',
                'Flexibilidad en contratos y tamaños.',
                'Atención personalizada y directa.'
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-slate-700">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="btn-primary">
              Conocer más
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
