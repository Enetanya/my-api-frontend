// SignupPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({ email: '', id: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://counties-unitauthorities-england-api.netlify.app/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          id: formData.id,
          password: formData.password,
        }),
      });

      const data = await response.json();
      
      if (data.message === 'success') {
        // Clear form fields after successful signup
        setFormData({ email: '', id: '', password: '' });
        setMessage('');
        // Navigate to the login page if signup is successful
        navigate('/login');
      } else {
        setMessage('Something went wrong. Try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setMessage('Something went wrong. Try again.');
    }
  };
  return (
    <div>
      <h1>Welcome to Counties and Unitary Authorities in England API</h1>
      <h3>Enter your details below and Signup</h3>
      <form onSubmit={handleSignup}>
        <input
          name="email"
          type="email"
          required
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="id"
          type="text"
          required
          placeholder="New User ID"
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
        <button type="submit">Signup</button>
        <p className="message">{message}</p>
        <br />
        <br />
        <Link to="/forgot-password" className='custom-link'>Forgot Password?</Link>
        <br />
        <br />
        <p>1. Email: Use a functional email address.</p>
        <p>2. ID Rule: Create an ID at least 8 characters long, using only letters, uppercase/lowercase.</p>
        <p>3. Password Rule: Generate a password at least 8 characters long, including one uppercase letter, one lowercase letter, one number, and one special character.</p>
        <br />
        <br />
        </form>
        <h3>Click the Login link below if you already have an existing account:</h3>
        <Link to="/login" className='custom-link'>Login</Link>
        </div>
         );
        };
export default SignupPage;
    














  
