import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance'; // UPDATED
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          logout();
        } else {
          setUser({ id: decoded.id });
          // Set the default Authorization header for our shared instance
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`; // UPDATED
        }
      } catch (error) {
        console.error("Invalid token:", error);
        logout();
      }
    }
    setLoading(false);
  }, [token]);

  const login = async (email, password) => {
    const response = await axiosInstance.post('/api/users/login', { email, password }); // UPDATED
    if (response.data) {
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);
      setUser({ id: response.data._id, name: response.data.name });
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`; // UPDATED
    }
    return response.data;
  };

  const register = async (name, email, password) => {
    const response = await axiosInstance.post('/api/users/register', { name, email, password }); // UPDATED
    if (response.data) {
        localStorage.setItem('token', response.data.token);
        setToken(response.data.token);
        setUser({ id: response.data._id, name: response.data.name });
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`; // UPDATED
    }
    return response.data;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    delete axiosInstance.defaults.headers.common['Authorization']; // UPDATED
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};