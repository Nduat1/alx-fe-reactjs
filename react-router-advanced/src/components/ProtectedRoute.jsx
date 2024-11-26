import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Simulated authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the children
  return children;
};

export default ProtectedRoute;
