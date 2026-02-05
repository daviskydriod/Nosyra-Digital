// src/components/admin/Login.tsx (IMPROVED VERSION)

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Dashboard'; // your auth context
import { api } from '../../lib/api'; // make sure path is correct

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setAuth, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Redirect if already authenticated
  React.useEffect(() => {
    if (isAuthenticated) {
      console.log('User already authenticated, redirecting to admin...');
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Trim whitespace from inputs
    const username = formData.username.trim();
    const password = formData.password;

    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    console.log('Login attempt for username:', username);

    try {
      setLoading(true);

      // Call PHP API
      const response = await api.login(username, password);
      
      console.log('Login response received:', {
        success: response.success,
        hasToken: !!response.data?.token,
        hasUser: !!response.data?.user
      });

      if (response.success && response.data?.token) {
        // Store token - api.login already does this, but being explicit
        api.setToken(response.data.token);
        
        // Store auth in context
        setAuth({
          user: response.data.user,
          token: response.data.token,
        });

        console.log('Login successful, redirecting to admin...');
        navigate('/admin');
      } else {
        // Handle unexpected success:false or missing token
        const errorMsg = response.message || 'Login failed. Please check your credentials.';
        console.error('Login failed:', errorMsg, response);
        setError(errorMsg);
      }
    } catch (err: any) {
      // Network or unexpected errors
      console.error('Login error caught:', err);
      
      // Provide more specific error messages
      let errorMessage = 'Login failed. Please try again.';
      
      if (err.message) {
        errorMessage = err.message;
      } else if (err.toString().includes('NetworkError') || err.toString().includes('Failed to fetch')) {
        errorMessage = 'Network error. Please check your internet connection.';
      } else if (err.toString().includes('CORS')) {
        errorMessage = 'Connection blocked. Please contact support.';
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Admin</h1>
            <p className="text-gray-600">Sign in to manage your blog</p>
          </div>

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username or Email
              </label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, username: e.target.value }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Enter your username"
                autoComplete="username"
                disabled={loading}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Enter your password"
                autoComplete="current-password"
                disabled={loading}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <a href="/" className="text-blue-600 hover:text-blue-700 transition">
              ← Back to website
            </a>
          </div>

          {/* Debug info - remove in production */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-6 p-4 bg-gray-100 rounded text-xs font-mono">
              <div className="font-semibold mb-2">Debug Info:</div>
              <div>API Base: {api.getToken() ? '✓ Token exists' : '✗ No token'}</div>
              <div>Auth State: {isAuthenticated ? '✓ Authenticated' : '✗ Not authenticated'}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
