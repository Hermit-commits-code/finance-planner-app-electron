import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import App from './App.jsx';
import Auth from './components/Auth.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
