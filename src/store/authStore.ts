import { create } from 'zustand';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

interface AuthStore {
  signIn: (data: { email: string; password: string }) => Promise<void>;
  signUp: (data: { email: string; password: string }) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>(() => ({
  signIn: async ({ email, password }) => {
    await signInWithEmailAndPassword(auth, email, password);
  },
  signUp: async ({ email, password }) => {
    await createUserWithEmailAndPassword(auth, email, password);
  },
  signInWithGoogle: async () => {
    await signInWithPopup(auth, googleProvider);
  }
}));
