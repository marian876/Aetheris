import { motion, AnimatePresence } from "motion/react";
import { AlertTriangle, X, CheckCircle } from "lucide-react";
import { CHECKOUT_MODAL_TEXTS } from "../data";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function CheckoutModal({ isOpen, onClose, onConfirm }: CheckoutModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div id="checkout-modal-container" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            id="checkout-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            id="checkout-modal-card"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl"
          >
            {/* Top decorative amber border */}
            <div className="h-2 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600" />

            <div className="p-6 md:p-8">
              {/* Close Button */}
              <button
                id="close-modal-btn"
                onClick={onClose}
                className="absolute top-5 right-5 text-slate-400 transition-colors hover:text-white"
                aria-label="Cerrar modal"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Warning/Educational Icon */}
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                <AlertTriangle className="h-8 w-8 animate-pulse" />
              </div>

              {/* Title */}
              <h2 className="text-center font-sans text-2xl font-bold tracking-tight text-white md:text-3xl">
                {CHECKOUT_MODAL_TEXTS.title}
              </h2>
              <div className="my-2 text-center text-xs font-mono tracking-wider text-amber-500 uppercase">
                {CHECKOUT_MODAL_TEXTS.badge}
              </div>

              <div className="my-6 border-t border-b border-slate-800 py-4 font-sans text-sm leading-relaxed text-slate-300">
                <p className="mb-3 text-center font-medium text-amber-400">
                  {CHECKOUT_MODAL_TEXTS.salutation}
                </p>
                <p className="mb-3">
                  {CHECKOUT_MODAL_TEXTS.bodyLine1} <strong className="text-white font-semibold">{CHECKOUT_MODAL_TEXTS.bodyLine1Bold}</strong> {CHECKOUT_MODAL_TEXTS.bodyLine1Rest}
                </p>
                <p className="mb-3 text-slate-400">
                  {CHECKOUT_MODAL_TEXTS.bodyLine2}
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-400 mb-2">
                  <li>{CHECKOUT_MODAL_TEXTS.bullet1}</li>
                  <li>{CHECKOUT_MODAL_TEXTS.bullet2}</li>
                  <li>{CHECKOUT_MODAL_TEXTS.bullet3}</li>
                </ul>
                <p className="text-center font-medium text-slate-200 mt-4">
                  {CHECKOUT_MODAL_TEXTS.thankYou}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  id="modal-confirm-btn"
                  onClick={onConfirm}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 font-semibold text-slate-950 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/20 active:scale-95 cursor-pointer"
                >
                  <CheckCircle className="h-5 w-5" />
                  {CHECKOUT_MODAL_TEXTS.confirmBtn}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
