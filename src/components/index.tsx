import { useState } from 'react';
import AddExpense from './AddExpense';
import AddIncome from './AddIncome';

interface Expense {
  amount: number;
  category: string;
  description: string;
}

interface Income {
  amount: number;
  source: string;
}

const Home = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [incomes, setIncomes] = useState<Income[]>([]);

  const handleAddExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleAddIncome = (income: Income) => {
    setIncomes([...incomes, income]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">BudgetBuddy</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AddExpense onAdd={handleAddExpense} />
        <AddIncome onAdd={handleAddIncome} />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Expenses</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index} className="border p-2 mb-2 rounded">
              {expense.amount} - {expense.category} - {expense.description}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">Incomes</h2>
        <ul>
          {incomes.map((income, index) => (
            <li key={index} className="border p-2 mb-2 rounded">
              {income.amount} - {income.source}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
