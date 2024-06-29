import { useState, FC, FormEvent } from 'react';

interface Expense {
  amount: number;
  category: string;
  description: string;
}

interface AddExpenseProps {
  onAdd: (expense: Expense) => void;
}

const AddExpense: FC<AddExpenseProps> = ({ onAdd }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd({ amount: parseFloat(amount), category, description });
    setAmount('');
    setCategory('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Add Expense</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Add Expense
      </button>
    </form>
  );
};

export default AddExpense;
