import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  AuthHeader,
  AuthFooter,
  FormInput,
  PasswordInput,
  SubmitButton,
  SocialAuthButton,
  handleAuthError
} from "./Auth";

type AuthFormData = {
  email: string;
  password: string;
};

 export const LoginForm = ({ switchToSignup }: { switchToSignup: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthFormData>();

  const [show, setShow] = useState(false);

  const onSubmit = async (data: AuthFormData) => {
    try {
      await axios.post(import.meta.env.VITE_LOGIN_URL, data);
      toast.success("Login successful!");
    } catch (error) {
      handleAuthError(error, "login");
    }
  };

  return (
    <>
      <AuthHeader title="Login to Your Account" subtitle="Welcome back! Please enter your details" />
      <SocialAuthButton provider="google" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput label="Email" type="email" {...register("email", { required: "Email is required" })} error={errors.email} />
        <PasswordInput label="Password" visible={show} onToggleVisibility={() => setShow(!show)} {...register("password", { required: "Password is required" })} error={errors.password} />
        <SubmitButton loading={isSubmitting}>{isSubmitting ? "Logging in..." : "Login"}</SubmitButton>
      </form>
      <AuthFooter prompt="Don't have an account?" actionText="Sign Up" onAction={switchToSignup} />
    </>
  );
};
