'use client';

import React, { useEffect, useState, JSXElementConstructor } from 'react';
import { useRouter } from 'next/navigation';

// Simple auth context and hooks
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

// This is a placeholder for the actual auth implementation
// In a real app, you would use a proper auth library like NextAuth.js
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        // In a real app, you would fetch the user from an API
        // For now, we'll just check localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Auth error:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // In a real app, you would call an API to authenticate
      // For now, we'll just simulate a successful login
      const mockUser: User = {
        id: '1',
        name: 'Admin User',
        email,
        role: 'admin',
      };
      
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = (): void => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/');
  };

  const isAdmin = (): boolean => {
    return user?.role === 'admin';
  };

  return {
    user,
    loading,
    login,
    logout,
    isAdmin,
  };
}

// Higher-order component to protect admin routes
export function withAdminAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> {
  return function WithAdminAuthComponent(props: P): React.ReactElement | null {
    const { user, loading, isAdmin } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && (!user || !isAdmin())) {
        router.push('/');
      }
    }, [user, loading, isAdmin, router]);

    if (loading) {
      return React.createElement('div', null, 'Loading...');
    }

    if (!user || !isAdmin()) {
      return null;
    }

    return React.createElement(WrappedComponent, props);
  };
}
