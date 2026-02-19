'use client'

import { useState } from 'react'

export default function PianoKeys() {
  const [activeKey, setActiveKey] = useState<number | null>(null)

  // Notas musicais - C4 a E5
  const notes = [
    { name: 'Do', color: 'white' },
    { name: 'Dó Sustenido', color: 'black' }, // removeu # e substituiu por nome completo
    { name: 'Ré', color: 'white' },
    { name: 'Ré Sustenido', color: 'black' }, // removeu #
    { name: 'Mi', color: 'white' },
    { name: 'Fá', color: 'white' },
    { name: 'Fá Sustenido', color: 'black' }, // removeu #
    { name: 'Sol', color: 'white' },
    { name: 'Sol Sustenido', color: 'black' }, // removeu #
    { name: 'Lá', color: 'white' },
    { name: 'Lá Sustenido', color: 'black' }, // removeu #
    { name: 'Si', color: 'white' },
  ]

  const handleKeyClick = (index: number) => {
    setActiveKey(index)
    setTimeout(() => setActiveKey(null), 200)
    
    // Toca um som
    playNote(index)
  }

  const playNote = (index: number) => {
    // Frequências das notas (aproximadas)
    const frequencies = [262, 277, 294, 311, 330, 349, 370, 392, 415, 440, 466, 494]
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gain = audioContext.createGain()

    oscillator.connect(gain)
    gain.connect(audioContext.destination)

    oscillator.frequency.value = frequencies[index % frequencies.length]
    oscillator.type = 'sine'

    gain.gain.setValueAtTime(0.3, audioContext.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.3)
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-bold text-stone-900 mb-4 text-balance">
            Explore as Notas Musicais
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Clique nas teclas para ouvir as notas do piano e sentir a magia da música clássica
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gradient-to-b from-stone-900 to-stone-950 rounded-xl shadow-2xl p-6 border border-stone-800" style={{ width: 'fit-content' }}>
            <div className="flex gap-1 items-end h-80">
              {notes.map((note, index) => (
                <button
                  key={index}
                  onClick={() => handleKeyClick(index)}
                  className={`transition-all duration-150 rounded-b-lg focus:outline-none font-medium text-sm ${
                    note.color === 'white'
                      ? `w-20 h-56 bg-white border-2 border-stone-300 hover:bg-stone-50 ${
                          activeKey === index ? 'bg-amber-100 shadow-xl scale-95' : 'shadow-lg'
                        }`
                      : `w-12 h-36 bg-stone-800 border-2 border-stone-900 hover:bg-stone-700 -mx-6 z-10 ${
                          activeKey === index ? 'bg-amber-900 shadow-xl scale-95' : 'shadow-lg'
                        }`
                  }`}
                  title={note.name}
                >
                  <span className={note.color === 'white' ? 'text-stone-700' : 'text-stone-300'}>
                    {note.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-stone-100 rounded-lg px-8 py-4">
            <p className="text-stone-700 font-medium">
              Aprenda a tocar melodias clássicas com as aulas de Fernanda Chaves
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
