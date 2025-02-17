import './Dashboard.css'; // Import CSS file for styling

import { Bar, Line } from 'react-chartjs-2';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import {
  faBalanceScale,
  faDollarSign,
  faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Placeholder Data
  const totalIncome = 5000;
  const totalExpenses = 2000;
  const balance = totalIncome - totalExpenses;

  const monthlyData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Income',
        data: [800, 900, 1000, 1100, 1200, 1300],
        borderColor: '#4caf50',
        fill: false,
      },
      {
        label: 'Monthly Expenses',
        data: [500, 600, 700, 800, 900, 1000],
        borderColor: '#f44336',
        fill: false,
      },
    ],
  };

  const barData = {
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
          <FontAwesomeIcon icon={faDollarSign} size="2x" />
          <h2>Total Income</h2>
          <p>${totalIncome}</p>
        </div>
        <div className="financial-metric">
          <FontAwesomeIcon icon={faMoneyBillWave} size="2x" />
          <h2>Total Expenses</h2>
          <p>${totalExpenses}</p>
        </div>
        <div className="financial-metric">
          <FontAwesomeIcon icon={faBalanceScale} size="2x" />
          <h2>Balance</h2>
          <p>${balance}</p>
        </div>
      </div>
      <div className="chart-container">
        <Bar data={barData} options={options} />
      </div>
      <div className="chart-container">
        <Line data={monthlyData} options={options} />
      </div>
      <div className="navigation-links">
        <Link to="/expenses">Manage Expenses</Link>
        <Link to="/income">Manage Income</Link>
        <Link to="/reports">Generate Reports</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  );
};

export default Dashboard;
