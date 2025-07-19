import React from 'react';
import SignInForm from './SignInForm.jsx';
import SignUpForm from './SignUpForm.jsx';
import { DataBlob } from './DataBlob.jsx';

const AuthPage = ({ mode = 'signup' }) => {
  return (
    <div className="min-h-screen min-w-screen relative flex flex-col text-center items-center justify-center p-4">
      <div className="w-full max-w-md z-10 bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#1A1F2C]">
          {mode === 'signin' ? 'Welcome Back!' : 'Create Account'}
        </h1>
        {mode === 'signup' ? <SignUpForm /> : <SignInForm />}
        <p className="mt-4 text-center text-gray-600">
          {mode === 'signin' ? (
            <>
              Don't have an account?{' '}
              <a href="/SignUpForm" className="text-[#6E59A5] hover:underline">
                Sign up
              </a>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <a href="/SignInForm" className="text-[#6E59A5] hover:underline">
                Sign in
              </a>
            </>
          )}
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <DataBlob />
      </div>
    </div>
  );
};

export default AuthPage;