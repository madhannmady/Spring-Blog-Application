import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { apiService } from "../services/apiService";

interface AuthUser {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: AuthUser | null;
  login: (token: string) => Promise<void>;
  logout: () => void;
  token: string | null;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  // Initialize auth from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
      // Optionally fetch user profile here
    }
  }, []);

  // Login using token received from backend
  const login = useCallback(async (token: string) => {
    try {
      localStorage.setItem("token", token);
      setToken(token);
      setIsAuthenticated(true);

      // Optionally: fetch and set user details
      // const userProfile = await apiService.getUserProfile();
      // setUser(userProfile);
    } catch (error) {
      throw error;
    }
  }, []);

  // Logout user
  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    setToken(null);
    apiService.logout(); // Clears token from axios
  }, []);

  // Update API headers when token changes
  useEffect(() => {
    const axiosInstance = apiService["api"];
    if (token) {
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    } else {
      delete axiosInstance.defaults.headers.common["Authorization"];
    }
  }, [token]);

  const value: AuthContextType = {
    isAuthenticated,
    user,
    login,
    logout,
    token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
