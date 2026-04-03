"use client";

import { useEffect } from "react";

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

  const whatsappNumber = "5493447459469";
  const whatsappMessage = "¡Hola! Vengo de la página web y quiero hacer una consulta sobre las velas.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const products = [
    { id: 1, name: "Vainilla Esencial", image: "/1.jpeg" },
    { id: 2, name: "Lavanda Relajante", image: "/2.jpeg" },
    { id: 3, name: "Cítricos Revitalizantes", image: "/3.jpeg" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#222] font-sans selection:bg-stone-300">

      {/* HEADER: LOGO / BRAND NAME (Sticky y Compacto) */}
      <header className="w-full bg-[#FDFBF7]/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-stone-100">
        <div className="max-w-4xl mx-auto flex flex-col items-center py-4 px-6">
          <h1 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] tracking-[0.4em] text-stone-900 uppercase mb-4 text-center">
            Velaris
          </h1>
          <nav className="flex items-center gap-x-8 md:gap-x-12">
            <a href="#productos" className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-stone-900 hover:text-stone-600 transition-colors uppercase border-b border-stone-900 pb-0.5">Productos</a>
            <a href="#cuidados" className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-colors uppercase">Cuidados</a>
          </nav>
        </div>
      </header>

      {/* HERO: REVERTIDO A ANCHO COMPLETO CON LOGO */}
      <section className="relative w-full h-[65vh] md:h-[85vh] flex items-center justify-center overflow-hidden reveal">
        <img
          src="/1.jpeg"
          alt="Velaris Hero Feature"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* LOGO SUPERPUESTO EN EL MEDIO (Más Grande y sin Sombra) */}
        <div className="relative z-10 flex flex-col items-center animate-fade-in">
          <img 
            src="/logo.jpeg" 
            alt="Logo Velaris Central" 
            className="h-48 md:h-80 w-auto object-contain rounded-full" 
          />
        </div>
      </section>

      {/* SECCIÓN VALORES: "LLENANDO LA PÁGINA" */}
      <section className="bg-white py-16 px-6 reveal">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center p-6 border border-stone-100 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 mb-4 text-stone-400">🌿</div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-stone-800 mb-2">Sustentabilidad</h4>
            <p className="text-stone-500 text-xs font-light leading-relaxed">Cera de soja 100% natural, amigable con el medio ambiente.</p>
          </div>
          <div className="flex flex-col items-center p-6 border border-stone-100 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 mb-4 text-stone-400">✨</div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-stone-800 mb-2">Esencias Premium</h4>
            <p className="text-stone-500 text-xs font-light leading-relaxed">Fragancias intensas que perduran y transforman tus espacios.</p>
          </div>
          <div className="flex flex-col items-center p-6 border border-stone-100 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 mb-4 text-stone-400">🤲</div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-stone-800 mb-2">Hecho a Mano</h4>
            <p className="text-stone-500 text-xs font-light leading-relaxed">Cada vela es volcada a mano en Colón, Entre Ríos, con dedicación.</p>
          </div>
        </div>
      </section>

      {/* PRODUCTOS: FONDO DIFERENTE PARA SEPARAR */}
      <main id="productos" className="bg-[#FAF9F6] py-24 px-6 reveal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-4xl font-[family-name:var(--font-playfair)] text-stone-800 tracking-widest uppercase">
              Catálogo Velaris
            </h3>
            <div className="w-12 h-[1px] bg-stone-300 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { id: 1, name: "Vainilla Esencial", image: "/1.jpeg", price: "$4.500" },
              { id: 2, name: "Lavanda Relajante", image: "/2.jpeg", price: "$4.500" },
              { id: 3, name: "Cítricos Revitalizantes", image: "/3.jpeg", price: "$4.800" },
            ].map((product) => (
              <div key={product.id} className="group flex flex-col items-center">
                <div className="w-full aspect-[4/5] overflow-hidden bg-stone-200 mb-6 rounded-sm shadow-md group-hover:shadow-2xl transition-all duration-700">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                  />
                </div>
                <h4 className="text-lg font-[family-name:var(--font-playfair)] text-stone-800 text-center uppercase tracking-widest">
                  {product.name}
                </h4>
                <p className="text-stone-400 text-xs mt-2 uppercase tracking-tighter italic">Colección Artesanal</p>
                <p className="text-stone-900 font-medium text-sm mt-2">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* SECCIÓN CUIDADOS: INTERACCIÓN TIPO REVISTA */}
      <section id="cuidados" className="bg-white py-24 px-6 md:px-12 reveal">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h3 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] text-stone-900 mb-8 leading-none tracking-tighter uppercase italic">
              Ritual de <br /> Cuidado
            </h3>
            <p className="text-stone-500 font-light leading-relaxed mb-10 text-sm md:text-base">
              Nuestras velas de soja son seres vivos que requieren atención. Seguir estos pasos asegura que tu vela dure más y brinde su mejor aroma.
            </p>
            <div className="space-y-6">
              {[
                "Primera quemada hasta que se derrita toda la superficie.",
                "Mantener el pabilo cortado a 5mm siempre.",
                "No quemar por más de 3 horas seguidas.",
                "Apagar ahogando la llama sin soplar."
              ].map((tip, i) => (
                <div key={i} className="flex gap-4 items-center group">
                   <div className="w-6 h-6 rounded-full border border-stone-200 flex items-center justify-center text-[10px] text-stone-400 group-hover:bg-stone-50">{i+1}</div>
                   <p className="text-stone-600 text-xs uppercase tracking-widest">{tip}</p>
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
      <section className="bg-[#FDFBF7] py-24 px-6 reveal">
        <div className="max-w-4xl mx-auto text-center font-[family-name:var(--font-playfair)]">
           <h3 className="text-4xl md:text-5xl text-stone-900 mb-4 italic uppercase">Vivilo en Instagram</h3>
           <p className="text-stone-500 text-sm md:text-base mb-12 tracking-widest uppercase">@velaris_velas</p>
           
           <div className="relative w-full aspect-[9/16] max-w-[320px] md:max-w-[400px] mx-auto rounded-3xl overflow-hidden shadow-2xl border border-stone-100 bg-white">
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
             className="inline-block mt-12 px-10 py-4 border border-stone-900 text-stone-900 text-xs md:text-sm font-semibold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all duration-500 rounded-full"
           >
             Ver Reel Original
           </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#FDFBF7] border-t border-stone-200 py-8 px-6 flex flex-col md:flex-row justify-between items-center text-stone-500 text-sm">
        <p className="mb-2 md:mb-0">Hecho con amor en Colón, Entre Ríos</p>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#1ebe57] transition-all hover:-translate-y-1 z-50 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}