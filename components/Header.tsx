import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-background">
      <Link href="/" className="text-2xl font-bold">NFTickets</Link>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/dashboard" className="hover:underline">Dashboard</Link></li>
          <li><Link href="/productoras" className="hover:underline">Productoras</Link></li>
          <li><Link href="/reventas" className="hover:underline">Reventas</Link></li>
        </ul>
      </nav>
      <div className="flex items-center space-x-2">
        <Button variant="outline">Registrarse</Button>
        <Button>Iniciar Sesión</Button>
      </div>
    </header>
  )
}

export default Header
