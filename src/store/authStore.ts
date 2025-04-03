import { create } from 'zustand';
import { User } from '../types';

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (credentials: { email: string; password: string }) => Promise<void>;
  signUp: (userData: { email: string; password: string; name: string }) => Promise<void>;
  signOut: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  signIn: async (credentials) => {
    try {
      // Here you would integrate with your authentication service
      // For now, we'll simulate a successful login
      const mockUser: User = {
        id: '1',
        email: credentials.email,
        name: 'Test User',
        role: 'admin',
        createdAt: new Date().toISOString(),
      };
      set({ user: mockUser, isAuthenticated: true });
    } catch (error) {
      console.error('Sign in failed:', error);
      throw error;
    }
  },
  signUp: async (userData) => {
    try {
      // Here you would integrate with your authentication service
      // For now, we'll simulate a successful registration
      const mockUser: User = {
        id: '1',
        email: userData.email,
        name: userData.name,
        role: 'customer',
        createdAt: new Date().toISOString(),
      };
      set({ user: mockUser, isAuthenticated: true });
    } catch (error) {
      console.error('Sign up failed:', error);
      throw error;
    }
  },
  signOut: () => {
    set({ user: null, isAuthenticated: false });
  },
}));