import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {SignupForm } from "./SignupForm";
import  { LoginForm } from "./LoginForm";

type AuthMode = "login" | "signup";

 export const AuthPage: React.FC = () => {
  const [authMode, setAuthMode] = useState<AuthMode>("login");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg overflow-hidden w-full max-w-5xl">
        <div className="p-8 w-full">
          {authMode === "login" ? (
            <LoginForm switchToSignup={() => setAuthMode("signup")} />
          ) : (
            <SignupForm switchToLogin={() => setAuthMode("login")} />
          )}
        </div>

        <div className="hidden md:flex flex-col items-center justify-center bg-black text-white p-8">
          <h2 className="text-3xl font-bold">Welcome To FillQuick Management!</h2>
          <p className="text-gray-400 mt-2 text-center">
            Join Now For Any Managing Services
          </p>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

