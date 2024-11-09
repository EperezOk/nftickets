'use client'

import { Suspense } from 'react'
import { useAuthStore } from '@/store/auth-store'
import Header from '../../components/Header'
import DashboardNav from './DashboardNav'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userType } = useAuthStore()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64">
            <Suspense fallback={<div>Loading...</div>}>
              <DashboardNav userType={userType!!} />
            </Suspense>
          </aside>
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
