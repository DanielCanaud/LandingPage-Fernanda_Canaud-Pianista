"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import Link from "next/link"

interface Testimonial {
  id: string
  name: string
  role: string | null
  text: string
  rating: number
  created_at: string
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const supabase = createClient()

        const { data, error: fetchError } = await supabase
          .from("testimonials")
          .select("*")
          .order("created_at", { ascending: false })

        if (fetchError) throw fetchError

        setTestimonials(data || [])
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Erro ao carregar depoimentos")
        console.error("Error fetching testimonials:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-stone-900 mb-4">O Que Dizem Nossos Alunos</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-8">
            Conheça as histórias inspiradoras de quem transformou sua vida musical com Fernanda Chaves Canaud
          </p>
          <Link
            href="/submit-testimonial"
            className="inline-block px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition font-medium"
          >
            + Compartilhar Meu Depoimento
          </Link>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-stone-600">Carregando depoimentos...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-600">
            <p>Erro ao carregar depoimentos: {error}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">👤</div>
                  <div>
                    <h3 className="font-serif font-bold text-stone-900">{testimonial.name}</h3>
                    {testimonial.role && <p className="text-stone-600 text-sm">{testimonial.role}</p>}
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? "text-amber-600" : "text-stone-300"}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-stone-700 leading-relaxed italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition font-medium"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </main>
  )
}
