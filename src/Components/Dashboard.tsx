
// Home.tsx
export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome back 👋</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-gray-500 text-sm">Account Balance</h2>
          <p className="text-2xl font-semibold text-green-600">₦215,000</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-gray-500 text-sm">Last Transaction</h2>
          <p className="text-lg font-medium">₦5,000 - Transfer</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-gray-500 text-sm">Recent Activity</h2>
          <p className="text-lg font-medium">3 transactions today</p>
        </div>
      </div>
    </div>
  );
}
