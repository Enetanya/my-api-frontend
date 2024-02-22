import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// LoginPage.js

const LoginPage = () => {
  const [formData, setFormData] = useState({ id: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://counties-unitauthorities-england-api.netlify.app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: formData.id,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (data.message === 'success') {
        // Clear form fields after successful login
        setFormData({ id: '', password: '' });
        setMessage('');
        // Direct to DocumentationPage
        navigate('/documentation');
      } else {
        setMessage('Invalid credentials!');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('Internal Server Error');
    }
  };

  return (
    <div>
      <h3>Please enter your login details.</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="id"
          type="text"
          required
          placeholder="User ID"
          value={formData.id}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          required
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
      <br />
      <br />
      <Link to="/forgot-password" className='custom-link'>Forgot Password?</Link>
      <br />
      <br />
      <Link to="/" className='custom-link'>Return to Signup Page</Link>
      <br />
      <br />
      <br />
      <p>1. Email: Use the registered email address for the system.</p>
      <p>2. ID Rule: ID must be at least 8 characters long, using only letters, uppercase/lowercase.</p>
      <p>3. Password Rule: Password must be at least 8 characters long, including one uppercase letter, one lowercase letter, one number, and one special character.</p>
    </div>
  );
};

export default LoginPage;
