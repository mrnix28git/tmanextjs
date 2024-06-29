import { useState, FC, FormEvent } from 'react';

interface Income {
  amount: number;
  source: string;
}

interface AddIncomeProps {
  onAdd: (income: Income) => void;
}

const AddIncome: FC<AddIncomeProps> = ({ onAdd }) => {
  const [amount, setAmount] = useState('');
  const [source, setSource] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd({ amount: parseFloat(amount), source });
    setAmount('');
    setSource('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Add Income</h2>
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
        value={source}
        onChange={(e) => setSource(e.target.value)}
        placeholder="Source"
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
        Add Income
      </button>
    </form>
  );
};

export default AddIncome;
