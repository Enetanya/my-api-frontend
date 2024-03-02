import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://counties-unitauthorities-england-api.netlify.app/forgot/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      const data = await response.json();

      if (data.message === 'success') {
        setMessage('Check your email address to copy your reference number.');

        // Clear input after submitting
        setEmail('');

        // Navigate using useNavigate after 15 seconds
        setTimeout(() => {
          navigate("/new-login-details");
        }, 15000);

      } else {
        setMessage('Failed to send email');
      }
    } catch (error) {
      console.error('Error during email submission:', error);
      setMessage('Failed to send email');
    }
  };
  return (
    <div>
      <h3>Please enter your registered email address and submit.</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          required
          placeholder="Registered Email Address"
          value={email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default ForgotPasswordPage;
