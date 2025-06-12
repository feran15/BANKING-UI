import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

// Types
type AuthFormData = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  confirmPassword?: string;
  terms?: boolean;
};

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

        <AuthSidePanel />
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

const AuthSidePanel = () => (
  <div className="hidden md:flex flex-col items-center justify-center bg-black text-white p-8">
    <h2 className="text-3xl font-bold">Welcome To FillQuick Management!</h2>
    <p className="text-gray-400 mt-2 text-center">Join Now For Any Managing Services</p>
  </div>
);

const SignupForm = ({ switchToLogin }: { switchToLogin: () => void }) => {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<AuthFormData>({ mode: "onBlur" });
  const [show, setShow] = useState({ password: false, confirmPassword: false });

  const onSubmit = async (data: AuthFormData) => {
    try {
      await axios.post(process.env.BACKEND_URL, data);
      toast.success("Account created successfully!");
      setTimeout(switchToLogin, 1500);
    } catch (error) {
      handleAuthError(error, "registration");
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
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address"
          }
        })} error={errors.email} />

        <PasswordInput label="Password" visible={show.password} onToggleVisibility={() => setShow(s => ({ ...s, password: !s.password }))} {...register("password", {
          required: "Password is required",
          minLength: { value: 8, message: "Password must be at least 8 characters" }
        })} error={errors.password} />

        <PasswordInput label="Confirm Password" visible={show.confirmPassword} onToggleVisibility={() => setShow(s => ({ ...s, confirmPassword: !s.confirmPassword }))} {...register("confirmPassword", {
          required: "Please confirm your password",
          validate: value => value === watch("password") || "Passwords do not match"
        })} error={errors.confirmPassword} />

        <CheckboxInput id="terms" label="I accept all terms & conditions" {...register("terms", { required: "You must accept the terms and conditions" })} error={errors.terms} />

        <SubmitButton loading={isSubmitting}>{isSubmitting ? "Creating account..." : "Sign Up"}</SubmitButton>
      </form>

      <AuthFooter prompt="Already have an account?" actionText="Login" onAction={switchToLogin} />
    </>
  );
};

const LoginForm = ({ switchToSignup }: { switchToSignup: () => void }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<AuthFormData>();
  const [show, setShow] = useState(false);

  const onSubmit = async (data: AuthFormData) => {
    try {
      await axios.post("/api/auth/login", data);
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

const AuthHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    <p className="text-gray-600">{subtitle}</p>
  </div>
);

const SocialAuthButton = ({ provider }: { provider: string }) => (
  <>
    <button type="button" className="w-full p-2 flex items-center justify-center border shadow-sm bg-white hover:bg-gray-50 rounded-md">
      <img src={`/${provider}.png`} alt={provider} className="h-5 w-5 mr-2" />
      Continue with {provider.charAt(0).toUpperCase() + provider.slice(1)}
    </button>
    <div className="my-4 text-center text-gray-500">OR</div>
  </>
);

const FormInput = React.forwardRef<HTMLInputElement, { label: string; error?: any; type: string } & React.InputHTMLAttributes<HTMLInputElement>>(
  ({ label, error, type, ...props }, ref) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input ref={ref} type={type} className={`w-full p-3 border rounded-md ${error ? "border-red-500" : "border-gray-300"}`} {...props} />
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  )
);

const PasswordInput = React.forwardRef<HTMLInputElement, { label: string; visible: boolean; onToggleVisibility: () => void; error?: any } & React.InputHTMLAttributes<HTMLInputElement>>(
  ({ label, visible, onToggleVisibility, error, ...props }, ref) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <input ref={ref} type={visible ? "text" : "password"} className={`w-full p-3 border rounded-md ${error ? "border-red-500" : "border-gray-300"}`} {...props} />
        <button type="button" className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700" onClick={onToggleVisibility}>
          {visible ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  )
);

const CheckboxInput = ({ id, error, label, ...props }: { id: string; label: string; error?: any } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="flex items-center">
    <input id={id} type="checkbox" className={`h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 ${error ? "border-red-500" : ""}`} {...props} />
    <label htmlFor={id} className="ml-2 block text-sm text-gray-900">{label}</label>
    {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
  </div>
);

const SubmitButton = ({ loading, children }: { loading: boolean; children: React.ReactNode }) => (
  <button type="submit" disabled={loading} className={`w-full bg-black text-white p-3 rounded-md hover:bg-gray-800 transition-colors ${loading ? "opacity-70 cursor-not-allowed" : ""}`}>
    {children}
  </button>
);

const AuthFooter = ({ prompt, actionText, onAction }: { prompt: string; actionText: string; onAction: () => void }) => (
  <p className="mt-4 text-center text-gray-600">
    {prompt} {" "}
    <button type="button" onClick={onAction} className="font-medium text-indigo-600 hover:text-indigo-500">
      {actionText}
    </button>
  </p>
);

const handleAuthError = (error: any, action: "login" | "registration") => {
  const fallbackMessage = `${action === "login" ? "Login" : "Registration"} failed. Please try again.`;
  const message = axios.isAxiosError(error) ? error.response?.data?.message || error.message : error?.message || fallbackMessage;
  toast.error(message);
  console.error(`${action} failed:`, error);
};
