'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from 'next/image'

// Mock data for user's tickets
const userTickets = [
  { id: 1, eventName: 'Festival de Rock en Español', date: '15/07/2023', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=300&h=200&fit=crop' },
  { id: 2, eventName: 'Noche de Tango Extravaganza', date: '22/08/2023', image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=300&h=200&fit=crop' },
]

export default function MisEntradas() {
  const [resellPrice, setResellPrice] = useState<string>('')

  const handleResell = (ticketId: number) => {
    // Here you would implement the actual reselling logic
    console.log(`Reselling ticket ${ticketId} for ${resellPrice}`)
    // Reset the resell price
    setResellPrice('')
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Mis Entradas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userTickets.map((ticket) => (
          <Card key={ticket.id}>
            <CardHeader>
              <CardTitle>{ticket.eventName}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src={ticket.image} alt={ticket.eventName} width={300} height={200} className="rounded-md object-cover" />
              <p className="mt-2">Fecha: {ticket.date}</p>
              <p className="mt-2">ID de Entrada: #{ticket.id}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-4 w-full">Revender Entrada</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-accent">
                  <DialogHeader>
                    <DialogTitle>Revender Entrada</DialogTitle>
                    <DialogDescription>
                      Ingresa el precio al que deseas revender tu entrada.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="price" className="text-right">
                        Precio
                      </Label>
                      <Input
                        id="price"
                        type="number"
                        value={resellPrice}
                        onChange={(e) => setResellPrice(e.target.value)}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <Button onClick={() => handleResell(ticket.id)}>Confirmar Reventa</Button>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}