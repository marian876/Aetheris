import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Shield, HelpCircle, ShoppingCart, CheckCircle2, SlidersHorizontal, Info, X } from "lucide-react";
import { PRODUCTS } from "../data";
import { Product } from "../types";

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

export default function Products({ onAddToCart }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [addedProductIds, setAddedProductIds] = useState<string[]>([]);

  const categories = ["Todos", "Enfoque & Mente", "Sueño & Relajación", "Inmunidad & Energía", "Nutricosmética", "Equilibrio Diario"];

  const filteredProducts = selectedCategory === "Todos"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleAddToCartWithFeedback = (product: Product) => {
    onAddToCart(product);
    // Add temporary visual confirmation state for this product button
    setAddedProductIds((prev) => [...prev, product.id]);
    setTimeout(() => {
      setAddedProductIds((prev) => prev.filter((id) => id !== product.id));
    }, 1500);
  };

  return (
    <section id="productos" className="relative py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Decorative blurry nodes */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">
            Catálogo Oficial
          </h2>
          <h3 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Nuestros Productos
          </h3>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto rounded-full" />
          <p className="font-sans text-slate-400 max-w-xl mx-auto text-sm mt-4">
            Compuestos activos formulados científicamente para sincronizarse con tu cuerpo. Haz clic en cualquier tarjeta para ver especificaciones técnicas de laboratorio.
          </p>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-slate-900 scrollbar-thin scrollbar-thumb-slate-800">
          <div className="flex gap-2 mx-auto">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/50 border border-slate-850 text-slate-400 text-xs font-mono uppercase tracking-wider shrink-0 mr-2">
              <SlidersHorizontal className="h-3.5 w-3.5 text-emerald-400" />
              Filtrar por:
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-emerald-500 text-slate-950 shadow-md font-bold"
                    : "bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => {
              const isAdded = addedProductIds.includes(prod.id);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={prod.id}
                  onMouseEnter={() => setHoveredCardId(prod.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-900 bg-slate-900/40 hover:bg-slate-900 hover:border-slate-800/80 transition-all duration-300 shadow-xl overflow-hidden p-4"
                >
                  <div>
                    {/* Category overlay */}
                    <div className="absolute top-6 left-6 z-10 flex items-center gap-1">
                      <span className="bg-slate-950/85 backdrop-blur-md border border-slate-800 font-mono text-[9px] font-bold text-emerald-400 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {prod.category}
                      </span>
                    </div>

                    {/* Image wrap with hover zoom */}
                    <div
                      onClick={() => setDetailProduct(prod)}
                      className="relative h-64 w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-850 cursor-pointer"
                    >
                      <img
                        referrerPolicy="no-referrer"
                        src={prod.image}
                        alt={prod.name}
                        className="h-full w-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Technical detail action preview overlay */}
                      <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="flex items-center gap-1 bg-emerald-500/90 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <Info className="h-4 w-4" />
                          Especificaciones
                        </span>
                      </div>
                    </div>

                    {/* Product Metadata */}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="h-3.5 w-3.5 fill-current" />
                        <span className="font-mono text-xs font-bold text-slate-300">{prod.rating.toFixed(1)}</span>
                      </div>
                      <span className="font-mono text-[10px] text-slate-500 uppercase">
                        {prod.specs.servingSize}
                      </span>
                    </div>

                    {/* Name */}
                    <h4
                      onClick={() => setDetailProduct(prod)}
                      className="font-sans text-lg font-bold text-white mt-2 group-hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      {prod.name}
                    </h4>

                    {/* Description */}
                    <p className="font-sans text-xs text-slate-400 leading-relaxed mt-2 line-clamp-2">
                      {prod.description}
                    </p>

                    {/* Fictive Benefits */}
                    <ul className="mt-4 space-y-1.5">
                      {prod.benefits.slice(0, 2).map((ben, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-1.5 text-xs text-slate-300 leading-snug">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & Buy Section */}
                  <div className="mt-6 pt-4 border-t border-slate-900/60 flex items-center justify-between">
                    <div>
                      <span className="font-sans text-[10px] text-slate-500 block uppercase">Precio</span>
                      <span className="font-mono text-xl font-bold text-white">
                        ${prod.price.toFixed(2)} <span className="text-[10px] font-sans font-light text-slate-400">USD</span>
                      </span>
                    </div>

                    <button
                      id={`add-to-cart-${prod.id}`}
                      onClick={() => handleAddToCartWithFeedback(prod)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                        isAdded
                          ? "bg-emerald-500 text-slate-950 font-bold scale-95"
                          : "bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <CheckCircle2 className="h-4 w-4" />
                          ¡Agregado!
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="h-4 w-4" />
                          Agregar
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Decorative disclaimer notice */}
        <div className="mt-12 text-center">
          <p className="font-mono text-[9px] text-slate-600 uppercase tracking-wider">
            Todos los productos son ficticios • Los precios se muestran para fines ilustrativos del carrito
          </p>
        </div>
      </div>

      {/* PRODUCT TECHNICAL DETAILS MODAL */}
      <AnimatePresence>
        {detailProduct && (
          <div id="product-detail-modal-container" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDetailProduct(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl p-6 md:p-8 text-left z-10"
            >
              {/* Close Button */}
              <button
                id="close-detail-modal-btn"
                onClick={() => setDetailProduct(null)}
                className="absolute top-5 right-5 text-slate-400 transition-colors hover:text-white"
                aria-label="Cerrar detalles de producto"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-4">
                {/* Product Image */}
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                  <img
                    referrerPolicy="no-referrer"
                    src={detailProduct.image}
                    alt={detailProduct.name}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>

                {/* Technical Information */}
                <div className="space-y-4">
                  <div>
                    <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                      {detailProduct.category}
                    </span>
                    <h3 className="font-sans text-2xl font-bold text-white mt-1 leading-snug">
                      {detailProduct.name}
                    </h3>
                  </div>

                  <p className="font-sans text-sm text-slate-300 leading-relaxed">
                    {detailProduct.description}
                  </p>

                  {/* Fictive Specs Block */}
                  <div className="bg-slate-950 rounded-xl p-4 border border-slate-850 space-y-2">
                    <span className="font-mono text-[10px] text-slate-500 uppercase block tracking-wider">
                      Ficha de Laboratorio (Ficticia)
                    </span>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-slate-400 block">Dosis Recomendada:</span>
                        <span className="text-slate-200 font-medium">{detailProduct.specs.servingSize}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Servicios:</span>
                        <span className="text-slate-200 font-medium">{detailProduct.specs.servings} tomas</span>
                      </div>
                      <div className="col-span-2 border-t border-slate-900 pt-2">
                        <span className="text-slate-400 block">Principio Activo Principal:</span>
                        <span className="text-emerald-400 font-medium">{detailProduct.specs.mainIngredient}</span>
                      </div>
                    </div>
                  </div>

                  {/* Complete list of benefits */}
                  <div className="space-y-1.5">
                    <span className="font-sans text-xs font-bold text-slate-400 uppercase tracking-widest block">Beneficios Moleculares</span>
                    <ul className="space-y-1.5">
                      {detailProduct.benefits.map((ben, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-1.5 text-xs text-slate-300 leading-snug">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & Buy Button inside modal */}
                  <div className="border-t border-slate-850 pt-4 flex items-center justify-between">
                    <div>
                      <span className="font-mono text-2xl font-bold text-white">
                        ${detailProduct.price.toFixed(2)}
                      </span>
                      <span className="font-sans text-[10px] text-slate-500 block uppercase">Precios en USD</span>
                    </div>

                    <button
                      id={`modal-add-to-cart-${detailProduct.id}`}
                      onClick={() => {
                        handleAddToCartWithFeedback(detailProduct);
                        setDetailProduct(null);
                      }}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
