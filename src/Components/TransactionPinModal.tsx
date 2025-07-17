import React, { useState } from 'react';
import axios from 'axios';

interface Props {
  onClose: () => void;
}

export const SetTransactionPinModal: React.FC<Props> = ({ onClose }) => {
  const [pin, setPin] = useState('');

  const handleSubmit = async () => {
    if (!/^\d{4}$/.test(pin)) {
      alert('Enter a valid 4-digit PIN');
      return;
    }

    try {
      await axios.post('/api/users/set-pin', { pin });
      alert('PIN set successfully!');
      onClose();
    } catch (err: any) {
      console.error(err);
      alert('Error setting PIN');
    }
  };

  return (
    <div className="fixed inset-0 bg-black opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">Set Transaction PIN</h2>
        <input
          type="password"
          maxLength={4}
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4 text-center"
          placeholder="Enter 4-digit PIN"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          Set PIN
        </button>
      </div>
    </div>
  );
};
