import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white font-bold text-4xl md:text-5xl mb-6">¿Listo para liberar espacio?</h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Contáctanos hoy mismo para recibir una cotización personalizada. Nuestro equipo está listo para ayudarte a encontrar la bodega ideal.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <span className="text-white font-medium text-lg">+52 1 244 115 4541</span>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <i className="fas fa-envelope"></i>
                </div>
                <span className="text-white font-medium text-lg">bikerous904@gmail.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <form 
              action="https://formspree.io/f/bikerous904@gmail.com" 
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Nombre</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Teléfono</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="Tu número"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2">Mensaje</label>
                <textarea
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all h-32"
                  placeholder="¿Qué necesitas guardar?"
                ></textarea>
              </div>
              <button type="submit" className="w-full btn-accent py-4 text-lg">
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
