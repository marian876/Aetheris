import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Award, Info, FileText, CheckCircle2, TrendingUp } from "lucide-react";
import { SCIENTIFIC_STUDIES } from "../data";

export default function Science() {
  const [activeStudyIdx, setActiveStudyIdx] = useState(0);
  const activeStudy = SCIENTIFIC_STUDIES[activeStudyIdx];

  // Helper to find maximum value in chart data to scale the bars proportionally
  const maxValue = Math.max(...activeStudy.chart.data.map((d) => d.value));

  return (
    <section id="ciencia" className="relative py-24 bg-slate-900 border-t border-slate-950 overflow-hidden">
      {/* Decorative Lights */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">
            Metodología & Ensayos
          </h2>
          <h3 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Respaldo Científico
          </h3>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto rounded-full" />
          <p className="font-sans text-slate-400 max-w-xl mx-auto text-sm mt-4">
            Nuestros elíxires están formulados bajo estrictos parámetros de dosificación celular. Explora los estudios de eficacia simulados.
          </p>
        </div>

        {/* Academic Project Disclaimer Banner - HIGH VISIBILITY */}
        <div id="academic-disclaimer-banner" className="mb-12 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5 shadow-lg">
          <div className="flex gap-4 items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20">
              <Info className="h-5 w-5" />
            </div>
            <div>
              <span className="font-sans text-xs font-bold tracking-wider text-amber-500 uppercase block mb-1">
                Aviso de Proyecto Educativo
              </span>
              <p className="font-sans text-xs sm:text-sm text-amber-200/90 leading-relaxed font-medium">
                Los estudios mostrados forman parte de un proyecto educativo y fueron creados únicamente con fines académicos. Toda la terminología científica, métricas, universidades citadas y bibliografías son ficticias.
              </p>
            </div>
          </div>
        </div>

        {/* Study Tabs Selector */}
        <div className="flex flex-col md:flex-row gap-2 justify-center mb-10">
          {SCIENTIFIC_STUDIES.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => setActiveStudyIdx(idx)}
              className={`px-5 py-4 rounded-xl text-left font-sans text-sm font-semibold transition-all border flex items-center justify-between gap-3 ${
                activeStudyIdx === idx
                  ? "bg-slate-950 border-emerald-500 text-white shadow-xl"
                  : "bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs text-emerald-400">0{idx + 1}.</span>
                <span className="truncate max-w-[200px] sm:max-w-xs">{study.badge}</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-mono bg-emerald-500/10 px-2 py-0.5 rounded-full text-emerald-400">
                Estudio
              </span>
            </button>
          ))}
        </div>

        {/* Main Dashboard Panel */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 md:p-8 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStudy.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Left Column: Study details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] tracking-wider uppercase">
                    <GraduationCap className="h-3 w-3" />
                    Ensayos Ficticios
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 font-mono text-[10px] tracking-wider uppercase">
                    {activeStudy.badge}
                  </span>
                </div>

                <h4 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {activeStudy.title}
                </h4>

                <div className="flex items-start gap-3 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                  <Award className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-sans text-xs font-semibold text-slate-300 block">Centro de Investigación</span>
                    <span className="font-sans text-sm text-slate-400 block mt-0.5">{activeStudy.university}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="font-sans text-xs font-bold text-slate-400 uppercase tracking-widest block">Resumen del Estudio</span>
                  <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                    {activeStudy.abstract}
                  </p>
                </div>

                {/* Key Metrics cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  {activeStudy.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="bg-slate-900 border border-slate-900 rounded-xl p-4 flex flex-col justify-between">
                      <span className="font-sans text-xs text-slate-500">{metric.label}</span>
                      <div>
                        <span className="font-mono text-xl sm:text-2xl font-bold text-emerald-400 block mt-1">
                          {metric.value}
                        </span>
                        <span className="font-sans text-[10px] text-slate-400 block mt-1 leading-normal">
                          {metric.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bibliography Citation */}
                <div className="border-t border-slate-800 pt-6 space-y-2">
                  <div className="flex items-center gap-2 text-slate-500">
                    <FileText className="h-4 w-4" />
                    <span className="font-mono text-[10px] uppercase tracking-wider">Cita Bibliográfica Simulada</span>
                  </div>
                  <p className="font-sans text-xs italic text-slate-400 leading-normal pl-4 border-l border-emerald-500/50">
                    {activeStudy.citation}
                  </p>
                </div>
              </div>

              {/* Right Column: Custom Visual Graph */}
              <div className="lg:col-span-5 bg-slate-900 rounded-xl border border-slate-850 p-5 md:p-6 shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-emerald-400" />
                    <span className="font-sans text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Métrica de Eficacia
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    {activeStudy.chart.yAxisLabel}
                  </span>
                </div>

                <h5 className="font-sans text-sm font-semibold text-slate-200 mb-6 leading-snug">
                  {activeStudy.chart.title}
                </h5>

                {/* Horizontal Bar Chart representation */}
                <div className="space-y-5">
                  {activeStudy.chart.data.map((point, pIdx) => {
                    const isHighlighted = point.label.includes("Aetheris") || point.label.includes("Somnia");
                    const isPlacebo = point.label.includes("Placebo");
                    const widthPercent = (point.value / maxValue) * 100;

                    return (
                      <div key={pIdx} className="space-y-1.5">
                        <div className="flex justify-between text-xs font-sans">
                          <span className={`font-medium ${isHighlighted ? "text-emerald-400 font-semibold" : isPlacebo ? "text-slate-500" : "text-slate-300"}`}>
                            {point.label}
                          </span>
                          <span className="font-mono font-bold text-white">{point.value}%</span>
                        </div>
                        {/* Bar Wrapper */}
                        <div className="h-4 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${widthPercent}%` }}
                            transition={{ duration: 0.8, delay: pIdx * 0.1 }}
                            className={`h-full rounded-full ${
                              isHighlighted
                                ? "bg-gradient-to-r from-emerald-500 to-teal-400 shadow-md shadow-emerald-500/10"
                                : isPlacebo
                                ? "bg-slate-700"
                                : "bg-slate-600"
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Scientific Proof list */}
                <div className="mt-8 border-t border-slate-800 pt-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span className="font-sans text-xs text-slate-400">Verificación por HPLC (Ficticio)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span className="font-sans text-xs text-slate-400">Cero aditivos químicos de síntesis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span className="font-sans text-xs text-slate-400">Libre de alérgenos y trazas contaminantes</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
