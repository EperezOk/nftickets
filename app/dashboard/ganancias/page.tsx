'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// Mock data for earnings
const earningsData = [
  { name: 'Ene', ventas: 4000, reventas: 2400 },
  { name: 'Feb', ventas: 3000, reventas: 1398 },
  { name: 'Mar', ventas: 2000, reventas: 9800 },
  { name: 'Abr', ventas: 2780, reventas: 3908 },
  { name: 'May', ventas: 1890, reventas: 4800 },
  { name: 'Jun', ventas: 2390, reventas: 3800 },
]

const events = [
  { id: 1, name: 'Festival de Rock en Español' },
  { id: 2, name: 'Noche de Tango Extravaganza' },
  { id: 3, name: 'Concierto de Jazz' },
]

export default function Ganancias() {
  const [selectedEvent, setSelectedEvent] = useState<string>('all')
  const [earningsType, setEarningsType] = useState<string>('all')

  const filteredData = earningsData.map(item => ({
    name: item.name,
    ventas: earningsType === 'reventas' ? 0 : item.ventas,
    reventas: earningsType === 'ventas' ? 0 : item.reventas,
  }))

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Ganancias</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="event-select">Evento</Label>
            <Select value={selectedEvent} onValueChange={setSelectedEvent}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Seleccionar evento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los eventos</SelectItem>
                {events.map((event) => (
                  <SelectItem key={event.id} value={event.id.toString()}>{event.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="earnings-type">Tipo de Ganancias</Label>
            <Select value={earningsType} onValueChange={setEarningsType}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Seleccionar tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las ganancias</SelectItem>
                <SelectItem value="ventas">Ventas</SelectItem>
                <SelectItem value="reventas">Reventas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Gráfico de Ganancias</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="ventas" fill="#8884d8" />
              <Bar dataKey="reventas" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
