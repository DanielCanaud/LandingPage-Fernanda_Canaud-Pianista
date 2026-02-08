'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-stone-900 rounded-sm flex items-center justify-center">
              <span className="text-white font-serif text-lg">♪</span>
            </div>
            <span className="font-serif text-xl font-bold text-stone-900 hidden sm:block">
              Fernanda Chaves
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="https://pt.wikipedia.org/wiki/Fernanda_Chaves_Canaud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-700 hover:text-stone-900 transition"
            >
              Sobre
            </a>
            
            <Link href="#sobre" className="text-stone-700 hover:text-stone-900 transition">
              Aulas
            </Link>
            
            <a
              href="https://wa.me/5511987654321?text=Olá%20Fernanda!%20Gostaria%20de%20agendar%20uma%20aula."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-stone-900 text-white rounded-md hover:bg-stone-800 transition font-medium"
            >
              Agendar Aula
            </a>
          </nav>

          {/* Mobile Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a
              href="https://pt.wikipedia.org/wiki/Fernanda_Chaves_Canaud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-700 hover:text-stone-900"
            >
              Sobre
            </a>
            
            <Link href="#sobre" className="text-stone-700 hover:text-stone-900">
              Aulas
            </Link>
            
            <a
              href="https://wa.me/5511987654321?text=Olá%20Fernanda!%20Gostaria%20de%20agendar%20uma%20aula."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-stone-900 text-white rounded-md hover:bg-stone-800 transition"
            >
              Agendar Aula
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
