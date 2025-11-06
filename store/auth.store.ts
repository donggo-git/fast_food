import { User } from '@sentry/react-native';
import { create } from 'zustand';

type AuthState = {
    isAuthenticated: boolean,
    user: User | null,
    isLoading: boolean,
    setIsAuthenticated: (value: boolean) => void,
    setUser: (user: User | null) => void,
    setLoading: (loading: boolean) => void,
    fetchAuthenticatedUser: () => Promise<void>
}

const useStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAll: () => set({ bears: 0 }),
    updateBears: (newBears) => set({ bears: newBears })
}))