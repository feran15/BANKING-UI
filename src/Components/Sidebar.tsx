// src/components/Sidebar.tsx
import { FaTachometerAlt, FaMoneyCheckAlt, FaExchangeAlt, FaUser, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void
}

const navLinks = [
  { name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
  { name: "Accounts", path: "/dashboard/accounts", icon: <FaMoneyCheckAlt /> },
  { name: "Transactions", path: "/dashboard/transactions", icon: <FaExchangeAlt /> },
  { name: "Send Money", path: "/dashboard/send", icon: <FaMoneyCheckAlt /> },
  { name: "Profile", path: "/dashboard/profile", icon: <FaUser /> },
  {name: " New Bank Account", path: "/dashboard/Create", icon: <FaUser />}
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden" onClick={onClose}></div>}

      <aside
        className={`fixed z-40 top-0 left-0 h-full bg-[#1E293B] text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:block transition-transform duration-300`}
      >
        <div className="flex items-center justify-between px-4 py-5 border-b border-gray-700">
          <h1 className="text-xl font-bold">BankPro</h1>
          <button onClick={onClose} className="md:hidden text-white">
            <FaTimes />
          </button>
        </div>

        <nav className="mt-6 space-y-2 px-2">
          {navLinks.map((link) => (
            <Link
              to={link.path}
              key={link.name}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-700 ${
                location.pathname === link.path ? "bg-gray-700" : ""
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-4 w-full px-4">
          <button className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
