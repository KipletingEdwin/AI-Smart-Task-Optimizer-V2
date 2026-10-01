
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { login as apiLogin, signup as apiSignup } from '../api/authApi';
import { registerUnauthorizedHandler } from '../api/axiosInstance';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const clearSession = useCallback(() => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    setUser(null);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('authUser');
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);

    // Any 401 anywhere in the app funnels through here — same code
    // path as an intentional logout, so there's only one way `user`
    // ever becomes null.
    registerUnauthorizedHandler(clearSession);
  }, [clearSession]);

  const login = async (email, password) => {
    const data = await apiLogin(email, password);
    localStorage.setItem('authToken', data.token);
    localStorage.setItem('authUser', JSON.stringify(data.user));
    setUser(data.user);
    return data;
  };

  const signup = async (email, password, passwordConfirmation) => {
    const data = await apiSignup(email, password, passwordConfirmation);
    localStorage.setItem('authToken', data.token);
    localStorage.setItem('authUser', JSON.stringify(data.user));
    setUser(data.user);
    return data;
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout: clearSession }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}