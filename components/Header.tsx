'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuthStore } from '@/store/auth-store'
import { useRouter } from 'next/navigation'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { userType, setUserType } = useAuthStore()

  const navItems = [
    ...(userType ? [{ href: '/dashboard', label: 'Dashboard' }] : []),
    ...(userType === null ? [{ href: '/productoras', label: 'Productoras' }] : []),
    ...(userType !== 'producer' ? [{ href: '/reventas', label: 'Reventas' }] : []),
  ]

  const loginAs = (userType: 'buyer' | 'producer') => {
    setUserType(userType)
    if (userType === "producer") router.push('/productoras')
    else router.push('/')
  }

  const handleLogout = () => {
    setUserType(null)
    router.push('/')
    setIsOpen(false)
  }

  const NavLinks = ({ mobile = false }) => (
    <>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link 
            href={item.href} 
            className={`block py-2 ${
              mobile 
                ? 'text-accent-foreground hover:bg-background hover:text-foreground rounded-md px-2 transition-colors'
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

  const LoginButton = ({ mobile = false }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={mobile ? "w-full justify-start" : ""}>
          Iniciar Sesión
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={() => loginAs('buyer')}>
          Acceder como cliente
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => loginAs('producer')}>
          Acceder como productora
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  const AuthButtons = ({ mobile = false }) => (
    <>
      {userType ? (
        <Button 
          variant={mobile ? "outline" : "secondary"}
          onClick={handleLogout}
          className={mobile ? "w-full justify-start text-accent-foreground" : ""}
        >
          Cerrar Sesión
        </Button>
      ) : (
        <>
          <Button 
            variant={mobile ? "outline" : "secondary"} 
            onClick={() => setIsOpen(false)}
            className={mobile ? "w-full justify-start text-accent-foreground" : ""}
          >
            Registrarse
          </Button>
          <LoginButton mobile={mobile} />
        </>
      )}
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
