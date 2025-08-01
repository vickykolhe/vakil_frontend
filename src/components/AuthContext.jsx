import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userType, setUserType] = useState(localStorage.getItem('userType') || null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const login = (type) => {
    setUserType(type);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.clear();
    setUserType(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
