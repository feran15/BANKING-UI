import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

// Types for Form Data
type AuthFormData = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  confirmPassword?: string;
  terms?: boolean;
};

// Props for Login/SignUp components
type AuthToggleProps = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

 export const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg overflow-hidden w-full max-w-5xl">
        <div className="p-8 w-full">
          {isLogin ? (
            <Login setIsLogin={setIsLogin} />
          ) : (
            <SignUp setIsLogin={setIsLogin} />
          )}
        </div>

        <div className="hidden md:flex flex-col items-center justify-center bg-black text-white p-8">
          <h2 className="text-3xl font-bold">Welcome To FillQuick Management!</h2>
          <p className="text-gray-400 mt-2 text-center">
            Join Now For Any Managing Services
          </p>
          <p className="text-gray-400 mt-4 text-center text-sm">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className="mt-6 w-full">
            <div className="bg-gray-800 p-4">
              <h3 className="text-gray-300 text-sm">Sales Report</h3>
              <div className="mt-2 flex justify-between text-white">
                <span>$89,897</span>
                <span>$98,265</span>
              </div>
            </div>
            <div className="mt-4 bg-gray-800 p-4">
              <h3 className="text-gray-300 text-sm">Popular Categories</h3>
              <p className="text-white mt-2">Total Categories: 24%</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

const SignUp: React.FC<AuthToggleProps> = ({ setIsLogin }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<AuthFormData>();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const onSubmit = async (data: AuthFormData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        data
      );
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Registration successful!");
      console.log("User registered:", response.data);
    } catch (error) {
      toast.error("Registration failed. Try again.");
      console.error("Registration error:", error);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900">Create Your Account</h2>
      <p className="text-gray-600">Welcome back! Please enter your details</p>
      <button className="w-full mt-4 p-2 flex items-center justify-center border shadow-sm bg-white hover:bg-gray-50">
        <img src="/Google.png" alt="Google" className="h-5 w-5 mr-2" />
        Sign up with Google
      </button>
      <div className="my-4 text-center text-gray-500">OR</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block mb-2">First Name</label>
        <input
          type="text"
          {...register("firstName", { required: "First Name is required" })}
          placeholder="Enter your First name"
          className="w-full p-3 border mb-3"
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}

        <label className="block mb-2">Last Name</label>
        <input
          type="text"
          {...register("lastName", { required: "Last Name is required" })}
          placeholder="Enter your Last name"
          className="w-full p-3 border mb-3"
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm">{errors.lastName.message}</p>
        )}

        <label className="block mb-2">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          placeholder="Enter your Email Address"
          className="w-full p-3 border mb-3"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <label className="block mb-2">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            placeholder="Password"
            className="w-full p-3 border mb-3"
          />
          <span
            className="absolute right-4 top-4 cursor-pointer"
            onClick={() => togglePasswordVisibility("password")}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <label className="block mb-2">Retype Password</label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            placeholder="Retype Password"
            className="w-full p-3 border mb-3"
          />
          <span
            className="absolute right-4 top-4 cursor-pointer"
            onClick={() => togglePasswordVisibility("confirmPassword")}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
        )}

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="terms"
            className="mr-2"
            {...register("terms", {
              required: "You must accept the terms",
            })}
          />
          <label htmlFor="terms" className="text-gray-600">
            I accept all terms & conditions.
          </label>
        </div>
        {errors.terms && (
          <p className="text-red-500 text-sm">{errors.terms.message}</p>
        )}

        <button
          type="submit"
          className="w-full bg-black text-white p-3 hover:bg-gray-800"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing up..." : "Sign Up"}
        </button>
      </form>

      <p className="mt-4 text-center text-gray-600">
        Already have an account?{" "}
        <button
          onClick={() => setIsLogin(true)}
          className="text-blue-600 hover:underline"
        >
          Login
        </button>
      </p>
    </>
  );
};

const Login: React.FC<AuthToggleProps> = ({ setIsLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthFormData>();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: AuthFormData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        data
      );
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Login successful!");
      console.log("User logged in:", response.data);
    } catch (error) {
      toast.error("Login failed. Try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900">Login to Your Account</h2>
      <p className="text-gray-600">Welcome back! Please enter your details</p>
      <button className="w-full mt-4 p-2 flex items-center justify-center border shadow-sm bg-white hover:bg-gray-50">
        <img src="/Google.png" alt="Google" className="h-5 w-5 mr-2" />
        Login with Google
      </button>
      <div className="my-4 text-center text-gray-500">OR</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block mb-2">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          placeholder="Enter your Email Address"
          className="w-full p-3 border mb-3"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <label className="block mb-2">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: "Password is required" })}
            placeholder="Password"
            className="w-full p-3 border mb-3"
          />
          <span
            className="absolute right-4 top-4 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <button
          type="submit"
          className="w-full bg-black text-white p-3 hover:bg-gray-800"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="mt-4 text-center text-gray-600">
        Don't have an account?{" "}
        <button
          onClick={() => setIsLogin(false)}
          className="text-blue-600 hover:underline"
        >
          Sign Up
        </button>
      </p>
    </>
  );
};