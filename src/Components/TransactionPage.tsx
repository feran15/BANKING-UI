import { useEffect, useState } from "react";
import axios from "axios";

type Transaction = {
  _id: string;
  type: "credit" | "debit";
  amount: number;
  description: string;
  date: string;
};

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:5000/api/transactions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTransactions(res.data);
      } catch (error) {
        console.error("Failed to fetch transactions", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Recent Transactions</h1>

      {loading ? (
        <p>Loading...</p>
      ) : transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 uppercase">
              <tr>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Amount (₦)</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx._id} className="border-t">
                  <td className={`px-4 py-2 font-semibold ${tx.type === "credit" ? "text-green-600" : "text-red-600"}`}>
                    {tx.type}
                  </td>
                  <td className="px-4 py-2">₦{tx.amount.toLocaleString()}</td>
                  <td className="px-4 py-2">{tx.description}</td>
                  <td className="px-4 py-2">{new Date(tx.date).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
