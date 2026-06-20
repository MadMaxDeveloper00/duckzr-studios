"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type User = {
  username: string;
  email: string;
  tag: string;
  avatar: string;
  role: string;
  usernameChangedAt?: string;
  tagChangedAt?: string;
  token: string;
  displayRole?: string;
  googleLinked?: boolean;
  discordLinked?: boolean;
  createdAt: string;
  rawPassword?: string;
  verified?: boolean;
  banner?: string;
  twoFactorEnabled?: boolean;
};

type AuthContextType = {
  user: User | null;

  token: string | null;

  setUser: (user: User | null) => void;

  setToken: (token: string | null) => void;

  logout: () => void;

  refreshUser?: () => Promise<void>;
};

const refreshUser = async () => {
  // futura chamada API
};

const AuthContext =
  createContext<AuthContextType | null>(null);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [user, setUser] =
    useState<User | null>(null);

  const [token, setToken] =
    useState<string | null>(null);

  useEffect(() => {

    const savedUser =
      localStorage.getItem("duckzr_user");

    const savedToken =
      localStorage.getItem("duckzr_token");

    if (savedUser) {
      try {
            setUser(JSON.parse(savedUser));
          } catch {
            localStorage.removeItem("duckzr_user");
          }
    }

    if (savedToken) {
      setToken(savedToken);
    }

  }, []);

  function logout() {

    localStorage.removeItem("duckzr_user");

    localStorage.removeItem("duckzr_token");

    setUser(null);

    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        setUser,
        setToken,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {

  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}