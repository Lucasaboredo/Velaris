"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-[#FDFBF7]/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200/50">
      <div className="max-w-5xl mx-auto flex flex-col items-center py-4 px-6">
        <Link href="/">
          <h1 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] tracking-[0.4em] text-stone-900 uppercase mb-3 cursor-pointer">
            Velaris
          </h1>
        </Link>
        <nav className="flex items-center gap-x-8">
          <Link
            href="/productos"
            // Forzamos que sea un enlace limpio
            className={`text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-colors pb-1 ${pathname === "/productos"
                ? "text-stone-900 border-b border-stone-900"
                : "text-stone-400 hover:text-stone-900"
              }`}
          >
            Productos
          </Link>

          <Link
            href="/#cuidados"
            className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-colors uppercase pb-1"
          >
            Cuidados
          </Link>
        </nav>
      </div>
    </header>
  );
}