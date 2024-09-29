import { redirect } from 'next/navigation'
import { getUserType } from '../lib/auth'

export default function Dashboard() {
  const userType = getUserType()
  
  if (userType === 'buyer') {
    redirect('/dashboard/mis-entradas')
  } else {
    redirect('/dashboard/mis-eventos')
  }
}
