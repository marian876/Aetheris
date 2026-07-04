import { motion } from "motion/react";
import { ArrowDown, FlaskConical, Award, ShieldCheck } from "lucide-react";
import { COMPANY_NAME, COMPANY_SLOGAN, COMPANY_DESCRIPTION, HERO_TEXTS } from "../data";

interface HeroProps {
  onViewProducts: () => void;
}

export default function Hero({ onViewProducts }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950"
    >
      {/* Background Graphic Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950" />
        <img
          referrerPolicy="no-referrer"
          src="https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=1600"
          alt="Aetheris Lab & Forest Fusion"
          className="w-full h-full object-cover object-center opacity-35"
        />
        {/* Subtle decorative radial lights */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-16">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs tracking-wider uppercase mb-6"
        >
          <FlaskConical className="h-3.5 w-3.5 animate-pulse" />
          {HERO_TEXTS.badge}
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none mb-4"
        >
          {COMPANY_NAME}
        </motion.h1>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-xl sm:text-2xl md:text-3xl font-light tracking-wide bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent max-w-3xl mx-auto mb-6"
        >
          {COMPANY_SLOGAN}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {COMPANY_DESCRIPTION}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            id="hero-products-btn"
            onClick={onViewProducts}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 font-semibold text-slate-950 transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
          >
            {HERO_TEXTS.btnProducts}
            <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </button>
          <button
            id="hero-science-btn"
            onClick={() => {
              const el = document.getElementById("science");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold transition-all hover:bg-slate-850 hover:border-slate-700 hover:text-white flex items-center justify-center gap-2 cursor-pointer"
          >
            {HERO_TEXTS.btnScience}
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-slate-900 pt-8"
        >
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <Award className="h-5 w-5 text-emerald-400" />
            <span className="text-sm font-sans">{HERO_TEXTS.trustIndicators[0]}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            <span className="text-sm font-sans">{HERO_TEXTS.trustIndicators[1]}</span>
          </div>
          <div className="hidden md:flex items-center justify-center gap-2 text-slate-400">
            <FlaskConical className="h-5 w-5 text-emerald-400" />
            <span className="text-sm font-sans">{HERO_TEXTS.trustIndicators[2]}</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Wave bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
