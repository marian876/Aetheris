import { motion } from "motion/react";
import { Star, Quote, Heart } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonios" className="relative py-24 bg-slate-900 border-t border-slate-950 overflow-hidden">
      {/* Decorative node */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">
            Comunidad & Experiencias
          </h2>
          <h3 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Testimonios
          </h3>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto rounded-full" />
          <p className="font-sans text-slate-400 max-w-xl mx-auto text-sm mt-4">
            Profesionales de alta demanda, científicos y atletas comparten su experiencia de equilibrio celular con nuestras formulaciones.
          </p>
        </div>

        {/* Testimonials Grid (Desktop: 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              key={test.id}
              className="relative rounded-2xl border border-slate-800 bg-slate-950 p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 shadow-xl group"
            >
              {/* Giant quote decorator */}
              <div className="absolute top-6 right-8 text-slate-900/80 group-hover:text-emerald-500/10 transition-colors pointer-events-none">
                <Quote className="h-12 w-12" />
              </div>

              {/* Main review */}
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, sIdx) => {
                    const ratingValue = idx === 2 ? 4.8 : 5; // Elena is 4.8, others are 5
                    const isFull = sIdx < Math.floor(ratingValue);
                    return (
                      <Star
                        key={sIdx}
                        className={`h-4 w-4 ${
                          isFull
                            ? "text-amber-500 fill-amber-500"
                            : "text-amber-500/40 fill-amber-500/40"
                        }`}
                      />
                    );
                  })}
                </div>

                <p className="font-sans text-slate-300 leading-relaxed text-sm italic mb-6">
                  "{test.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-900">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors shrink-0">
                  <img
                    referrerPolicy="no-referrer"
                    src={test.image}
                    alt={test.name}
                    className="h-full w-full object-cover filter brightness-95"
                  />
                </div>
                <div>
                  <h5 className="font-sans text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {test.name}
                  </h5>
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block mt-0.5">
                    {test.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* High-end decorative review banner */}
        <div className="mt-16 text-center bg-slate-950/40 border border-slate-900 rounded-2xl p-6 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <Heart className="h-5 w-5 text-emerald-400 animate-pulse" />
          <p className="font-sans text-xs text-slate-400">
            Más del <strong className="text-white font-semibold">94% de nuestros usuarios recurrentes</strong> reportan mejoras en sus marcadores de energía y concentración en las primeras 4 semanas.
          </p>
        </div>
      </div>
    </section>
  );
}
