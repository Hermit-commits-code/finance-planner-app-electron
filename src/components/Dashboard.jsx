import './Dashboard.css'; // Import CSS file for styling

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
    labels: ['Income', 'Expenses', 'Balance'],
    datasets: [
      {
        label: 'Finance Overview',
        data: [totalIncome, totalExpenses, balance],
        backgroundColor: ['#4caf50', '#f44336', '#2196f3'],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="financial-overview">
        <div className="financial-metric">
          <h2>Total Income</h2>
          <p>${totalIncome}</p>
        </div>
        <div className="financial-metric">
          <h2>Total Expenses</h2>
          <p>${totalExpenses}</p>
        </div>
        <div className="financial-metric">
          <h2>Balance</h2>
          <p>${balance}</p>
        </div>
      </div>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
