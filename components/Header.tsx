'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/productoras', label: 'Productoras' },
    { href: '/reventas', label: 'Reventas' },
  ]

  const NavLinks = ({ mobile = false }) => (
    <>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link 
            href={item.href} 
            className={`block py-2 ${
              mobile 
                ? 'text-foreground hover:bg-background hover:text-accent-foreground rounded-md px-2 transition-colors'
                : 'hover:underline'
            }`}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </>
  )

  const AuthButtons = ({ mobile = false }) => (
    <>
      <Button 
        variant={mobile ? "outline" : "secondary"} 
        onClick={() => setIsOpen(false)}
        className={mobile ? "w-full justify-start" : ""}
      >
        Registrarse
      </Button>
      <Button 
        onClick={() => setIsOpen(false)}
        className={mobile ? "w-full justify-start" : ""}
      >
        Iniciar Sesión
      </Button>
    </>
  )

  return (
    <header className="flex items-center justify-between p-4 bg-background">
      <Link href="/" className="text-2xl font-bold">NFTickets</Link>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          <NavLinks />
        </ul>
      </nav>
      
      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="right" 
          className="w-[300px] sm:w-[400px] bg-accent border-l border-border"
        >
          <nav className="flex flex-col space-y-4 mt-8">
            <ul className="space-y-2">
              <NavLinks mobile />
            </ul>
            <div className="flex flex-col space-y-2 mt-4">
              <AuthButtons mobile />
            </div>
          </nav>
        </SheetContent>
      </Sheet>

      <div className="hidden md:flex items-center space-x-2">
        <AuthButtons />
      </div>
    </header>
  )
}

export default Header
