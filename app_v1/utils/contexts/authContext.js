import { createContext, useState, useEffect, useContext } from 'react';

// Create a context
const AuthContext = createContext();

// Create a provider for the context
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in by looking at cookies
  useEffect(() => {
    const token = localStorage.getItem('token'); 
    console.log(token)

    if (token) {
      // Extract token (you can also use JWT decoding to get user data if needed)
      const parts = token.split('.');
      const header = JSON.parse(atob(parts[0])); // Decode header
      const payload = JSON.parse(atob(parts[1])); // Decode payload// Decode JWT token
      setUser({
        fullName: payload.fullName,
        email: payload.email,
        participantId: payload.participantId,
        teamId: payload.teamId
      });
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, []);

  // Provide the context value
  return (
    <AuthContext.Provider value={{ user, isLoggedIn, setUser, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}
