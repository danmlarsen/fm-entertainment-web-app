"use client";

import { auth } from "@/firebase/client";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { setToken, removeToken } from "./actions";

type AuthContextType = {
  currentUser: User | null;
  logout: () => Promise<void>;
  loginWithGoogle: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user ?? null);

      if (user) {
        const tokenResult = await user.getIdTokenResult();
        const token = tokenResult.token;
        const refreshToken = user.refreshToken;

        if (token && refreshToken) {
          await setToken({
            token,
            refreshToken,
          });
        }
      } else {
        await removeToken();
      }
    });

    return () => unsubscribe();
  }, []);

  async function logout() {
    await auth.signOut();
  }

  async function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        logout,
        loginWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
