import React, { useState } from 'react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
        setMessage('Check your email to change login details. The link expires in 15 minutes.');
  
        // Clear input after submitting
        setEmail('');
  
        // Navigate after 15 seconds
        setTimeout(() => {
          window.location.href = "/new-login-details";
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
