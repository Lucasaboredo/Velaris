"use client";

import { useEffect } from "react";
import { products } from "@/lib/products";

export default function ProductosPage() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#222] font-sans selection:bg-stone-300 pt-10">
      {/* HEADER SECTION - ESTILO EDITORIAL */}
      <section className="bg-white py-16 md:py-24 px-4 md:px-6 reveal">
        <div className="max-w-4xl mx-auto text-center font-[family-name:var(--font-playfair)]">
          <h2 className="text-3xl md:text-6xl text-stone-900 mb-6 italic uppercase tracking-tighter">
            Nuestro Catálogo <br /> Completo
          </h2>
          <p className="text-stone-500 text-sm md:text-base mb-12 tracking-[0.2em] uppercase max-w-2xl mx-auto leading-relaxed">
            Explorá nuestra colección de velas de soja artesanales, diseñadas para elevar cada rincón de tu hogar con aromas únicos y naturales.
          </p>
          <div className="w-16 h-[1px] bg-stone-300 mx-auto"></div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <main className="bg-[#FAF9F6] py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {products.map((product) => (
              <div key={product.id} className="group flex flex-col items-center reveal">
                <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden rounded-2xl shadow-sm mb-8 bg-white group-hover:shadow-2xl transition-all duration-700">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700"></div>
                </div>
                <h4 className="text-lg md:text-xl font-[family-name:var(--font-playfair)] text-stone-800 text-center uppercase tracking-widest">
                  {product.name}
                </h4>
                <p className="text-stone-400 text-[10px] md:text-xs mt-2 uppercase tracking-widest italic font-light">
                  {product.category}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href={`https://wa.me/5493447459469?text=Hola! Quiero consultar por la vela ${encodeURIComponent(product.name)}`}
                    target="_blank"
                    className="text-[10px] uppercase tracking-widest border-b border-stone-800 pb-1 text-stone-800 hover:text-stone-500 hover:border-stone-500 transition-colors"
                  >
                    Consultar disponibilidad
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* CALL TO ACTION */}
      <section className="bg-white py-20 px-4 reveal">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-stone-800 mb-6 uppercase tracking-widest">
            ¿Buscás algo personalizado?
          </h3>
          <p className="text-stone-500 text-sm mb-10 leading-relaxed font-light">
            Realizamos pedidos temáticos para eventos, regalos corporativos o momentos especiales. No dudes en consultarnos.
          </p>
          <a
            href="https://wa.me/5493447459469?text=Hola! Me gustaría consultar por una vela personalizada."
            target="_blank"
            className="inline-block px-10 py-4 border border-stone-900 text-stone-900 text-xs font-semibold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all duration-500 rounded-full"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}