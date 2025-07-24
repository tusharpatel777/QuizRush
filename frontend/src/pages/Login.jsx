import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import { EnvelopeIcon, LockClosedIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login(formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to login. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl shadow-lg dark:shadow-2xl dark:backdrop-blur-sm">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 ">Welcome Back!</h2>
        <p className="text-slate-500 dark:text-gray-400">Sign in to continue to QuizRush</p>
      </div>
      
      {error && <p className="bg-red-100 dark:bg-red-500/30 text-red-700 dark:text-red-300 p-3 rounded-lg text-center mb-4">{error}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <label className="block text-slate-600 dark:text-gray-300 mb-2 text-sm">Email</label>
          <EnvelopeIcon className="pointer-events-none w-5 h-5 absolute top-10 left-3 text-slate-400" />
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange} 
            className="w-full pl-10 p-3 bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-transform duration-300 focus:scale-[1.02]" 
            required 
            placeholder="you@example.com"
          />
        </div>
        <div className="relative">
          <label className="block text-slate-600 dark:text-gray-300 mb-2 text-sm">Password</label>
          <LockClosedIcon className="pointer-events-none w-5 h-5 absolute top-10 left-3 text-slate-400" />
          <input 
            type="password" 
            name="password"
            value={formData.password} 
            onChange={handleChange} 
            className="w-full pl-10 p-3 bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-transform duration-300 focus:scale-[1.02]" 
            required
            placeholder="••••••••" 
          />
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-500 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing In...
            </>
          ) : (
            <>
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
              <span>Login</span>
            </>
          )}
        </button>
      </form>
      <p className="text-center text-sm text-slate-500 dark:text-gray-400 mt-6">
        Don't have an account? <Link to="/register" className="font-semibold text-purple-600 dark:text-purple-400 hover:underline">Register</Link>
      </p>
    </div>
  );
};

export default Login;