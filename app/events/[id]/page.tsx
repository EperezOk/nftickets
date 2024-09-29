'use client'

import { useState } from 'react'
import Header from '../../../components/Header'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

// Mock event data
const event = {
  id: 1,
  name: 'Festival de Rock en Español',
  date: '15/07/2023',
  description: '¡Únete a nosotros para una noche inolvidable de rock en español!',
  image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&h=400&fit=crop',
  ticketPrice: 5000,
  availableTickets: 100,
}

export default function Page({ params }: { params: { id: string } }) {
  const [ticketQuantity, setTicketQuantity] = useState(1)

  const handleBuyTicket = () => {
    // Here you would typically interact with your backend to process the ticket purchase
    console.log(`Buying ${ticketQuantity} ticket(s) for event ${params.id}`)
    // Show success message or redirect user
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{event.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image src={event.image} alt={event.name} width={600} height={400} className="rounded-lg object-cover" />
          </div>
          <div>
            <p className="text-xl mb-4">Fecha: {event.date}</p>
            <p className="mb-4">{event.description}</p>
            <p className="text-xl mb-4">Precio de la Entrada: {event.ticketPrice.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
            <p className="mb-4">Entradas Disponibles: {event.availableTickets}</p>
            <div className="flex items-center space-x-4 mb-4">
              <Button onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}>-</Button>
              <span>{ticketQuantity}</span>
              <Button onClick={() => setTicketQuantity(ticketQuantity + 1)}>+</Button>
            </div>
            <Button onClick={handleBuyTicket}>Comprar Entrada(s)</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
