import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewLoginDetailsPage = () => {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [newId, setNewId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [number, setNumber] = useState('');

  const clearStateAndInputs = () => {
    setEmail('');
    setNewId('');
    setNewPassword('');
    setNumber('');
    console.log('State and inputs cleared.');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://counties-unitauthorities-england-api.netlify.app/forgot/process.env.ud', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
          email: email,
          newId: newId,
          newPassword: newPassword,
          number: number
        }),
      });
      setSuccess('');
      setError('');
      const data = await response.json();
      console.log('Server response:', data);
      if (data.success) {
        setSuccess('Your login details have been successfully updated. Click the Login link below to continue.');
      <Link to="/login" className='custom-link'>Login</Link>
        clearStateAndInputs(); // Clear inputs on success
      } else {
        if (data.errorType === 'invalidInput') {
          setError('Please provide valid input for email, new ID, new password, and number.');
        } else if (data.errorType === 'serverError') {
          setError('Error updating login details. Please try again later.');
        } else {
          setError('Unknown error occurred. Please try again later.');
        }
        clearStateAndInputs(); // Clear inputs on error
      }
  } catch (error) {
    setError('An error occurred. Please try again later.');
    console.error('Error occurred:', error);
    clearStateAndInputs(); // Clear inputs on error
  }
    };
  
    return (
      <div>
        <h3>Please enter your new login details.</h3>
        <form onSubmit={handleSubmit}>
          <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" required placeholder="Enter same email address" />
          <input value={newId} onChange={(e) => setNewId(e.target.value)} name="newId" type="text" required placeholder="New User ID" />
          <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} name="newPassword" type="password"  required  placeholder="New Password" />
          <input value={number} onChange={(e) => setNumber(e.target.value)} name="number" type="number"  required  placeholder="Reference Number" />
          <button type="submit">Submit</button>
        </form>
        <br />
        <br />
        <Link to="/" className='custom-link'>Return to Signup Page</Link>
        <br />
        <br />
        <br />
      <p>1. Please ensure you have confirmed your email by clicking on the link sent to your email address, as you will be unable to complete the process if you have not. </p>
      <p>2. Email: Use the registered email for the system.</p>
      <p>3. ID Rule: Create an ID at least 8 characters long, using only letters, uppercase/lowercase.</p>
      <p>4. Password Rule: Generate a password at least 8 characters long, including one uppercase letter, one lowercase letter, one number, and one special character.</p>
      <br />
      <br />
      {success && (
        <div>
          <h3>New Login Response:</h3>
          <p className="success">{success}</p>
          <Link to="/login" className='custom-link'>Go to Login Page</Link>
        </div>
        )}
        {error && (
          <div>
            <h3>New Login Response:</h3>
            <p className="error">{error}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default NewLoginDetailsPage;
