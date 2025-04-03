import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Mail, Lock, User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

interface AuthFormData {
  email: string;
  password: string;
  name?: string;
}

const Auth: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<AuthFormData>();
  const { signIn, signUp } = useAuthStore();
  const navigate = useNavigate();

  const onSubmit = async (data: AuthFormData) => {
    try {
      if (isSignUp) {
        await signUp(data);
      } else {
        await signIn(data);
      }
      navigate('/');
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-[#FFF8F2] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-sm p-8 max-w-md w-full"
      >
        <h1 className="text-3xl font-serif text-[#5A4232] mb-6 text-center">
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  {...register('name', { required: isSignUp })}
                  type="text"
                  className="input pl-10"
                  placeholder="Your name"
                />
              </div>
              {errors.name && (
                <span className="text-red-500 text-sm">Name is required</span>
              )}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                type="email"
                className="input pl-10"
                placeholder="your@email.com"
              />
            </div>
            {errors.email && (
              <span className="text-red-500 text-sm">Valid email is required</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                {...register('password', { required: true, minLength: 6 })}
                type="password"
                className="input pl-10"
                placeholder="••••••••"
              />
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">
                Password must be at least 6 characters
              </span>
            )}
          </div>

          <button type="submit" className="w-full btn btn-primary">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-[#C9A66B] hover:text-[#5A4232] transition-colors"
          >
            {isSignUp
              ? 'Already have an account? Sign in'
              : "Don't have an account? Sign up"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;