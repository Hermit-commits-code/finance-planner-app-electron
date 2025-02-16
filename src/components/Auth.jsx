import React, { useState } from 'react';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = async () => {
    try {
      const response = await window.api.login(username, password);
      console.log('Login Successful', response);
    } catch (error) {
      console.error('Login Error:', error);
    }
  };
  const handleRegister = async () => {
    try {
      const response = await window.api.register(username, password, email);
      console.log('Registration Successful', response);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Register'} </h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {!isLogin && (
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}
      <button onClick={isLogin ? handleLogin : handleRegister}>
        {isLogin ? 'Login' : 'Register'}
      </button>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default Auth;
