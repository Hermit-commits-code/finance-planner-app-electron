import './Income.css';

import React, { useState } from 'react';
const Income = () => {
  const [incomes, setIncomes] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addIncome = () => {
    const newIncome = { description, amount: parseFloat(amount), category };
    setIncomes([...incomes, newIncome]);
    setDescription('');
    setAmount('');
    setCategory('');
  };

  const editIncome = (index) => {
    const income = incomes[index];
    setDescription(income.description);
    setAmount(income.amount);
    setCategory(income.category);
    setEditIndex(index);
  };

  const updateIncome = () => {
    const updatedIncomes = incomes.map((income, index) =>
      index === editIndex
        ? { description, amount: parseFloat(amount), category }
        : income
    );
    setIncomes(updatedIncomes);
    setDescription('');
    setAmount('');
    setCategory('');
    setEditIndex(null);
  };

  const deleteIncome = (index) => {
    const newIncomes = incomes.filter((_, i) => i !== index);
    setIncomes(newIncomes);
  };

  return (
    <div>
      <h1>Income</h1>
      <div>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        {editIndex !== null ? (
          <button onClick={updateIncome}>Update Income</button>
        ) : (
          <button onClick={addIncome}>Add Income</button>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {incomes.map((income, index) => (
            <tr key={index}>
              <td>{income.description}</td>
              <td>${income.amount.toFixed(2)}</td>
              <td>{income.category}</td>
              <td>
                <button onClick={() => editIncome(index)}>Edit</button>
                <button onClick={() => deleteIncome(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Income;
