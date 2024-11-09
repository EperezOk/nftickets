'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from "@/hooks/use-toast"
import Header from '../../components/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function Page() {
  const router = useRouter()
  const { toast } = useToast()
  const [eventName, setEventName] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [eventDescription, setEventDescription] = useState('')
  const [ticketPrice, setTicketPrice] = useState('')
  const [ticketQuantity, setTicketQuantity] = useState('')
  const [mediaLink, setMediaLink] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log('Event created:', { eventName, eventDate, eventDescription, ticketPrice, ticketQuantity, mediaLink })
    
    toast({
      title: "¡Evento creado!",
      description: "El evento se ha creado exitosamente.",
      variant: "success",
    })
    
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Crear Nuevo Evento</h1>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <div>
            <Label htmlFor="eventName">Nombre del Evento</Label>
            <Input
              id="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="eventDate">Fecha del Evento</Label>
            <Input
              id="eventDate"
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="eventDescription">Descripción del Evento</Label>
            <Textarea
              id="eventDescription"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="ticketPrice">Precio de la Entrada (ARS)</Label>
            <Input
              id="ticketPrice"
              type="number"
              step="0.01"
              value={ticketPrice}
              onChange={(e) => setTicketPrice(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="ticketQuantity">Número de Entradas</Label>
            <Input
              id="ticketQuantity"
              type="number"
              value={ticketQuantity}
              onChange={(e) => setTicketQuantity(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="mediaLink">Enlace de Media (para imagen de la entrada)</Label>
            <Input
              id="mediaLink"
              type="url"
              value={mediaLink}
              onChange={(e) => setMediaLink(e.target.value)}
            />
          </div>
          <Button type="submit">Crear Evento</Button>
        </form>
      </main>
    </div>
  )
}
