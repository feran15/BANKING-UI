// Auth.tsx

import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify"
// 1. Header
export const AuthHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    <p className="text-gray-600">{subtitle}</p>
  </div>
);

// 2. Footer
export const AuthFooter = ({ prompt, actionText, onAction }: { prompt: string; actionText: string; onAction: () => void }) => (
  <p className="mt-4 text-center text-gray-600">
    {prompt}{" "}
    <button type="button" onClick={onAction} className="font-medium text-indigo-600 hover:text-indigo-500">
      {actionText}
    </button>
  </p>
);

// 3. Input
export const FormInput = React.forwardRef<HTMLInputElement, { label: string; error?: any; type: string } & React.InputHTMLAttributes<HTMLInputElement>>(
  ({ label, error, type, ...props }, ref) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input ref={ref} type={type} className={`w-full p-3 border rounded-md ${error ? "border-red-500" : "border-gray-300"}`} {...props} />
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  )
);

// 4. Password input
export const PasswordInput = React.forwardRef<HTMLInputElement, {
  label: string;
  visible: boolean;
  onToggleVisibility: () => void;
  error?: any;
} & React.InputHTMLAttributes<HTMLInputElement>>(
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

// 5. Submit button
export const SubmitButton = ({ loading, children }: { loading: boolean; children: React.ReactNode }) => (
  <button
    type="submit"
    disabled={loading}
    className={`w-full bg-black text-white p-3 rounded-md hover:bg-gray-800 transition-colors ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
  >
    {children}
  </button>
);

// 6. Social Auth button
export const SocialAuthButton = ({ provider }: { provider: string }) => (
  <>
    <button type="button" className="w-full p-2 flex items-center justify-center border shadow-sm bg-white hover:bg-gray-50 rounded-md">
      <img src={`/${provider}.png`} alt={provider} className="h-5 w-5 mr-2" />
      Continue with {provider.charAt(0).toUpperCase() + provider.slice(1)}
    </button>
    <div className="my-4 text-center text-gray-500">OR</div>
  </>
);

// 7. Error handler
export const handleAuthError = (error: any, action: "login" | "registration") => {
  const fallbackMessage = `${action === "login" ? "Login" : "Registration"} failed. Please try again.`;
  const message = error?.response?.data?.message || error?.message || fallbackMessage;
  toast.error(message);
  console.error(`${action} failed:`, error);
};
export const CheckBoxInput = ({
  label,
  ...props
}: {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <label className="flex items-center space-x-2 text-sm text-gray-600">
    <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" {...props} />
    <span>{label}</span>
  </label>
);