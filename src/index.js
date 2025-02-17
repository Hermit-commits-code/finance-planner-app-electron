import './index.css';

import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';

import App from './App.jsx';
import Auth from './components/Auth.jsx';
import Dashboard from './components/Dashboard.jsx';
import Expenses from './components/Expenses.jsx';
import Income from './components/Income.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Reports from './components/Reports.jsx';
import Settings from './components/Settings.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/income" element={<Income />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
