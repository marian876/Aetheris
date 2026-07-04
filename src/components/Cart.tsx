import { motion, AnimatePresence } from "motion/react";
import { X, Trash2, Plus, Minus, ShoppingBag, Receipt, ArrowRight } from "lucide-react";
import { CartItem } from "../types";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export default function Cart({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}: CartProps) {
  // Calculations
  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const ivaRate = 0.21; // 21% IVA
  const iva = subtotal * ivaRate;
  const total = subtotal + iva;

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="cart-drawer-container" className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop overlay */}
          <motion.div
            id="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
          />

          {/* Drawer panel */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              id="cart-drawer-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35 }}
              className="w-screen max-w-md bg-slate-950 border-l border-slate-900 shadow-2xl flex flex-col justify-between"
            >
              {/* Drawer Header */}
              <div className="px-6 py-5 border-b border-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="h-5 w-5 text-emerald-400" />
                  <h3 className="font-sans text-lg font-bold text-white">Tu Carrito</h3>
                  <span className="font-mono text-xs bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800 text-slate-400">
                    {totalItemCount} {totalItemCount === 1 ? "ítem" : "ítems"}
                  </span>
                </div>
                <button
                  id="close-cart-btn"
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors cursor-pointer"
                  aria-label="Cerrar carrito"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer Body (Items List) */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
                    <div className="h-16 w-16 rounded-full bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-500">
                      <ShoppingBag className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="font-sans text-base font-bold text-white">El carrito está vacío</h4>
                      <p className="font-sans text-xs text-slate-400 max-w-xs mx-auto mt-1">
                        Explora nuestro catálogo de elíxires adaptógenos y agrega salud y rendimiento a tu rutina diaria.
                      </p>
                    </div>
                    <button
                      id="cart-empty-browse-btn"
                      onClick={onClose}
                      className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-emerald-400 hover:text-emerald-350 hover:bg-slate-850 transition-colors cursor-pointer"
                    >
                      Explorar productos
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex gap-4 p-3 rounded-xl border border-slate-900 bg-slate-900/30 hover:border-slate-850 transition-colors"
                      >
                        {/* Thumbnail */}
                        <div className="h-20 w-20 rounded-lg overflow-hidden border border-slate-850 bg-slate-950 shrink-0">
                          <img
                            referrerPolicy="no-referrer"
                            src={item.product.image}
                            alt={item.product.name}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Info details */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex items-start justify-between">
                            <div>
                              <h5 className="font-sans text-sm font-bold text-white line-clamp-1">
                                {item.product.name}
                              </h5>
                              <span className="font-mono text-[10px] text-emerald-400">
                                {item.product.category}
                              </span>
                            </div>
                            <span className="font-mono text-sm font-bold text-white">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </span>
                          </div>

                          {/* Control row */}
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1.5 bg-slate-950 rounded-lg p-1 border border-slate-900">
                              <button
                                id={`cart-decrement-${item.product.id}`}
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                                className="h-6 w-6 rounded-md flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-900 transition-colors cursor-pointer"
                                aria-label="Disminuir"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="font-mono text-xs font-bold text-slate-200 w-6 text-center">
                                {item.quantity}
                              </span>
                              <button
                                id={`cart-increment-${item.product.id}`}
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                className="h-6 w-6 rounded-md flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-900 transition-colors cursor-pointer"
                                aria-label="Aumentar"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>

                            <button
                              id={`cart-remove-${item.product.id}`}
                              onClick={() => onRemoveItem(item.product.id)}
                              className="text-slate-500 hover:text-red-400 p-1.5 rounded-lg hover:bg-red-500/5 transition-colors cursor-pointer"
                              aria-label="Eliminar ítem"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Drawer Footer (Summary Breakdown) */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-slate-900 bg-slate-950 space-y-4">
                  {/* Summary math cards */}
                  <div className="space-y-2 bg-slate-900/40 border border-slate-900/60 rounded-xl p-4">
                    <div className="flex items-center justify-between text-xs font-sans text-slate-400">
                      <span>Subtotal</span>
                      <span className="font-mono font-medium text-slate-200">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-sans text-slate-400">
                      <div className="flex items-center gap-1">
                        <span>IVA</span>
                        <span className="font-mono text-[9px] bg-slate-950 px-1.5 py-0.5 rounded text-slate-500 border border-slate-850">21%</span>
                      </div>
                      <span className="font-mono font-medium text-slate-200">${iva.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-slate-900 my-2 pt-2 flex items-center justify-between text-sm font-sans">
                      <span className="font-bold text-white">Total General</span>
                      <div className="text-right">
                        <span className="font-mono text-lg font-black text-emerald-400">${total.toFixed(2)}</span>
                        <span className="font-sans text-[8px] text-slate-500 uppercase block">Dólares USD</span>
                      </div>
                    </div>
                  </div>

                  {/* Checkout CTA Buttons */}
                  <div className="space-y-2.5">
                    <button
                      id="cart-checkout-btn"
                      onClick={onCheckout}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold font-sans text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                    >
                      <Receipt className="h-4 w-4" />
                      Procesar pago (Simulado)
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                      id="cart-continue-btn"
                      onClick={onClose}
                      className="w-full py-2.5 text-center text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Seguir Comprando
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
