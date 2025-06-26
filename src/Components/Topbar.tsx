// src/components/Topbar.tsx
import { FaBars } from "react-icons/fa";

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Hamburger Menu for Mobile */}
      <button onClick={onMenuClick} className="md:hidden text-gray-700 text-xl">
        <FaBars />
      </button>

      <h2 className="text-xl font-semibold">Dashboard</h2>

      <div className="flex items-center space-x-4">
        {/* You can expand this for notifications/profile/etc. */}
        <span className="text-gray-600 font-medium">Hello, Paul</span>
        <img
          src="https://ui-avatars.com/api/?name=Paul&background=random"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}
