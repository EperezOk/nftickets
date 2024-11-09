import { create } from 'zustand'

type UserType = 'buyer' | 'producer' | null

interface AuthState {
  userType: UserType
  setUserType: (type: UserType) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  userType: null,
  setUserType: (type) => set({ userType: type }),
}))
