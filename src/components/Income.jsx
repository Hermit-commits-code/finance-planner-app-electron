import React, { useState } from 'react';

const Income = () => {
  const [incomes, setIncomes] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const addIncome = () => {
    const newIncome = { description, amount: parseFloat(amount) };
    setIncomes([...incomes, newIncome]);
    setDescription('');
    setAmount('');
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
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addIncome}>Add Income</button>
      </div>
      <ul>
        {incomes.map((income, index) => (
          <li key={index}>
            {income.description}: ${income.amount.toFixed(2)}
            <button onClick={() => deleteIncome(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Income;
