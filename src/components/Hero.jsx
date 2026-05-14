import React from 'react';
import { motion } from 'framer-motion';
import { heroBg } from '../assets/images';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Modern Warehouse"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left w-full">
        <div className="md:w-2/3 lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Tu espacio <span className="text-accent">seguro</span> en Atlixco.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 mb-10 leading-relaxed"
          >
            Renta de bodegas con seguridad 24/7, acceso controlado y las mejores instalaciones en el corazón de Puebla.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="btn-accent text-center text-lg">
              Reservar Espacio
            </a>
            <a href="#services" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all text-center text-lg">
              Ver Servicios
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-white/50 hover:text-white transition-colors">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
