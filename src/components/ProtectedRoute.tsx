import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { User, Lock } from 'lucide-react';

const API_BASE_URL = import.meta.env.BACKEND_URL || 'http://localhost:5000/api';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'designer';
}

interface UserData {
  userId: string;
  username: string;
  role: string;
  name: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');

      if (!token || !storedUser) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      try {
        // Verify token with server
        const response = await fetch('/api/auth/verify', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          const userData = data.user;
          
          // Check if user has required role
          if (requiredRole && userData.role !== requiredRole) {
            setIsAuthenticated(false);
          } else {
            setIsAuthenticated(true);
            setUser(userData);
          }
        } else {
          // Token is invalid
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        // On network error, try to use stored user data
        try {
          const userData = JSON.parse(storedUser);
          if (requiredRole && userData.role !== requiredRole) {
            setIsAuthenticated(false);
          } else {
            setIsAuthenticated(true);
            setUser(userData);
          }
        } catch {
          setIsAuthenticated(false);
        }
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, [requiredRole]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      {/* Security Header */}
      {children}
    </div>
  );
};

export default ProtectedRoute;