import React from 'react';
import { motion } from 'framer-motion';
import { service1, service2, service3 } from '../assets/images';

const services = [
  {
    title: 'Bodegas Personales',
    desc: 'Espacios desde 5m² hasta 20m² para guardar muebles, herramientas o equipo deportivo.',
    icon: 'fa-box-open',
    img: service1
  },
  {
    title: 'Almacenamiento Comercial',
    desc: 'Ideal para inventarios, archivos y mercancía con acceso para carga y descarga.',
    icon: 'fa-warehouse',
    img: service2
  },
  {
    title: 'Seguridad de Vanguardia',
    desc: 'Monitoreo 24/7, cámaras de circuito cerrado y acceso restringido permanente.',
    icon: 'fa-shield-halved',
    img: service3
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-3xl md:text-5xl mb-4">Servicios Profesionales</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Ofrecemos soluciones de almacenamiento que se adaptan a tus necesidades específicas en Atlixco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg border border-slate-100 group"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <i className={`fas ${service.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
