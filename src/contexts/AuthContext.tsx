import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '@/firebase';
import { User as FirebaseUser, onAuthStateChanged } from 'firebase/auth';

interface Props {
  children: React.ReactNode;
}

interface AuthState {
  user: FirebaseUser | null;
  isLoggedIn: boolean;
  isLanding: boolean;
}

export const AuthContext = createContext<AuthState>({
  isLanding: true,
  isLoggedIn: false,
  user: null,
});

export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }: Props) {
  const [isLanding, setIsLanding] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoggedIn(Boolean(user));
      setIsLanding(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, isLanding }}>
      {children}
    </AuthContext.Provider>
  );
}
