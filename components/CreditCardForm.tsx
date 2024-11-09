'use client'

import { useRouter } from 'next/navigation'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useToast } from "@/hooks/use-toast"

interface CreditCardFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  itemName: string
  amount: number
}

export default function CreditCardForm({ open, onOpenChange, itemName, amount }: CreditCardFormProps) {
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically process the payment
    toast({
      title: "¡Compra exitosa!",
      description: `Has comprado ${itemName} por $${amount}`,
      variant: "success",
    })
    onOpenChange(false)
    router.push('/dashboard')
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-accent">
        <DialogHeader>
          <DialogTitle className="text-accent-foreground">Datos de pago</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="text-accent-foreground" htmlFor="cardNumber">Número de tarjeta</Label>
            <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-accent-foreground" htmlFor="expiry">Fecha de vencimiento</Label>
              <Input id="expiry" placeholder="MM/YY" />
            </div>
            <div>
              <Label className="text-accent-foreground" htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="123" />
            </div>
          </div>
          <div>
            <Label className="text-accent-foreground" htmlFor="name">Nombre en la tarjeta</Label>
            <Input id="name" placeholder="Juan Pérez" />
          </div>
          <Button type="submit" className="w-full">Comprar</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
