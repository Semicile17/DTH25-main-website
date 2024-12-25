import { createContext, useState, useEffect, useContext } from 'react';

// Create a context
const AuthContext = createContext();

// Create a provider for the context
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in by looking at cookies
  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));

    if (token) {
      // Extract token (you can also use JWT decoding to get user data if needed)
      const decodedToken = JSON.parse(atob(token.split('=')[1].split('.')[1])); // Decode JWT token
      setUser({
        fullName: decodedToken.fullName,
        email: decodedToken.email,
        participantId: decodedToken.participantId,
        teamId: decodedToken.teamId
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
