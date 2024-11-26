import ProtectedRoute from "./components/ProtectedRoute";

const isAuthenticated = true; // Simulate authentication status

<Route
  path="/profile/*"
  element={
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <Profile />
    </ProtectedRoute>
  }
/>;
