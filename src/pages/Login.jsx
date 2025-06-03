import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const defaultUsers = {
  'omar@agency.com': { name: 'Omar', role: 'Manager' },
  'nada@agency.com': { name: 'Nada', role: 'Content Creator' },
  'hind@agency.com': { name: 'Hind', role: 'Graphic Designer' },
  'mohamed@agency.com': { name: 'Mohamed', role: 'Video Editor' },
  'kate@agency.com': { name: 'Kate', role: 'Account Manager' },
};

const USERS_KEY = 'app_users';

function getStoredUsers() {
  const stored = localStorage.getItem(USERS_KEY);
  return stored ? JSON.parse(stored) : defaultUsers;
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const users = getStoredUsers();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users[email.toLowerCase()];
    if (!user) {
      setError('Invalid credentials.');
      return;
    }
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/dashboard');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded w-full mb-4"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-full mb-4"
          required
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;