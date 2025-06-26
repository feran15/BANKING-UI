// DashboardLayout.tsx
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
export default function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="flex h-screen">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}/>
      <div className="flex-1 flex flex-col">
        <Topbar onMenuClick={() => setSidebarOpen(true)}/>
        <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
