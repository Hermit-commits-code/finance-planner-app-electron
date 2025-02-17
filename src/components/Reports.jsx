import React from 'react';

const Reports = () => {
  // Placeholder data for now
  const totalIncome = 5000;
  const totalExpenses = 2000;
  const balance = totalIncome - totalExpenses;

  const generateReport = () => {
    const report = `
      Financial Report:
      -----------------
      Total Income: $${totalIncome}
      Total Expenses: $${totalExpenses}
      Balance: $${balance}
    `;
    alert(report);
  };
  return (
    <div>
      <h1>Reports</h1>
      <div>
        <h2>Total Income: ${totalIncome}</h2>
        <h2>Total Expenses: ${totalExpenses}</h2>
        <h2>Balance: ${balance}</h2>
      </div>
      <button onClick={generateReport}>Generate Report</button>
    </div>
  );
};
export default Reports;
