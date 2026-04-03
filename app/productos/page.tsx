"use client";

import { useEffect } from "react";
import Link from "next/link";
import { products } from "@/lib/products";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
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

  // Limitamos a los primeros 3 productos para la sección destacada
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#222] font-sans selection:bg-stone-200">

      {/* HERO SECTION - VIDEO OPTIMIZADO Y LOGO ELEVADO */}
      <section className="relative w-full aspect-[4/5] md:aspect-[21/9] max-h-[85vh] flex items-center justify-center overflow-hidden reveal bg-stone-200">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/vela.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>

        {/* Viñeta cinematográfica para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30"></div>

        {/* Logo maximizado y posicionado arriba para no tapar el centro del video */}
        <div className="relative z-10 flex flex-col items-center animate-fade-in px-4 -translate-y-40 md:absolute md:top-20 md:translate-y-0">
          <img
            src="/logo.jpeg"
            alt="Logo Velaris"
            className="h-56 sm:h-64 md:h-80 w-auto object-contain rounded-full shadow-[0_0_60px_rgba(0,0,0,0.4)] border-4 border-white/40"
          />
        </div>
      </section>

      {/* SECCIÓN VALORES - ANIMACIÓN ESCALONADA */}
      <section className="bg-white py-20 md:py-32 px-6 reveal">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-[#FDFBF7] rounded-3xl border border-stone-100 hover:shadow-2xl transition-all duration-700 group">
            <div className="w-12 h-12 mb-6 text-stone-800 mx-auto group-hover:scale-110 transition-transform duration-500">
              <svg fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path d="M12 21v-8m0 0A8.997 8.997 0 0019 6a8.997 8.997 0 00-7 7m0 0A8.997 8.997 0 005 6a8.997 8.997 0 007 7z" />
              </svg>
            </div>
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-stone-950">Sustentabilidad</h4>
            <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed">Cera de soja 100% natural y ecológica.</p>
          </div>

          <div className="p-8 bg-[#FDFBF7] rounded-3xl border border-stone-100 hover:shadow-2xl transition-all duration-700 group">
            <div className="w-12 h-12 mb-6 text-stone-800 mx-auto group-hover:scale-110 transition-transform duration-500">
              <svg fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-stone-950">Esencias Premium</h4>
            <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed">Fragancias intensas que perduran en tus ambientes.</p>
          </div>

          <div className="p-8 bg-[#FDFBF7] rounded-3xl border border-stone-100 hover:shadow-2xl transition-all duration-700 group">
            <div className="w-12 h-12 mb-6 text-stone-800 mx-auto group-hover:scale-110 transition-transform duration-500">
              <svg fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-stone-950">Hecho a Mano</h4>
            <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed">Artesanía pura desde Colón, Entre Ríos.</p>
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS - SOFT ZOOM */}
      <main id="productos" className="bg-[#FAF9F6] py-24 md:py-32 px-6 reveal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] text-stone-950 tracking-[0.2em] uppercase italic">
              Colección
            </h3>
            <div className="w-20 h-[1px] bg-stone-300 mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-sm mb-8 bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700"></div>
                </div>
                <h4 className="text-lg md:text-xl font-[family-name:var(--font-playfair)] text-stone-950 text-center uppercase tracking-[0.15em]">
                  {product.name}
                </h4>
                <p className="text-stone-400 text-[10px] mt-4 text-center uppercase tracking-[0.3em] font-light italic">{product.category}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/productos"
              className="inline-block px-12 py-4 border border-stone-900 text-stone-900 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all duration-500 rounded-full"
            >
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </main>

      {/* RITUAL DE CUIDADO - ESTILO EDITORIAL */}
      <section id="cuidados" className="bg-white py-24 md:py-32 px-6 reveal">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <h3 className="text-5xl md:text-7xl font-[family-name:var(--font-playfair)] text-stone-950 mb-10 leading-none tracking-tighter uppercase italic">
              Ritual de <br /> Cuidado
            </h3>
            <div className="space-y-8 max-w-lg mx-auto md:mx-0">
              {[
                "Deja que la cera se derrita hasta los bordes.",
                "Corta el pabilo a 5mm antes de encender.",
                "No excedas las 4 horas de encendido.",
                "Apaga ahogando la llama, nunca soples."
              ].map((tip, i) => (
                <div key={i} className="flex gap-6 items-center group">
                  <span className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-stone-300 group-hover:text-stone-950 transition-colors">0{i + 1}</span>
                  <p className="text-stone-600 text-xs md:text-sm uppercase tracking-[0.2em] font-medium leading-snug">{tip}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full order-1 md:order-2">
            <img
              src="/2.jpeg"
              className="rounded-[2rem] shadow-2xl hover:scale-[1.01] transition-transform duration-700 grayscale-[15%] hover:grayscale-0"
              alt="Cuidado de vela artesanal"
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN INSTAGRAM - LOGO INTERACTIVO */}
      <section className="bg-[#FAF9F6] py-32 md:py-40 px-6 reveal text-center">
        <div className="max-w-xl mx-auto">
          <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-stone-500 mb-6">Nuestra Comunidad</h3>
          <p className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-stone-950 mb-16 italic uppercase tracking-[0.1em]">
            Síguenos en Instagram y sumate
          </p>

          <a href="https://www.instagram.com/velaris_velas/" target="_blank" rel="noopener noreferrer" className="group relative inline-block">
            <div className="absolute inset-0 rounded-full bg-stone-300 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
            <img
              src="/logo.jpeg"
              className="relative w-56 h-56 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-[12px] border-white group-hover:scale-105 transition-transform duration-1000"
              alt="Perfil Instagram Velaris"
            />
            <p className="mt-10 text-stone-950 text-sm md:text-base font-bold tracking-[0.4em] uppercase group-hover:opacity-70 transition-opacity">@velaris_velas</p>
          </a>
        </div>
      </section>

    </div>
  );
}