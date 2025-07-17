import { useEffect, useState } from 'react';
import { SetTransactionPinModal } from '../components/TransactionPinModal';
import axios from 'axios';

export default function DashboardHome() {
  const [showPinModal, setShowPinModal] = useState(false);

  useEffect(() => {
    const checkTransactionPin = async () => {
      try {
        const res = await axios.get('/api/users/me'); // adjust to your actual route
        const hasPin = res.data?.transactionPin;
        if (!hasPin) {
          setShowPinModal(true);
        }
      } catch (err) {
        console.error('Failed to check PIN status:', err);
        setShowPinModal(true); // optionally force modal open if request fails
      }
    };

    checkTransactionPin();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome back, Paul 👋</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Account Balance */}
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-gray-500 text-sm">Account Balance</h2>
          <p className="text-2xl font-semibold text-green-600">₦215,000</p>
        </div>

        {/* Last Transaction */}
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-gray-500 text-sm">Last Transaction</h2>
          <p className="text-lg font-medium">₦5,000 - Transfer</p>
        </div>

        {/* Total Activity */}
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-gray-500 text-sm">Today’s Activity</h2>
          <p className="text-lg font-medium">3 Transactions</p>
        </div>
      </div>

      {showPinModal && (
        <SetTransactionPinModal onClose={() => setShowPinModal(false)} />
      )}
    </div>
  );
}
