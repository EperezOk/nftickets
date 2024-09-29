'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'

// Sample data for tickets on sale
const sampleTickets = [
  { id: 1, eventName: 'Festival de Rock en Español', date: '2023-07-15', price: 150, seller: 'Juan Pérez', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=300&h=200&fit=crop' },
  { id: 2, eventName: 'Noche de Tango Extravaganza', date: '2023-08-22', price: 80, seller: 'María González', image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=300&h=200&fit=crop' },
  { id: 3, eventName: 'Concierto de Jazz', date: '2023-09-10', price: 120, seller: 'Carlos Rodríguez', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=200&fit=crop' },
  { id: 4, eventName: 'Festival de Folklore', date: '2023-10-05', price: 90, seller: 'Ana Martínez', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300&h=200&fit=crop' },
]

export default function Reventas() {
  const [priceRange, setPriceRange] = useState({ min: '', max: '' })
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])

  const handleGenreChange = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) 
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    )
  }

  const filteredTickets = sampleTickets.filter(ticket => {
    const priceInRange = (priceRange.min === '' || ticket.price >= Number(priceRange.min)) &&
                         (priceRange.max === '' || ticket.price <= Number(priceRange.max))
    // In a real app, you'd have genre information for each ticket
    // Here we're just simulating it based on the event name
    const matchesGenre = selectedGenres.length === 0 || 
                         (ticket.eventName.toLowerCase().includes('rock') && selectedGenres.includes('Rock')) ||
                         (ticket.eventName.toLowerCase().includes('tango') && selectedGenres.includes('Tango')) ||
                         (ticket.eventName.toLowerCase().includes('jazz') && selectedGenres.includes('Jazz')) ||
                         (ticket.eventName.toLowerCase().includes('folklore') && selectedGenres.includes('Folklore'))
    return priceInRange && matchesGenre
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Reventas de Entradas NFT</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Filtrar por Precio</h2>
              <div className="flex items-center space-x-2">
                <Input
                  type="number"
                  placeholder="Min"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                  className="w-20"
                />
                <span>-</span>
                <Input
                  type="number"
                  placeholder="Max"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                  className="w-20"
                />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Filtrar por Género</h2>
              <div className="space-y-2">
                {['Rock', 'Tango', 'Jazz', 'Folklore'].map(genre => (
                  <div key={genre} className="flex items-center">
                    <Checkbox
                      id={genre}
                      checked={selectedGenres.includes(genre)}
                      onCheckedChange={() => handleGenreChange(genre)}
                    />
                    <Label htmlFor={genre} className="ml-2">{genre}</Label>
                  </div>
                ))}
              </div>
            </div>
          </aside>
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTickets.map((ticket) => (
                <Card key={ticket.id}>
                  <CardHeader>
                    <CardTitle>{ticket.eventName}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image src={ticket.image} alt={ticket.eventName} width={300} height={200} className="rounded-md object-cover mb-4" />
                    <p>Fecha: {ticket.date}</p>
                    <p>Precio: ${ticket.price}</p>
                    <p>Vendedor: {ticket.seller}</p>
                    <Button className="mt-4 w-full">Comprar</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
