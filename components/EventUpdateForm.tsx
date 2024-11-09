'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useToast } from "@/hooks/use-toast"

interface EventUpdateFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  event: { id: number; name: string; date: string; } | null
}

export default function EventUpdateForm({ open, onOpenChange, event }: EventUpdateFormProps) {
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically update the event in the backend
    toast({
      title: "¡Evento actualizado!",
      description: "Los cambios han sido guardados exitosamente",
      variant: "success",
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-accent">
        <DialogHeader>
          <DialogTitle className="text-accent-foreground">Actualizar Evento</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="text-accent-foreground" htmlFor="name">Nombre del evento</Label>
            <Input id="name" defaultValue={event?.name} />
          </div>
          <div>
            <Label className="text-accent-foreground" htmlFor="date">Fecha</Label>
            <Input id="date" defaultValue={event?.date} />
          </div>
          <div>
            <Label className="text-accent-foreground" htmlFor="description">Descripción</Label>
            <Input id="description" />
          </div>
          <Button type="submit" className="w-full">Actualizar Evento</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
