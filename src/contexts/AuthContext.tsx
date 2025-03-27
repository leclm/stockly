import { createContext } from "react";

interface User {
  nome: string;
  sobrenome: string;
  image: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (token: string, userData: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
