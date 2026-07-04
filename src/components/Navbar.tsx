import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShoppingCart, Leaf, FlaskConical } from "lucide-react";

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
  hasPlaygroundTop?: boolean;
  activeFile: "inicio.html" | "nosotros.html" | "ciencia.html" | "productos.html" | "contacto.html";
  setActiveFile: (file: "inicio.html" | "nosotros.html" | "ciencia.html" | "productos.html" | "contacto.html") => void;
}

export default function Navbar({
  cartItemCount,
  onCartClick,
  activeFile,
  setActiveFile
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "inicio", label: "Inicio", file: "inicio.html" as const },
    { id: "nosotros", label: "Nosotros", file: "nosotros.html" as const },
    { id: "ciencia", label: "Ciencia", file: "ciencia.html" as const },
    { id: "productos", label: "Productos", file: "productos.html" as const },
    { id: "contacto", label: "Contacto", file: "contacto.html" as const }
  ];

  const handleNavigate = (file: "inicio.html" | "nosotros.html" | "ciencia.html" | "productos.html" | "contacto.html") => {
    setIsMobileMenuOpen(false);
    setActiveFile(file);
  };

  return (
    <header className="w-full relative z-40 bg-slate-950 border-b border-slate-900/50 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavigate("inicio.html")}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300">
              <FlaskConical className="h-5 w-5 absolute transition-transform group-hover:scale-0 duration-300" />
              <Leaf className="h-5 w-5 absolute scale-0 transition-transform group-hover:scale-100 group-hover:text-emerald-300 duration-300" />
            </div>
            <div className="text-left">
              <span className="font-sans text-xl font-bold tracking-widest text-white block leading-none">
                AETHERIS
              </span>
              <span className="font-mono text-[9px] text-emerald-400 tracking-wider uppercase block mt-1">
                BioLabs • Adaptógenos
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = activeFile === item.file;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.file)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-white ${
                    isActive ? "text-emerald-400 font-medium" : "text-slate-400"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions: Shopping Cart & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            {/* Cart Trigger */}
            <button
              id="navbar-cart-btn"
              onClick={onCartClick}
              className="relative p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-850 hover:border-slate-700 transition-all duration-200 flex items-center justify-center"
              aria-label="Abrir carrito de compras"
            >
              <ShoppingCart className="h-5 w-5" />
              <AnimatePresence>
                {cartItemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-mono text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-slate-950 shadow-md"
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-all duration-200"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 md:hidden"
            />

            {/* Drawer Body */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-72 bg-slate-950 border-l border-slate-900 z-55 p-6 md:hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-900 pb-4">
                  <span className="font-sans text-lg font-bold tracking-widest text-white">
                    AETHERIS
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest pt-2">
                  Menú de Navegación
                </div>
                <div className="flex flex-col gap-2">
                  {menuItems.map((item) => {
                    const isActive = activeFile === item.file;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavigate(item.file)}
                        className={`text-left py-3 px-4 rounded-xl text-base font-medium transition-all ${
                          isActive
                            ? "bg-emerald-500/10 text-emerald-400 font-semibold border-l-4 border-emerald-500"
                            : "text-slate-400 hover:text-white hover:bg-slate-900"
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-slate-900 pt-4 text-center">
                <p className="font-mono text-[9px] text-slate-600 uppercase tracking-wider">
                  Aetheris BioLabs • Proyecto Académico
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
