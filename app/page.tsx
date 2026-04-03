"use client";

import { useEffect } from "react";
import Link from "next/link";
import { products } from "@/lib/products";

export default function Home() {
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

  // Limitando a 3 productos para la home
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#222] font-sans selection:bg-stone-300">

      {/* HERO */}
      <section className="relative w-full h-[60vh] md:h-[85vh] flex items-center justify-center overflow-hidden reveal">
        <img
          src="/1.jpeg"
          alt="Velaris Hero Feature"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 flex flex-col items-center animate-fade-in px-4">
          <img
            src="/logo.jpeg"
            alt="Logo Velaris Central"
            className="h-32 sm:h-48 md:h-80 w-auto object-contain rounded-full shadow-2xl"
          />
        </div>
      </section>

      {/* SECCIÓN VALORES */}
      <section className="bg-white py-12 md:py-16 px-4 md:px-6 reveal">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-center">
          <div className="flex flex-col items-center p-6 border border-stone-100 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 mb-3 md:mb-4 text-stone-400">🌿</div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-stone-800 mb-2">Sustentabilidad</h4>
            <p className="text-stone-500 text-xs font-light leading-relaxed">Cera de soja 100% natural, amigable con el medio ambiente.</p>
          </div>
          <div className="flex flex-col items-center p-6 border border-stone-100 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 mb-3 md:mb-4 text-stone-400">✨</div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-stone-800 mb-2">Esencias Premium</h4>
            <p className="text-stone-500 text-xs font-light leading-relaxed">Fragancias intensas que perduran y transforman tus espacios.</p>
          </div>
          <div className="flex flex-col items-center p-6 border border-stone-100 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 mb-3 md:mb-4 text-stone-400">🤲</div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-stone-800 mb-2">Hecho a Mano</h4>
            <p className="text-stone-500 text-xs font-light leading-relaxed">Cada vela es volcada a mano en Colón, Entre Ríos, con dedicación.</p>
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <main id="productos" className="bg-[#FAF9F6] py-16 md:py-24 px-4 md:px-6 reveal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-2xl md:text-4xl font-[family-name:var(--font-playfair)] text-stone-800 tracking-widest uppercase">
              Selección Velaris
            </h3>
            <div className="w-12 h-[1px] bg-stone-300 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col items-center">
                <div className="w-full max-w-sm aspect-[4/5] overflow-hidden bg-stone-200 mb-5 md:mb-6 rounded-sm shadow-md group-hover:shadow-2xl transition-all duration-700">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                  />
                </div>
                <h4 className="text-base md:text-lg font-[family-name:var(--font-playfair)] text-stone-800 text-center uppercase tracking-widest">
                  {product.name}
                </h4>
                <p className="text-stone-400 text-[10px] md:text-xs mt-2 uppercase tracking-tighter italic">{product.category}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/productos"
              className="inline-block px-12 py-4 border border-stone-900 text-stone-900 text-[10px] md:text-xs font-semibold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all duration-500 rounded-full"
            >
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </main>

      {/* SECCIÓN CUIDADOS */}
      <section id="cuidados" className="bg-white py-16 md:py-24 px-4 md:px-12 reveal">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl md:text-6xl font-[family-name:var(--font-playfair)] text-stone-900 mb-6 md:mb-8 leading-none tracking-tighter uppercase italic">
              Ritual de <br className="hidden md:block" /> Cuidado
            </h3>
            <p className="text-stone-500 font-light leading-relaxed mb-8 md:mb-10 text-sm md:text-base px-2 md:px-0">
              Nuestras velas de soja son seres vivos que requieren atención. Seguir estos pasos asegura que tu vela dure más y brinde su mejor aroma.
            </p>
            <div className="space-y-5 md:space-y-6 text-left px-2 md:px-0">
              {[
                "Primera quemada hasta que se derrita toda la superficie.",
                "Mantener el pabilo cortado a 5mm siempre.",
                "No quemar por más de 3 horas seguidas.",
                "Apagar ahogando la llama sin soplar."
              ].map((tip, i) => (
                <div key={i} className="flex gap-4 items-center group">
                  <div className="w-6 h-6 shrink-0 rounded-full border border-stone-200 flex items-center justify-center text-[10px] text-stone-400 group-hover:bg-stone-50">{i + 1}</div>
                  <p className="text-stone-600 text-[11px] md:text-xs uppercase tracking-widest leading-snug">{tip}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full aspect-square md:aspect-auto md:h-[500px]">
            <img src="/2.jpeg" alt="Cuidado de vela" className="w-full h-full object-cover rounded-sm shadow-xl" />
          </div>
        </div>
      </section>

      {/* SECCIÓN INSTAGRAM REELS */}
      <section className="bg-[#FDFBF7] py-16 md:py-24 px-4 md:px-6 reveal">
        <div className="max-w-4xl mx-auto text-center font-[family-name:var(--font-playfair)]">
          <h3 className="text-3xl md:text-5xl text-stone-900 mb-3 md:mb-4 italic uppercase">Vivilo en Instagram</h3>
          <p className="text-stone-500 text-xs md:text-base mb-8 md:mb-12 tracking-widest uppercase">@velaris_velas</p>

          <div className="relative w-full aspect-[9/16] max-w-[280px] md:max-w-[400px] mx-auto rounded-3xl overflow-hidden shadow-2xl border border-stone-100 bg-white">
            <iframe
              src="https://www.instagram.com/p/DWoRwcijpum/embed"
              className="w-full h-full border-0"
              allow="encrypted-media"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>

          <a
            href="https://www.instagram.com/p/DWoRwcijpum/"
            target="_blank"
            className="inline-block mt-10 md:mt-12 px-8 md:px-10 py-3 md:py-4 border border-stone-900 text-stone-900 text-[10px] md:text-sm font-semibold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all duration-500 rounded-full"
          >
            Ver Reel Original
          </a>
        </div>
      </section>

    </div>
  );
}