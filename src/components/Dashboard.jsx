import React from 'react';

const Dashboard = () => {
  // Placeholder Data
  const totalIncome = 5000;
  const totalExpenses = 2000;
  const balance = totalIncome - totalExpenses;

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Total Income: ${totalIncome}</h2>
        <h2>Total Expenses: ${totalExpenses}</h2>
        <h2>Balance: ${balance}</h2>
      </div>
    </div>
  );
};

export default Dashboard;
