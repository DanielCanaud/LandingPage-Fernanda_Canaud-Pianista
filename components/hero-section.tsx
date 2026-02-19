'use client'

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-stone-900 text-balance">
              Fernanda Chaves Canaud: Piano com alma e excelência 
            </h1>
            <p className="text-xl text-stone-700 leading-relaxed">
              Pianista renomeada com mais de 40 anos de Experiência. Aulas personalizadas para todos os niveis
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5511987654321?text=Olá%20Fernanda!%20Gostaria%20de%20agendar%20uma%20aula%20gratuita."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition font-medium text-lg text-center"
            >
              Agende sua primeira aula gratuita
            </a>
            <a
              href="/testimonials"
              className="px-8 py-4 border-2 border-stone-900 text-stone-900 rounded-lg hover:bg-stone-50 transition font-medium text-lg text-center"
            >
              Depoimentos de Alunos
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 text-center">
            <div>
              <div className="text-3xl font-bold text-stone-900">40+</div>
              <p className="text-stone-600">Anos de Experiência</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-stone-900">2000+</div>
              <p className="text-stone-600">Alunos Formados</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-stone-900">4.9★</div>
              <p className="text-stone-600">Avaliação Média</p>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative h-96 sm:h-full min-h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-50 rounded-3xl opacity-50"></div>
          <img
            src="/images/design-mode/image.png"
            alt="Fernanda Chaves ao piano"
            className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10"
          />
        </div>
      </div>
    </section>
  )
}
