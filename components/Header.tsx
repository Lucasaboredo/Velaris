"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="w-full bg-[#FDFBF7]/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-stone-100">
      <div className="max-w-4xl mx-auto flex flex-col items-center py-3 md:py-4 px-4 md:px-6">
        <Link href="/">
          <h1 className="text-xl md:text-3xl font-[family-name:var(--font-playfair)] tracking-[0.4em] text-stone-900 uppercase mb-3 md:mb-4 text-center cursor-pointer hover:opacity-80 transition-opacity">
            Velaris
          </h1>
        </Link>
        <nav className="flex items-center gap-x-6 md:gap-x-12">
          <Link 
            href="/productos" 
            className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-colors uppercase"
          >
            Productos
          </Link>
          
          <a 
            href={isHome ? "#cuidados" : "/#cuidados"}
            className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-colors uppercase"
          >
            Cuidados
          </a>
          
        </nav>
      </div>
    </header>
  );
}
