import { createContext, useState } from 'react';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState({});

  return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
}

export default AuthContext;
