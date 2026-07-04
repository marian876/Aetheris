import { motion } from "motion/react";
import { Beaker, Leaf, ShieldCheck, Cpu, History, Eye, Target } from "lucide-react";
import { COMPANY_HISTORY, COMPANY_MISSION, COMPANY_VISION, COMPANY_VALUES, TIMELINE, ABOUT_TEXTS } from "../data";

export default function About() {
  // Simple helper to render values icons dynamically
  const renderValueIcon = (iconName: string) => {
    switch (iconName) {
      case "Beaker":
        return <Beaker className="h-6 w-6 text-emerald-400" />;
      case "Leaf":
        return <Leaf className="h-6 w-6 text-emerald-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="h-6 w-6 text-emerald-400" />;
      case "Cpu":
        return <Cpu className="h-6 w-6 text-emerald-400" />;
      default:
        return <Beaker className="h-6 w-6 text-emerald-400" />;
    }
  };

  return (
    <section id="nosotros" className="relative py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">
            {ABOUT_TEXTS.subtitle}
          </h2>
          <p className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {ABOUT_TEXTS.title}
          </p>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto rounded-full" />
        </div>

        {/* 1. Historia & Ilustración */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <History className="h-5 w-5" />
              </div>
              <h3 className="font-sans text-2xl font-bold text-white">{ABOUT_TEXTS.historyTitle}</h3>
            </div>
            <div className="font-sans text-slate-300 leading-relaxed text-base space-y-4 whitespace-pre-line">
              {COMPANY_HISTORY}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            {/* Main illustrative image */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl p-2">
              <img
                referrerPolicy="no-referrer"
                src="https://images.unsplash.com/photo-1507584947236-44c45a42a0c6?auto=format&fit=crop&q=80&w=800"
                alt="Laboratorio de Extracción de Adaptógenos"
                className="rounded-xl w-full h-[350px] object-cover filter brightness-90 hover:scale-105 transition-transform duration-500"
              />
              {/* Absolutes for organic feel */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80 text-left">
                <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest block">{ABOUT_TEXTS.historyBadge}</span>
                <span className="font-sans text-sm text-slate-200 block font-medium mt-1">
                  {ABOUT_TEXTS.historyCaption}
                </span>
              </div>
            </div>

            {/* Decorative background leaf illustration box */}
            <div className="absolute -top-6 -left-6 h-24 w-24 border-t-2 border-l-2 border-emerald-500/30 -z-10 rounded-tl-2xl" />
            <div className="absolute -bottom-6 -right-6 h-24 w-24 border-b-2 border-r-2 border-teal-500/30 -z-10 rounded-br-2xl" />
          </div>
        </div>

        {/* 2. Misión y Visión (Dual cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Misión */}
          <div className="group relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 hover:border-slate-700 transition-all duration-300 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/10 transition-colors" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6 group-hover:scale-110 transition-transform">
              <Target className="h-6 w-6" />
            </div>
            <h4 className="font-sans text-xl font-bold text-white mb-3">{ABOUT_TEXTS.missionTitle}</h4>
            <p className="font-sans text-slate-300 leading-relaxed text-sm">
              {COMPANY_MISSION}
            </p>
          </div>

          {/* Visión */}
          <div className="group relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 hover:border-slate-700 transition-all duration-300 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-xl group-hover:bg-teal-500/10 transition-colors" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-emerald-400 border border-teal-500/20 mb-6 group-hover:scale-110 transition-transform">
              <Eye className="h-6 w-6" />
            </div>
            <h4 className="font-sans text-xl font-bold text-white mb-3">{ABOUT_TEXTS.visionTitle}</h4>
            <p className="font-sans text-slate-300 leading-relaxed text-sm">
              {COMPANY_VISION}
            </p>
          </div>
        </div>

        {/* 3. Valores Corporativos */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h4 className="font-sans text-xl font-bold text-white mb-2">{ABOUT_TEXTS.valuesSubtitle}</h4>
            <p className="font-sans text-sm text-slate-400 max-w-xl mx-auto">
              {ABOUT_TEXTS.valuesDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-slate-900 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-800 transition-all duration-300 flex flex-col items-start"
              >
                <div className="mb-4 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                  {renderValueIcon(val.iconName)}
                </div>
                <h5 className="font-sans text-base font-bold text-white mb-2">{val.title}</h5>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Línea de Tiempo / Timeline Section */}
        <div className="border-t border-slate-900 pt-20">
          <div className="text-center mb-16">
            <h4 className="font-sans text-2xl font-bold text-white mb-2">{ABOUT_TEXTS.timelineSubtitle}</h4>
            <p className="font-sans text-sm text-slate-400">
              {ABOUT_TEXTS.timelineDescription}
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative border-l border-slate-800 ml-4 md:ml-32 md:mr-12 space-y-12">
            {TIMELINE.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Year tag for md and above */}
                <div className="absolute left-[-16px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 border-2 border-emerald-500 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 font-mono text-xs font-bold shadow-lg">
                  {idx + 1}
                </div>

                {/* Main Card */}
                <div className="bg-slate-900/60 rounded-xl border border-slate-900 p-6 hover:border-slate-800 transition-all group-hover:bg-slate-900/95 duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <span className="font-mono text-sm font-bold text-emerald-400 bg-emerald-500/5 px-2.5 py-1 rounded-md border border-emerald-500/15">
                      AÑO {item.year}
                    </span>
                    <h5 className="font-sans text-base font-bold text-white mt-2 sm:mt-0">
                      {item.title}
                    </h5>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
