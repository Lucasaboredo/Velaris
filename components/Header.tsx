"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="w-full bg-[#FDFBF7]/70 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200/50">
      <div className="max-w-5xl mx-auto flex flex-col items-center py-4 px-6">
        <Link href="/">
          <h1 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] tracking-[0.4em] text-stone-900 uppercase mb-3 hover:opacity-70 transition-opacity">
            Velaris
          </h1>
        </Link>
        <nav className="flex items-center gap-x-8 md:gap-x-12">
          <Link href="/productos" className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-stone-500 hover:text-stone-900 transition-colors uppercase">
            Productos
          </Link>
          <a href={isHome ? "#cuidados" : "/#cuidados"} className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-stone-500 hover:text-stone-900 transition-colors uppercase">
            Cuidados
          </a>
        </nav>
      </div>
    </header>
  );
}