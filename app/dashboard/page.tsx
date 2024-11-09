'use client'

import { redirect } from 'next/navigation'
import { useAuthStore } from '@/store/auth-store'

export default function Dashboard() {
  const { userType } = useAuthStore()
  
  if (userType === 'buyer') {
    redirect('/dashboard/mis-entradas')
  } else {
    // producer
    redirect('/dashboard/mis-eventos')
  }
}
