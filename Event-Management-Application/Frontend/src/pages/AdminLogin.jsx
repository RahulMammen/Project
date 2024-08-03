import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaEnvelope } from "react-icons/fa";
import '../styles/AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // POST request to admin login endpoint
      const response = await axios.post('http://localhost:4000/api/auth/admin-login', {
        email,
        password,
      });
      console.log('Admin login successful:', response.data);

      // Store token and admin status in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('isAdmin', 'true');

      // Navigate to admin dashboard
      navigate('/admin-dashboard');
    } catch (err) {
      // Handle error and display error message
      setError(err.response?.data?.message || 'Invalid email or password');
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
        {error && <p className="error">{error}</p>}
        <div className="input-box">
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FaEnvelope className='icon' />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
          <FaLock className='icon' />
        </div>
        <button type="submit">Login</button>
        <div className="signup-link">
          <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
