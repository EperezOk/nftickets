'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../components/Header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { useAuthStore } from '@/store/auth-store'

// Mock data for featured events
const featuredEvents = [
  { id: 1, name: 'Festival de Rock en Español', date: '15/07/2023', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=500&h=350&fit=crop' },
  { id: 2, name: 'Noche de Tango Extravaganza', date: '22/08/2023', image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=500&h=350&fit=crop' },
  { id: 3, name: 'Cumbia Bajo las Estrellas', date: '10/09/2023', image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=500&h=350&fit=crop' },
]

export default function Home() {
  const router = useRouter()
  const { userType } = useAuthStore()

  useEffect(() => {
    if (userType === 'producer') {
      router.replace('/productoras')
    }
  }, [userType, router])

  if (userType === 'producer') return null

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Eventos Destacados</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle>{event.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image src={event.image} alt={event.name} width={500} height={350} className="rounded-md object-cover" />
                <p className="mt-2">Fecha: {event.date}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/events/${event.id}`}>
                  <Button>Ver Evento</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
