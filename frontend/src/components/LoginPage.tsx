// src/components/LoginPage.tsx

import { useState } from 'react';
import { FiLock } from 'react-icons/fi';

interface LoginPageProps {
  onLoginSuccess: (email: string) => void;
}

export default function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted with:', { email, password });
    onLoginSuccess(email); // Trigger the page change
  };

  return (
    // New gradient background
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <FiLock className="text-2xl mr-3 text-gray-400" />
          <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Increased spacing on this div */}
          <div className="mb-6"> 
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
              required
            />
          </div>
          {/* New button color and animation */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 transform hover:scale-105"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}