import React from 'react';
import { motion } from 'framer-motion';

const Location = () => {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-3xl md:text-5xl mb-4">Nuestra Ubicación</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Visítanos en nuestras instalaciones en Atlixco, Puebla. Fácil acceso y máxima seguridad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-xl min-h-[400px] relative border-4 border-slate-100"
          >
            {/* Mock Google Map - Using an iframe placeholder or a stylish image */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.274023785191!2d-98.44044642514382!3d18.919261282253284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfb4618387a89f%3A0x819c134cae73ccda!2sC.%2020%20Pte.%2C%20Atlixco%2C%20Pue.!5e0!3m2!1sen!2smx!4v1778733596752!5m2!1sen!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Bodegas Atlixco"
              className="w-full h-full"
            ></iframe>
          </motion.div>

          <div className="flex flex-col justify-center space-y-8 p-6">
            <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-accent shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-2">Dirección</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Carretera Federal Puebla - Atlixco Km 24.5<br />
                    Col. Centro, CP 74200<br />
                    Atlixco, Puebla, México.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-primary shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-clock text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-2">Horario de Acceso</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Lunes a Viernes: 8:00 AM - 8:00 PM<br />
                    Sábados: 9:00 AM - 4:00 PM<br />
                    Acceso 24/7 disponible bajo contrato especial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
