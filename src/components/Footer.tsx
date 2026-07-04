import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Twitter, Instagram, Linkedin, Youtube, Leaf, ShieldAlert, X } from "lucide-react";
import {
  COMPANY_NAME,
  COMPANY_SLOGAN,
  EDUCATIONAL_DISCLAIMER,
  COPYRIGHT_TEXT,
  PRIVACY_POLICY,
  TERMS_OF_SERVICE
} from "../data";

export default function Footer() {
  const [activePolicy, setActivePolicy] = useState<"privacy" | "terms" | null>(null);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Slogan Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Leaf className="h-4 w-4" />
              </div>
              <span className="font-sans text-lg font-bold tracking-widest text-white leading-none">
                {COMPANY_NAME}
              </span>
            </div>
            <p className="font-sans text-xs text-slate-500 leading-relaxed">
              {COMPANY_SLOGAN}
            </p>
            {/* Social media links */}
            <div className="flex gap-3 pt-2">
              <a
                href="#footer"
                className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all duration-200"
                aria-label="Twitter X Ficticio"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#footer"
                className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all duration-200"
                aria-label="Instagram Ficticio"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#footer"
                className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all duration-200"
                aria-label="LinkedIn Ficticio"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#footer"
                className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all duration-200"
                aria-label="YouTube Ficticio"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h5 className="font-sans text-xs font-bold text-slate-200 uppercase tracking-widest">
              Laboratorio
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#nosotros" className="hover:text-emerald-400 transition-colors">Nuestra Historia</a>
              </li>
              <li>
                <a href="#ciencia" className="hover:text-emerald-400 transition-colors">Respaldo Científico</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-emerald-400 transition-colors">Productos Bioactivos</a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-emerald-400 transition-colors">Opiniones Médicas</a>
              </li>
            </ul>
          </div>

          {/* FAQ Link categories */}
          <div className="space-y-4">
            <h5 className="font-sans text-xs font-bold text-slate-200 uppercase tracking-widest">
              Asistencia
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#preguntas" className="hover:text-emerald-400 transition-colors">Preguntas Frecuentes</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-emerald-400 transition-colors">Formulario de Enlace</a>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicy("privacy")}
                  className="hover:text-emerald-400 text-left transition-colors cursor-pointer"
                >
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicy("terms")}
                  className="hover:text-emerald-400 text-left transition-colors cursor-pointer"
                >
                  Términos & Condiciones
                </button>
              </li>
            </ul>
          </div>

          {/* Educational disclaimer details */}
          <div className="space-y-4">
            <h5 className="font-sans text-xs font-bold text-slate-200 uppercase tracking-widest flex items-center gap-1.5 text-amber-500">
              <ShieldAlert className="h-3.5 w-3.5" />
              Proyecto Educativo
            </h5>
            <p className="font-sans text-xs text-slate-500 leading-relaxed">
              {EDUCATIONAL_DISCLAIMER}
            </p>
          </div>
        </div>

        {/* Divider and copyright block */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-500">
          <p>{COPYRIGHT_TEXT}</p>
          <div className="flex gap-4">
            <button
              onClick={() => setActivePolicy("privacy")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacidad
            </button>
            <button
              onClick={() => setActivePolicy("terms")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Términos
            </button>
            <button
              onClick={handleScrollToTop}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Volver Arriba ↑
            </button>
          </div>
        </div>
      </div>

      {/* POLICY POPUP DIALOGS (MOCK LEGAL OVERLAY) */}
      <AnimatePresence>
        {activePolicy && (
          <div id="policy-modal-container" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePolicy(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-850 bg-slate-900 shadow-2xl p-6 md:p-8 z-10"
            >
              {/* Close Button */}
              <button
                id="close-policy-btn"
                onClick={() => setActivePolicy(null)}
                className="absolute top-5 right-5 text-slate-400 transition-colors hover:text-white"
                aria-label="Cerrar modal"
              >
                <X className="h-5 w-5" />
              </button>

              {activePolicy === "privacy" ? (
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-2 text-emerald-400 mb-2">
                    <Leaf className="h-5 w-5" />
                    <span className="font-sans text-sm font-bold uppercase tracking-wider">
                      Política de Privacidad Ficticia
                    </span>
                  </div>

                  <h4 className="font-sans text-xl font-bold text-white">
                    {PRIVACY_POLICY.title}
                  </h4>

                  <div className="font-sans text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed max-h-60 overflow-y-auto pr-2 scrollbar-thin">
                    {PRIVACY_POLICY.sections.map((section, idx) => (
                      <p key={idx}>
                        <strong>{section.title}:</strong> {section.content}
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-2 text-emerald-400 mb-2">
                    <Leaf className="h-5 w-5" />
                    <span className="font-sans text-sm font-bold uppercase tracking-wider">
                      Términos de Servicio Ficticios
                    </span>
                  </div>

                  <h4 className="font-sans text-xl font-bold text-white">
                    {TERMS_OF_SERVICE.title}
                  </h4>

                  <div className="font-sans text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed max-h-60 overflow-y-auto pr-2 scrollbar-thin">
                    {TERMS_OF_SERVICE.sections.map((section, idx) => (
                      <p key={idx}>
                        <strong>{section.title}:</strong> {section.content}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 border-t border-slate-800 pt-4 text-right">
                <button
                  id="policy-accept-btn"
                  onClick={() => setActivePolicy(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 text-xs font-bold text-white hover:bg-slate-705 transition-colors cursor-pointer"
                >
                  Entendido y Aceptar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
