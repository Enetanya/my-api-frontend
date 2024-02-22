import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProtectedRoutesPage = () => {
  const [createMessage, setCreateMessage] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');

  const handleSubmit = async (e, action) => {
    e.preventDefault();
    try { let requestBody;
       if (action === 'create' || action === 'update') {
        requestBody = { 
        Name: e.target.elements.Name.value,
        Districts: e.target.elements.Districts.value,
        Hospitals: e.target.elements.Hospitals.value,
        Universities: e.target.elements.Universities.value,
        NotableSites: e.target.elements.NotableSites.value,
        ClosestAirports: e.target.elements.ClosestAirports.value,
        MainTrainStations: e.target.elements.MainTrainStations.value,
        password1: e.target.elements.password1.value,
        password2: e.target.elements.password2.value
      };
     }
     const response = await fetch(`https://counties-unitauthorities-england-api.netlify.app/main/${action}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();

    switch (action) {
      case 'create':
        setCreateMessage(data.message);
        setUpdateMessage('');
        setDeleteMessage('');
        break;
      case 'update':
        setUpdateMessage(data.message);
        setCreateMessage('');
        setDeleteMessage('');
        break;
      default:
        break;
    }

    // Reset the form after submission
    e.target.reset();
  } catch (error) {
    console.error(`Error ${action} operation:`, error);
    // Handle error condition
  }
};

const handleDelete = async (e) => {
  e.preventDefault();

  try {
    const requestBody = {
       Name: e.target.elements.Name.value,
       password1: e.target.elements.password1.value,
       password2: e.target.elements.password2.value
      };
      const response = await fetch(`https://counties-unitauthorities-england-api.netlify.app/main/delete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      setDeleteMessage(data.message);
      setCreateMessage('');
      setUpdateMessage('');
// Reset the form after submission
e.target.reset();
} catch (error) {
  console.error('Error deleting:', error);
  // Handle error condition
}
};
return (
  <div>
    <h1>Manage Counties and Unitary Authorities in England API Data</h1>
    <br />

    {/* Add Form */}
    <form onSubmit={(e) => handleSubmit(e, 'create')}>
      <h2>Add County and/or Unitary Authority</h2>
      <input type='text' name='Name' placeholder='Enter Name' required />
        <input type='text' name='Districts' placeholder='Enter Districts (comma-separated)' />
       <input type='text' name='Hospitals' placeholder='Enter Updated Hospitals (comma-separated)' />
        <br />
        <input type='text' name='Universities' placeholder='Enter Updated Universities (comma-separated)' />
        <input type='text' name='NotableSites' placeholder='Enter Updated Notable Sites (comma-separated)' />
        <input type='text' name='ClosestAirports' placeholder='Enter Updated Closest Airports (comma-separated)' />
        <br />
        <input type='text' name='MainTrainStations' placeholder='Enter Updated Main Train Stations (comma-separated)' />
        <br />
        <input type='password' name='password1' placeholder='Password 1' required />
        <input type='password' name='password2' placeholder='Password 2' required />
        <br />
      <button type='submit'>Create</button>
    </form>
    {/* Display success and error messages */}
    {createMessage && <p className="success">{createMessage}</p>}
    <br />
    
    {/* Update Form */}
    <form onSubmit={(e) => handleSubmit(e, 'update')}>
      <h2>Update County and/or Unitary Authority</h2>
      <input type='text' name='Name' placeholder='Enter Name to Update' required />
        <input type='text' name='Districts' placeholder='Enter Updated Districts (comma-separated)' />
       <input type='text' name='Hospitals' placeholder='Enter Updated Hospitals (comma-separated)' />
        <br />
        <input type='text' name='Universities' placeholder='Enter Updated Universities (comma-separated)' />
        <input type='text' name='NotableSites' placeholder='Enter Updated Notable Sites (comma-separated)' />
        <input type='text' name='ClosestAirports' placeholder='Enter Updated Closest Airports (comma-separated)' />
        <br />
        <input type='text' name='MainTrainStations' placeholder='Enter Updated Main Train Stations (comma-separated)' />
        <br />
        <input type='password' name='password1' placeholder='Password 1' required />
        <input type='password' name='password2' placeholder='Password 2' required />
        <br />
      <button type='submit'>Update</button>
    </form>
    {/* Display success and error messages */}
    {updateMessage && <p className="success">{updateMessage}</p>}
    <br />

    {/* Delete Form */}
    <form onSubmit={handleDelete}>
      <h2>Delete County and/or Unitary Authority</h2>
      <input type='text' name='Name' placeholder='Enter Name to Delete' required />

        <br />
        <input type='password' name='password1' placeholder='Password 1' required />
        <input type='password' name='password2' placeholder='Password 2' required />
        <br />
      <button type='submit'>Delete</button>
    </form>
    
    {deleteMessage && <p className="success">{deleteMessage}</p>}
    
    <br />
    <Link to="/login" className='custom-link'>Logout</Link>

  </div>
);
};

export default ProtectedRoutesPage;
