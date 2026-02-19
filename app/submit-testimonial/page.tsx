"use client"

import type React from "react"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import Link from "next/link"

export default function SubmitTestimonialPage() {
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [text, setText] = useState("")
  const [rating, setRating] = useState(5)
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const supabase = createClient()

      const { error: insertError } = await supabase.from("testimonials").insert({
        name,
        role,
        text,
        rating,
      })

      if (insertError) throw insertError

      setSuccess(true)
      setName("")
      setRole("")
      setText("")
      setRating(5)

      setTimeout(() => {
        window.location.href = "/testimonials"
      }, 2000)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erro ao enviar depoimento")
      console.error("Error submitting testimonial:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-stone-50 py-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-stone-900 mb-4">Compartilhe Seu Depoimento</h1>
          <p className="text-lg text-stone-600">Sua experiência com Fernanda Chaves Canaud é importante para nós</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {success ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✓</div>
              <h2 className="text-2xl font-bold text-stone-900 mb-2">Obrigado pelo seu depoimento!</h2>
              <p className="text-stone-600 mb-6">Seu feedback foi enviado com sucesso e será exibido em breve.</p>
              <Link
                href="/testimonials"
                className="inline-block px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
              >
                Ver Depoimentos
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-stone-900 mb-2">Nome *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-900 mb-2">Sua Experiência / Função</label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Ex: Aluno há 3 anos, Pai de aluno"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-900 mb-2">Avaliação *</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`text-3xl transition ${star <= rating ? "text-amber-600" : "text-stone-300"}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-900 mb-2">Seu Depoimento *</label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Compartilhe sua experiência com as aulas de Fernanda..."
                />
              </div>

              {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">{error}</div>}

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition disabled:opacity-50 font-medium"
                >
                  {isLoading ? "Enviando..." : "Enviar Depoimento"}
                </button>
                <Link
                  href="/testimonials"
                  className="flex-1 px-6 py-3 border-2 border-stone-900 text-stone-900 rounded-lg hover:bg-stone-100 transition font-medium text-center"
                >
                  Voltar
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
