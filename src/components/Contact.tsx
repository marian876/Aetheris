import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { CONTACT_INFO, CONTACT_TEXTS } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Consulta de Laboratorio",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API pipeline delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        subject: "Consulta de Laboratorio",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contacto" className="relative py-24 bg-slate-900 border-t border-slate-950 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">
            {CONTACT_TEXTS.subtitle}
          </h2>
          <h3 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {CONTACT_TEXTS.title}
          </h3>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto rounded-full" />
          <p className="font-sans text-slate-400 max-w-xl mx-auto text-sm mt-4">
            {CONTACT_TEXTS.description}
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Contact Information & Illustrative Vector Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 md:p-8 space-y-6 shadow-xl">
              <h4 className="font-sans text-xl font-bold text-white mb-2">{CONTACT_TEXTS.channelsTitle}</h4>

              {/* Address */}
              <div className="flex gap-4 items-start text-slate-300 text-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-sans text-xs font-semibold text-slate-400 block uppercase">{CONTACT_TEXTS.addressLabel}</span>
                  <span className="block mt-1 leading-relaxed">{CONTACT_INFO.address}</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start text-slate-300 text-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-sans text-xs font-semibold text-slate-400 block uppercase">{CONTACT_TEXTS.phoneLabel}</span>
                  <span className="block mt-1 font-mono">{CONTACT_INFO.phone}</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start text-slate-300 text-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-sans text-xs font-semibold text-slate-400 block uppercase">{CONTACT_TEXTS.emailLabel}</span>
                  <span className="block mt-1 text-emerald-400 font-medium">{CONTACT_INFO.email}</span>
                </div>
              </div>

              {/* Schedule */}
              <div className="flex gap-4 items-start text-slate-300 text-sm border-t border-slate-900 pt-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-sans text-xs font-semibold text-slate-400 block uppercase">{CONTACT_TEXTS.scheduleLabel}</span>
                  <span className="block mt-1 leading-normal text-slate-400">{CONTACT_INFO.schedule}</span>
                </div>
              </div>
            </div>

            {/* Illustrative Vector Map - AETHERIS RESEARCH HUB LOCATOR */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-xs font-bold text-slate-300 uppercase tracking-wider">
                  {CONTACT_TEXTS.mapTitle}
                </span>
                <span className="font-mono text-[9px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded uppercase font-semibold">
                  {CONTACT_TEXTS.mapBadge}
                </span>
              </div>

              {/* Vector SVG Stylized High-Tech Grid Map */}
              <div className="relative h-48 w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-850 flex items-center justify-center p-2">
                <svg
                  className="w-full h-full text-slate-800 opacity-60"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                >
                  {/* Grid lines */}
                  <line x1="10" y1="0" x2="10" y2="100" strokeDasharray="1,2" />
                  <line x1="20" y1="0" x2="20" y2="100" strokeDasharray="1,2" />
                  <line x1="30" y1="0" x2="30" y2="100" strokeDasharray="1,2" />
                  <line x1="40" y1="0" x2="40" y2="100" strokeDasharray="1,2" />
                  <line x1="50" y1="0" x2="50" y2="100" strokeDasharray="1,2" />
                  <line x1="60" y1="0" x2="60" y2="100" strokeDasharray="1,2" />
                  <line x1="70" y1="0" x2="70" y2="100" strokeDasharray="1,2" />
                  <line x1="80" y1="0" x2="80" y2="100" strokeDasharray="1,2" />
                  <line x1="90" y1="0" x2="90" y2="100" strokeDasharray="1,2" />

                  <line x1="0" y1="10" x2="100" y2="10" strokeDasharray="1,2" />
                  <line x1="0" y1="20" x2="100" y2="20" strokeDasharray="1,2" />
                  <line x1="0" y1="30" x2="100" y2="30" strokeDasharray="1,2" />
                  <line x1="0" y1="40" x2="100" y2="40" strokeDasharray="1,2" />
                  <line x1="0" y1="50" x2="100" y2="50" strokeDasharray="1,2" />
                  <line x1="0" y1="60" x2="100" y2="60" strokeDasharray="1,2" />
                  <line x1="0" y1="70" x2="100" y2="70" strokeDasharray="1,2" />
                  <line x1="0" y1="80" x2="100" y2="80" strokeDasharray="1,2" />
                  <line x1="0" y1="90" x2="100" y2="90" strokeDasharray="1,2" />

                  {/* Fictional district pathways */}
                  <path d="M 0,25 C 20,25 40,40 50,55 C 60,70 80,75 100,75" stroke="#334155" strokeWidth="1.5" />
                  <path d="M 35,0 C 35,30 50,40 50,55 C 50,70 65,100 65,100" stroke="#334155" strokeWidth="1.5" />

                  {/* High tech node hubs */}
                  <circle cx="15" cy="40" r="1.5" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                  <circle cx="75" cy="30" r="1.5" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                  <circle cx="85" cy="85" r="1.5" fill="#1e293b" stroke="#334155" strokeWidth="1" />

                  {/* Fictional research center location dot - GLOWING EMERALD */}
                  <circle cx="50" cy="55" r="4" fill="#10b981" fillOpacity="0.2" className="animate-ping" />
                  <circle cx="50" cy="55" r="2.5" fill="#10b981" />
                </svg>

                {/* Legend Overlay */}
                <div className="absolute bottom-3 left-3 bg-slate-950/90 border border-slate-800 rounded-lg p-2 flex items-center gap-1.5 pointer-events-none">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-sans text-[10px] text-slate-300 font-semibold block">{CONTACT_TEXTS.mapLegend}</span>
                </div>
              </div>
              <p className="font-sans text-[11px] text-slate-500 leading-normal">
                {CONTACT_TEXTS.mapFootnote}
              </p>
            </div>
          </div>

          {/* Right Side: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 md:p-8 shadow-xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left"
                  >
                    <div>
                      <h4 className="font-sans text-xl font-bold text-white mb-1">{CONTACT_TEXTS.formTitle}</h4>
                      <p className="font-sans text-xs text-slate-400">
                        {CONTACT_TEXTS.formSubtitle}
                      </p>
                    </div>

                    {/* Form Fields row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-sans text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                          {CONTACT_TEXTS.nameLabel}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={CONTACT_TEXTS.namePlaceholder}
                          className="w-full bg-slate-900 border border-slate-850 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/80 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-sans text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                          {CONTACT_TEXTS.emailLabel}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={CONTACT_TEXTS.emailPlaceholder}
                          className="w-full bg-slate-900 border border-slate-850 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/80 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                        />
                      </div>
                    </div>

                    {/* Subject Selector */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                        {CONTACT_TEXTS.subjectLabel}
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-850 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-emerald-500/80 transition-all"
                      >
                        {CONTACT_TEXTS.subjectOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                        {CONTACT_TEXTS.messageLabel}
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={CONTACT_TEXTS.messagePlaceholder}
                        className="w-full bg-slate-900 border border-slate-850 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/80 focus:ring-2 focus:ring-emerald-500/10 transition-all resize-none"
                      />
                    </div>

                    {/* Action submit button */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold font-sans text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                          {CONTACT_TEXTS.submitBtnLoading}
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          {CONTACT_TEXTS.submitBtn}
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-feedback"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-sans text-2xl font-bold text-white">{CONTACT_TEXTS.successTitle}</h4>
                      <p className="font-sans text-sm text-slate-400 max-w-md mx-auto">
                        {CONTACT_TEXTS.successText}
                      </p>
                    </div>

                    {/* Simulation stats receipt */}
                    <div className="bg-slate-900 border border-slate-850 rounded-xl p-4 text-left max-w-md mx-auto text-xs space-y-2">
                      <div className="flex items-center gap-2 text-emerald-400 mb-1">
                        <ShieldCheck className="h-4 w-4" />
                        <span className="font-bold uppercase tracking-wider font-mono">{CONTACT_TEXTS.successReceiptTitle}</span>
                      </div>
                      <div className="text-slate-400 space-y-1">
                        <p><strong>Asunto:</strong> {formData.subject}</p>
                        <p><strong>Estado:</strong> Recibido y Registrado (Simulado)</p>
                        <p><strong>Fecha:</strong> {new Date().toLocaleDateString()}</p>
                      </div>
                    </div>

                    <button
                      id="contact-reset-btn"
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-xl border border-slate-800 text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-900 transition-colors cursor-pointer"
                    >
                      {CONTACT_TEXTS.successResetBtn}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
