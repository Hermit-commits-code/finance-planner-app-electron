import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import React from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Placeholder Data
  const totalIncome = 5000;
  const totalExpenses = 2000;
  const balance = totalIncome - totalExpenses;

  const data = {
    labels: ['Income', 'Expense', 'Balance'],
    datasets: [
      {
        label: 'Finance Overview',
        data: [totalIncome, totalExpenses, balance],
        backgroundColor: ['#4ca', '#f44', '#2196f3'],
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Total Income: ${totalIncome}</h2>
        <h2>Total Expenses: ${totalExpenses}</h2>
        <h2>Balance: ${balance}</h2>
      </div>
      <div>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
