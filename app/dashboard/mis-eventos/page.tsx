import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

// Mock data for user's events
const userEvents = [
  { id: 1, name: 'Concierto de Jazz', date: '20/08/2023', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=200&fit=crop', ticketsSold: 150 },
  { id: 2, name: 'Festival de Folklore', date: '05/09/2023', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300&h=200&fit=crop', ticketsSold: 200 },
]

export default function MisEventos() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Mis Eventos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userEvents.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src={event.image} alt={event.name} width={300} height={200} className="rounded-md object-cover" />
              <p className="mt-2">Fecha: {event.date}</p>
              <p className="mt-2">Entradas Vendidas: {event.ticketsSold}</p>
              <Link href={`/dashboard/mis-eventos/${event.id}`}>
                <Button className="mt-4">Gestionar Evento</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
