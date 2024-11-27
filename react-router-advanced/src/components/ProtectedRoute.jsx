import React, { useState, createContext, useContext } from 'react';
import { Navigate } from 'react-router-dom';

// 1. Create an Authentication Context
const AuthContext = createContext();

// 2. AuthProvider: Provides authentication state and functions
export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Functions to simulate login and logout
    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// 3. Custom hook to access AuthContext
export const useAuth = () => useContext(AuthContext);

// 4. ProtectedRoute Component
function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();

    // Redirect to home ("/") if user is not authenticated
    return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
