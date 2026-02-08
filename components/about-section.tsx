'use client'

export default function AboutSection() {
  const specialties = [
    {
      title: 'Domine a técnica clásica',
      description: 'Técnica sólida desde o primeiro acorde',
      icon: '🎼',
    },
    {
      title: 'Estude obras dos mestres',
      description: 'Repertório clásico com Bach, Chopin,Beethoven,liszt e Mozart',
      icon: '♪',
    },
    {
      title: 'Aprendizado sob medida',
      description: 'Aulas sob medida para seu ritmo e objetivo',
      icon: '👨‍🎓',
    },
    {
      title: 'Pronto para o palco',
      description: 'Treinamento completo para o palco e concursos',
      icon: '🎭',
    },
  ]

  return (
    <section id="sobre" className="py-20 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-stone-900 mb-4">
            <a
              href="https://en.wikipedia.org/wiki/Classical_music"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-600 transition"
            >
              Fernanda Chaves Canaud é pianista premiada e especialista em musicais clásica
            </a>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Oferece aulas particulares para todas as idades, com foco em técnica, sensibilidade e evolução real.
            aprenda com quem domina a arte e forma novos talentos a mais de 40 anos
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition text-center"
            >
              <div className="text-4xl mb-4">{specialty.icon}</div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">
                {specialty.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-stone-900 text-white rounded-2xl p-12 text-center">
          <h3 className="font-serif text-3xl font-bold mb-4">
            Trasforme sua paixão em música - com Fernanda Chaves Canaud
          </h3>
          <p className="text-stone-200 mb-8 max-w-2xl mx-auto">
            Descubra como o piano pode transformar sua expresão musical.
          </p>
          <button className="px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition font-medium text-lg">
            Comece agora
          </button>
        </div>
      </div>
    </section>
  )
}
