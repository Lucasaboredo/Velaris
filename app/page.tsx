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

  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#222] font-sans selection:bg-stone-300">

      {/* HERO SECTION CON LOGO MÁS ARRIBA Y GRANDE */}
      <section className="relative w-full aspect-[4/5] md:aspect-[21/9] max-h-[85vh] flex items-center justify-center overflow-hidden reveal bg-stone-200">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/vela.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>

        <div className="absolute inset-0 bg-black/20"></div>

        {/* Ajuste de posición: -translate-y-8 o -translate-y-12 lo sube visualmente */}
        <div className="relative z-10 flex flex-col items-center animate-fade-in px-4 -translate-y-8 md:-translate-y-12">
          <img
            src="/logo.jpeg"
            alt="Logo Velaris Central"
            className="h-40 sm:h-56 md:h-72 w-auto object-contain rounded-full shadow-2xl border-4 border-white/30 hover:scale-105 transition-transform duration-700"
          />
        </div>
      </section>

      {/* SECCIÓN VALORES */}
      <section className="bg-white py-16 md:py-20 px-6 reveal">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          <div className="flex flex-col items-center p-8 bg-[#FDFBF7] rounded-2xl hover:shadow-xl transition-all duration-500 border border-transparent hover:border-stone-100 group">
            <div className="w-12 h-12 mb-5 text-stone-700 group-hover:scale-110 transition-transform duration-500">
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8m0 0A8.997 8.997 0 0019 6a8.997 8.997 0 00-7 7m0 0A8.997 8.997 0 005 6a8.997 8.997 0 007 7z" />
              </svg>
            </div>
            <h4 className="text-sm font-bold tracking-[0.15em] uppercase text-stone-900 mb-3">Sustentabilidad</h4>
            <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed">Cera de soja 100% natural, amigable con el medio ambiente.</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-[#FDFBF7] rounded-2xl hover:shadow-xl transition-all duration-500 border border-transparent hover:border-stone-100 group">
            <div className="w-12 h-12 mb-5 text-stone-700 group-hover:scale-110 transition-transform duration-500">
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <h4 className="text-sm font-bold tracking-[0.15em] uppercase text-stone-900 mb-3">Esencias Premium</h4>
            <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed">Fragancias intensas que transforman tus espacios.</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-[#FDFBF7] rounded-2xl hover:shadow-xl transition-all duration-500 border border-transparent hover:border-stone-100 group">
            <div className="w-12 h-12 mb-5 text-stone-700 group-hover:scale-110 transition-transform duration-500">
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <h4 className="text-sm font-bold tracking-[0.15em] uppercase text-stone-900 mb-3">Hecho a Mano</h4>
            <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed">Cada vela es volcada a mano en Colón, Entre Ríos.</p>
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <main id="productos" className="bg-[#FAF9F6] py-20 md:py-28 px-6 reveal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h3 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] text-stone-900 tracking-[0.1em] uppercase">
              Selección Velaris
            </h3>
            <div className="w-16 h-[2px] bg-stone-300 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col items-center cursor-pointer">
                <div className="w-full max-w-sm aspect-[4/5] overflow-hidden bg-stone-200 mb-6 rounded-xl shadow-sm group-hover:shadow-2xl transition-all duration-700">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                  />
                </div>
                <h4 className="text-lg md:text-xl font-[family-name:var(--font-playfair)] text-stone-900 text-center uppercase tracking-widest group-hover:text-stone-600 transition-colors">
                  {product.name}
                </h4>
                <p className="text-stone-400 text-[10px] md:text-xs mt-3 uppercase tracking-[0.2em]">{product.category}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/productos"
              className="inline-block px-12 py-4 bg-transparent border border-stone-900 text-stone-900 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all duration-500 rounded-full shadow-sm hover:shadow-md active:scale-95"
            >
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </main>

      {/* SECCIÓN CUIDADOS */}
      <section id="cuidados" className="bg-white py-20 md:py-28 px-6 reveal">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <h3 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] text-stone-900 mb-6 leading-tight tracking-tighter uppercase italic">
              Ritual de <br className="hidden md:block" /> Cuidado
            </h3>
            <p className="text-stone-500 font-light leading-relaxed mb-10 text-sm md:text-base">
              Nuestras velas requieren atención. Seguir estos pasos asegura una mejor experiencia aromática.
            </p>
            <div className="space-y-6 text-left">
              {[
                "Derretir toda la superficie en la primera quemada.",
                "Mantener el pabilo cortado a 5mm siempre.",
                "No quemar más de 4 horas seguidas.",
                "Apagar ahogando la llama, nunca soplar."
              ].map((tip, i) => (
                <div key={i} className="flex gap-5 items-start group">
                  <div className="w-8 h-8 shrink-0 rounded-full border border-stone-200 flex items-center justify-center text-xs font-bold text-stone-400 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
                    {i + 1}
                  </div>
                  <p className="text-stone-600 text-xs md:text-sm uppercase tracking-wider leading-relaxed pt-1">{tip}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full aspect-square md:aspect-auto md:h-[500px] order-1 md:order-2">
            <img src="/cuidado.png" alt="Cuidado de vela" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* SECCIÓN INSTAGRAM */}
      <section className="bg-[#FAF9F6] py-20 md:py-32 px-6 reveal">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-stone-900 mb-12 tracking-widest uppercase">
            Seguinos en Instagram
          </h3>
          <a
            href="https://www.instagram.com/velaris_velas/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block"
          >
            <div className="absolute -inset-4 bg-stone-200/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src="/logo.jpeg"
              alt="Instagram Velaris"
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-8 border-white group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="mt-8 flex items-center justify-center gap-2 text-stone-500 group-hover:text-stone-900 transition-colors">
              <span className="text-sm md:text-base font-light tracking-[0.3em] uppercase">@velaris_velas</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>
        </div>
      </section>

    </div>
  );
}