'use client'

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-serif">♪</span>
              </div>
              <h3 className="font-serif text-xl font-bold">Fernanda Chaves Canaud</h3>
            </div>
            <p className="text-stone-400">
              Aulas de piano com Fernanda Chaves Canaud - Técnica, sensibilidade e formação musical.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-stone-400">
              <li><a href="https://en.wikipedia.org/wiki/Classical_music" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Conheça fernanda</a></li>
              <li><a href="https://www.youtube.com/@FernandaCanaud" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">YouTube</a></li>
              <li><a href="/testimonials" className="hover:text-white transition">Depoimentos</a></li>
              <li><a href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Fale com fernanda</a></li>
            </ul>
          </div>

          {/* Depoimento */}
          <div>
            <h4 className="font-serif font-bold mb-4">Depoimento</h4>
            <div className="space-y-3">
              <p className="text-stone-400 mb-4">Veja o que nossos alunos falam sobre as aulas com Fernanda Chaves:</p>
              <a 
                href="/testimonials" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition font-semibold"
              >
                Ver Depoimentos
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-800 pt-8">
          <p className="text-center text-stone-500 text-sm">
            © 2025 Fernanda Chaves - Aulas de Piano. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
