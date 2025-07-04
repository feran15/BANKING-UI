import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios"
import { toast } from 'react-toastify';
type SendMoneyFormInputs = {
  recipient: string;
  amount: number;
  pin: string;
};

export const SendMoneyPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SendMoneyFormInputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: SendMoneyFormInputs) => {
    setIsSubmitting(true);
    try {
      // Send money logic here
      console.log('Sending money to:', data);
       const res = await axios.post(import.meta.env.VITE_TRANSACTION_URL, data);
      toast.success("Transfer Successful")
       if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong")
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Send Money</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Recipient Email or Account</label>
          <input
            type="text"
            {...register("recipient", { required: "Recipient is required" })}
            className="w-full p-2 border rounded"
          />
          {errors.recipient && <p className="text-red-500 text-sm">{errors.recipient.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Amount</label>
          <input
            type="number"
            {...register("amount", { required: "Amount is required", min: 1 })}
            className="w-full p-2 border rounded"
          />
          {errors.amount && <p className="text-red-500 text-sm">{errors.amount.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Transaction PIN</label>
          <input
            type="password"
            {...register("pin", { required: "PIN is required", minLength: 4 })}
            className="w-full p-2 border rounded"
          />
          {errors.pin && <p className="text-red-500 text-sm">{errors.pin.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {isSubmitting ? 'Sending...' : 'Send Money'}
        </button>
      </form>
    </div>
  );
};

