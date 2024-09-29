import Header from '../../components/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function Productoras() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Bienvenido a NFTickets para Productoras</h1>
        
        <section className="mb-12">
          <p className="text-lg mb-6">
            NFTickets ofrece una plataforma innovadora para que las productoras de eventos creen y vendan entradas NFT únicas. Únete a la revolución de los eventos digitales.
          </p>
          <Link href="/create-event">
            <Button size="lg" className="mb-4">Crear Evento</Button>
          </Link>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contáctanos</h2>
          <form className="space-y-4 max-w-md">
            <div>
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" placeholder="Tu nombre" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="tu@email.com" />
            </div>
            <div>
              <Label htmlFor="message">Mensaje</Label>
              <Textarea id="message" placeholder="¿Cómo podemos ayudarte?" />
            </div>
            <Button type="submit">Enviar</Button>
          </form>
        </section>
      </main>
    </div>
  )
}
