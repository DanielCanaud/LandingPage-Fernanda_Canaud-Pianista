'use client'

import { useEffect, useRef, useState } from 'react'

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.08
      audio.loop = true
      
      const handleCanPlay = () => {
        setIsLoading(false)
        const playPromise = audio.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch((err) => {
              console.log("[v0] Autoplay bloqueado pelo navegador")
              setIsPlaying(false)
            })
        }
      }

      const handleError = (e: Event) => {
        console.log("[v0] Erro ao carregar áudio:", e)
        setIsLoading(false)
      }

      audio.addEventListener('canplay', handleCanPlay)
      audio.addEventListener('error', handleError)

      return () => {
        audio.removeEventListener('canplay', handleCanPlay)
        audio.removeEventListener('error', handleError)
      }
    }
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch((err) => console.log("[v0] Erro ao tocar:", err))
        }
        setIsPlaying(true)
      }
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Beethoven%20-%20Sonata%20ao%20Luar%20%28Moonlight%20Sonata%29%20%5Bv2jir8opKlc%5D-zCv8z5Q0wcFj7fd59XO9MQWUbfMJ5M.mp3"
        loop
        preload="auto"
        crossOrigin="anonymous"
      />

      <button
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-stone-900 text-white shadow-lg hover:bg-stone-800 transition flex items-center justify-center"
        title={isPlaying ? 'Desativar música' : 'Ativar música'}
        disabled={isLoading}
      >
        {isLoading ? (
          <svg className="w-6 h-6 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
            <path stroke="currentColor" strokeWidth="2" d="M12 2a10 10 0 0 1 10 10" />
          </svg>
        ) : isPlaying ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </>
  )
}
