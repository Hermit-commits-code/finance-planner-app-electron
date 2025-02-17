import './Expenses.css';

import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [sortField, setSortField] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterCategory, setFilterCategory] = useState('');

  const addExpense = () => {
    const newExpense = {
      description,
      amount: parseFloat(amount),
      category,
      date,
    };
    setExpenses([...expenses, newExpense]);
    setDescription('');
    setAmount('');
    setCategory('');
    setDate('');
  };

  const editExpense = (index) => {
    const expense = expenses[index];
    setDescription(expense.description);
    setAmount(expense.amount);
    setCategory(expense.category);
    setDate(expense.date);
    setEditIndex(index);
  };

  const updateExpense = () => {
    const updatedExpenses = expenses.map((expense, index) =>
      index === editIndex
        ? { description, amount: parseFloat(amount), category, date }
        : expense
    );
    setExpenses(updatedExpenses);
    setDescription('');
    setAmount('');
    setCategory('');
    setDate('');
    setEditIndex(null);
  };

  const deleteExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  const sortedExpenses = expenses
    .filter(
      (expense) => filterCategory === '' || expense.category === filterCategory
    )
    .sort((a, b) => {
      if (sortField === 'amount') {
        return sortOrder === 'asc' ? a.amount - b.amount : b.amount - a.amount;
      } else if (sortField === 'date') {
        return sortOrder === 'asc'
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      } else {
        return sortOrder === 'asc'
          ? a[sortField].localeCompare(b[sortField])
          : b[sortField].localeCompare(a[sortField]);
      }
    });

  return (
    <div>
      <h1>Expenses</h1>
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
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {editIndex !== null ? (
          <button onClick={updateExpense}>Update Expense</button>
        ) : (
          <button onClick={addExpense}>Add Expense</button>
        )}
      </div>
      <div>
        <label>
          Filter by Category:
          <input
            type="text"
            placeholder="Category"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          />
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th
              onClick={() => {
                setSortField('description');
                setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
              }}
            >
              Description
            </th>
            <th
              onClick={() => {
                setSortField('amount');
                setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
              }}
            >
              Amount
            </th>
            <th
              onClick={() => {
                setSortField('category');
                setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
              }}
            >
              Category
            </th>
            <th
              onClick={() => {
                setSortField('date');
                setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
              }}
            >
              Date
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedExpenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.description}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.category}</td>
              <td>{expense.date}</td>
              <td>
                <button onClick={() => editExpense(index)}>Edit</button>
                <button onClick={() => deleteExpense(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="navigation-links">
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default Expenses;
