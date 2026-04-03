import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-stone-300 py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">

        {/* Columna 1: Marca */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] tracking-[0.3em] text-white uppercase mb-4">
            Velaris
          </h2>
          <p className="text-xs md:text-sm font-light leading-relaxed mb-6 max-w-xs text-stone-400">
            Velas de cera de soja volcadas a mano. Creamos luz y calidez para transformar tus espacios en refugios de calma.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white mb-5">
            Explorar
          </h3>
          <nav className="flex flex-col space-y-4 text-xs md:text-sm font-light text-stone-400">
            <Link href="/" className="hover:text-white transition-colors duration-300">Inicio</Link>
            <Link href="/productos" className="hover:text-white transition-colors duration-300">Catálogo</Link>
            <a href="/#cuidados" className="hover:text-white transition-colors duration-300">Ritual de Cuidado</a>
          </nav>
        </div>

        {/* Columna 3: Contacto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white mb-5">
            Conectá
          </h3>
          <div className="flex flex-col space-y-4 text-xs md:text-sm font-light text-stone-400">
            <p>Colón, Entre Ríos</p>
            <a
              href="https://www.instagram.com/p/DWoRwcijpum/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              @velaris_velas
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto border-t border-stone-800 mt-12 md:mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-stone-500 tracking-wider">
        <p>&copy; {new Date().getFullYear()} Velaris. Todos los derechos reservados.</p>
        <p className="mt-4 md:mt-0 uppercase font-semibold">Hecho a mano</p>
      </div>
    </footer>
  );
}