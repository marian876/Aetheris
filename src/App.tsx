import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Science from "./components/Science";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import CheckoutModal from "./components/CheckoutModal";
import { Product, CartItem } from "./types";

export default function App() {
  const [activeFile, setActiveFile] = useState<"inicio.html" | "nosotros.html" | "ciencia.html" | "productos.html" | "contacto.html">("inicio.html");

  // Cart state with lazy loading from localStorage for persistence
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("aetheris_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Sync state to localStorage on any modification
  useEffect(() => {
    localStorage.setItem("aetheris_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Scroll to top of screen whenever the active static page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [activeFile]);

  // Total count of elements in cart
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Handlers
  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
  };

  const handleViewProducts = () => {
    setActiveFile("productos.html");
  };

  const handleProcessCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleConfirmCheckout = () => {
    // Clear cart upon approving the academic simulation modal
    setCartItems([]);
    setIsCheckoutOpen(false);
  };

  return (
    <div id="aetheris-root" className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Sticky Top Navbar */}
      <Navbar
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
        activeFile={activeFile}
        setActiveFile={setActiveFile}
      />

      {/* Core Page Sections */}
      <main id="main-content">
        {activeFile === "inicio.html" && (
          <>
            <Hero onViewProducts={handleViewProducts} />
            <Testimonials />
          </>
        )}
        {activeFile === "nosotros.html" && <About />}
        {activeFile === "ciencia.html" && <Science />}
        {activeFile === "productos.html" && <Products onAddToCart={handleAddToCart} />}
        {activeFile === "contacto.html" && (
          <>
            <Faq />
            <Contact />
          </>
        )}
      </main>

      {/* Page Footer */}
      <Footer />

      {/* Slide-out Cart Drawer */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleProcessCheckout}
      />

      {/* Educational Project Checkout Warning Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onConfirm={handleConfirmCheckout}
      />
    </div>
  );
}
