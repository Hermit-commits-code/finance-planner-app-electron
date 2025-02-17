import { Link } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div>
      <h1>💖 Hello World!</h1>
      <p>Welcome to your Electron application.</p>
      <Link to="/auth">
        <button>Go to Auth</button>
      </Link>
      <Link to="/dashboard">
        <button>Go to Dashboard</button>
      </Link>
      <Link to="/income">
        <button>Update Income</button>
      </Link>
    </div>
  );
}

export default App;
