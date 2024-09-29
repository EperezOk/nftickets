'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DashboardNav = ({ userType }: { userType: 'buyer' | 'producer' }) => {
  const pathname = usePathname()

  return (
    <nav className="space-y-2">
      {userType === 'buyer' && (
        <Link 
          href="/dashboard/mis-entradas" 
          className={`block p-2 rounded-lg ${
            pathname === '/dashboard/mis-entradas' 
              ? 'bg-accent text-accent-foreground' 
              : 'hover:bg-accent/50'
          }`}
        >
          Mis Entradas
        </Link>
      )}
      {userType === 'producer' && (
        <>
          <Link 
            href="/dashboard/mis-eventos" 
            className={`block p-2 rounded-lg ${
              pathname === '/dashboard/mis-eventos' 
                ? 'bg-accent text-accent-foreground' 
                : 'hover:bg-accent/50'
            }`}
          >
            Mis Eventos
          </Link>
          <Link 
            href="/dashboard/ganancias" 
            className={`block p-2 rounded-lg ${
              pathname === '/dashboard/ganancias' 
                ? 'bg-accent text-accent-foreground' 
                : 'hover:bg-accent/50'
            }`}
          >
            Ganancias
          </Link>
        </>
      )}
    </nav>
  )
}

export default DashboardNav
