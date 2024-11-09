'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useToast } from "@/hooks/use-toast"

export default function Productoras() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', { name, email, message })
    
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto",
      variant: "success",
    })

    // Reset form
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 text-center">Bienvenido a NFTickets para Productoras</h1>
        
        <section className="mb-12 text-center max-w-2xl">
          <p className="text-lg mb-6">
            NFTickets ofrece una plataforma innovadora para que las productoras de eventos creen y vendan entradas NFT únicas. Únete a la revolución de los eventos digitales.
          </p>
          <Link href="/create-event">
            <Button size="lg" className="mb-4">Crear Evento</Button>
          </Link>
        </section>

        <section className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Contáctanos</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name">Nombre</Label>
              <Input 
                id="name" 
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="message">Mensaje</Label>
              <Textarea 
                id="message" 
                placeholder="¿Cómo podemos ayudarte?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="text-center">
              <Button type="submit">Enviar</Button>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}
