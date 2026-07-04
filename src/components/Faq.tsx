import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { FAQS } from "../data";

export default function Faq() {
  const [activeFaqId, setActiveFaqId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
    <section id="preguntas" className="relative py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Decorative node */}
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">
            Resolución de Dudas
          </h2>
          <h3 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Preguntas Frecuentes
          </h3>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto rounded-full" />
          <p className="font-sans text-slate-400 text-sm mt-4">
            Explora las respuestas a las inquietudes más recurrentes sobre las dosis, pureza botánica y farmacocinética de nuestros adaptógenos.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = activeFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-emerald-500/30 bg-slate-900/60 shadow-lg shadow-emerald-500/[0.02]"
                    : "border-slate-900 bg-slate-900/20 hover:border-slate-800"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-xs font-mono font-bold transition-colors ${
                      isOpen
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : "bg-slate-900 text-slate-500 border-slate-855"
                    }`}>
                      Q
                    </div>
                    <span className={`font-sans text-sm sm:text-base font-semibold tracking-tight transition-colors ${
                      isOpen ? "text-white" : "text-slate-300"
                    }`}>
                      {faq.question}
                    </span>
                  </div>

                  <div className={`h-6 w-6 rounded-full flex items-center justify-center bg-slate-900 text-slate-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-emerald-500/10 text-emerald-400" : ""
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Animated Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pl-[54px] border-t border-slate-900/60 pt-4 font-sans text-xs sm:text-sm text-slate-400 leading-relaxed space-y-3">
                        <p>{faq.answer}</p>
                        <div className="flex items-center gap-2 pt-2 text-[10px] font-mono text-emerald-500 uppercase tracking-wider">
                          <MessageSquare className="h-3 w-3" />
                          Categoría: {faq.category}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic support notice */}
        <div className="mt-12 text-center bg-slate-900/30 border border-slate-900 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <HelpCircle className="h-5 w-5 text-emerald-400" />
          <span className="font-sans text-xs text-slate-400">
            ¿Tienes alguna consulta científica particular? Contacta con nuestro departamento de farmacobotánica en <strong className="text-white">info@aetherisbiolabs.edu.es</strong>.
          </span>
        </div>
      </div>
    </section>
  );
}
