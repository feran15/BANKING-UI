import  { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import {
  AuthHeader,
  AuthFooter,
  FormInput,
  PasswordInput,
  SubmitButton,
  SocialAuthButton,
  CheckBoxInput,
  handleAuthError
} from "./Auth";

type AuthFormData = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  confirmPassword?: string;
  terms?: boolean;
};

export const SignupForm = ({ switchToLogin }: { switchToLogin: () => void }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<AuthFormData>({ mode: "onBlur" });

  const [show, setShow] = useState({ password: false, confirmPassword: false });
   const navigate = useNavigate(); // ✅ for redirect
// Getting backend data after signing up
  const onSubmit = async (data: AuthFormData) => {
    try {
    const res = await axios.post(import.meta.env.VITE_BACKEND_URL, data);

         // ✅ Save token to localStorage
      localStorage.setItem("token", res.data.token);

       // ✅ Optionally save user info
      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      toast.success("Account created successfully!");
      // navigate directly to dashboard
          navigate("/dashboard");
          } catch (error) {
            handleAuthError(error, "login");
          }
  };


  return (
    <>
      <AuthHeader title="Create Your Account" subtitle="Welcome! Please enter your details" />
      <SocialAuthButton provider="google" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput label="First Name" type="text" {...register("firstName", { required: "First name is required" })} error={errors.firstName} />
          <FormInput label="Last Name" type="text" {...register("lastName", { required: "Last name is required" })} error={errors.lastName} />
        </div>

        <FormInput label="Email" type="email" {...register("email", {
          required: "Email is required",
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" }
        })} error={errors.email} />

        <PasswordInput label="Password" visible={show.password} onToggleVisibility={() => setShow(s => ({ ...s, password: !s.password }))} {...register("password", {
          required: "Password is required",
          minLength: { value: 8, message: "At least 8 characters" }
        })} error={errors.password} />

        <PasswordInput label="Confirm Password" visible={show.confirmPassword} onToggleVisibility={() => setShow(s => ({ ...s, confirmPassword: !s.confirmPassword }))} {...register("confirmPassword", {
          required: "Confirm your password",
          validate: value => value === watch("password") || "Passwords do not match"
        })} error={errors.confirmPassword} />

        <CheckBoxInput id="terms" label="I accept all terms & conditions" {...register("terms", { required: "You must accept terms" })} />

        <SubmitButton loading={isSubmitting}>{isSubmitting ? "Creating account..." : "Sign Up"}</SubmitButton>
      </form>
      <AuthFooter prompt="Already have an account?" actionText="Login" onAction={switchToLogin} />
    </>
  );
};
