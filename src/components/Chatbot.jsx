import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState([
    { text: "¡Hola! Soy el asistente virtual de bodegas. ¿En qué puedo ayudarte hoy?", isBot: true }
  ]);
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessages = [...messages, { text: userInput, isBot: false }];
    setMessages(newMessages);
    setUserInput("");

    // Simple logic for steps
    setTimeout(() => {
      if (step === 0) {
        setMessages([...newMessages, { text: "¿Qué tipo de artículos necesitas almacenar? (Muebles, Oficina, Inventario, etc.)", isBot: true }]);
        setStep(1);
      } else if (step === 1) {
        setMessages([...newMessages, { text: "Entendido. ¿Aproximadamente cuántos metros cuadrados crees necesitar?", isBot: true }]);
        setStep(2);
      } else if (step === 2) {
        setMessages([...newMessages, { 
          text: "¡Excelente! Basado en eso, tenemos opciones desde $1,200 MXN mensuales. ¿Te gustaría que un asesor te contacte por WhatsApp para formalizar?", 
          isBot: true,
          isAction: true 
        }]);
        setStep(3);
      }
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* WhatsApp Link Always Present */}
      <a
        href="https://wa.me/5212441154541?text=Hola!%20Me%20gustaría%20obtener%20una%20cotización%20para%20una%20bodega."
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 w-14 h-14 md:w-16 md:h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 group relative"
      >
        <i className="fab fa-whatsapp text-2xl md:text-3xl"></i>
        <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-lg shadow-lg text-sm font-bold opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¿Necesitas ayuda rápida?
        </span>
      </a>

      {/* Chatbot Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-slate-800 transition-all transform hover:scale-110"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-robot'} text-xl md:text-2xl`}></i>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] md:w-[400px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-100"
          >
            <div className="bg-primary p-6 text-white">
              <h3 className="font-bold text-lg flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                Cotizador Inteligente
              </h3>
              <p className="text-white/60 text-xs">Respondemos en segundos</p>
            </div>

            <div className="flex-1 h-80 overflow-y-auto p-6 space-y-4 bg-slate-50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${msg.isBot ? 'bg-white text-slate-800 shadow-sm' : 'bg-accent text-white shadow-md'}`}>
                    {msg.text}
                    {msg.isAction && (
                      <div className="mt-4">
                        <a 
                          href="https://wa.me/5212441154541?text=Hola!%20He%20terminado%20la%20cotización%20en%20el%20sitio%20y%20me%20gustaría%20hablar%20con%20un%20asesor." 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-green-500 text-white text-center py-2 rounded-lg font-bold hover:bg-green-600 transition-colors"
                        >
                          Hablar con Asesor
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100 flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-2 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-accent/20 text-sm"
              />
              <button className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-slate-800 transition-all">
                <i className="fas fa-paper-plane text-xs"></i>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
