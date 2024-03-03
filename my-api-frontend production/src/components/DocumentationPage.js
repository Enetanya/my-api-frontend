// DocumentationPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// DocumentationPage.js

const DocumentationPage = () => {
  const [apiKey, setApiKey] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const generateApiKey = async () => {
    try {
      const response = await fetch('https://counties-unitauthorities-england-api.netlify.app/main/process.env.gy', {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json();
        setApiKey(data.apiKey);
        setSuccess(data.success);
        setError('');
      } else {
        const data = await response.json();
        setError(data.error);
        setSuccess('');
      }
    } catch (err) {
      console.error(err);
      setError('Error generating API key.');
      setSuccess('');
    }
  };
  const clearMessages = () => {
    setApiKey('');
    setSuccess('');
    setError('');
  };


  return (
    <div>
      <h1>Counties & Unitary Authorities API Documentation</h1>

     {/* Introduction Section */}
      <h2>Introduction</h2>
      <h3>Objective</h3>
      <p>To produce a concise and comprehensive view of detailed information for 48 Counties and 30 Unitary Authorities in England.</p>

      <h3>Data Structure</h3>
      <p>Utilized a structured dataset encompassing essential details for each administrative region, including names, districts, hospitals, universities, notable sites, closest airports, and main train stations.</p>

      <h3>Coverage</h3>
      <p>Encompassed comprehensive information crucial for analysis and reference purposes, ensuring easy access and retrieval of vital details for administrative regions.</p>

      <h3>Technologies</h3>
      <ul>
        <li>Frontend Framework: Utilized React for building dynamic and interactive user interfaces.</li>
        <li>HTML: Used HTML for structuring web pages and content.</li>
        <li>Styling: Employed CSS for design and layout.</li>
        <li>Backend Framework: Employed Node.js and Express.js to create a robust API, facilitating seamless data handling and retrieval.</li>
        <li>Database: MongoDB for efficient data storage and management.</li>
      </ul>

      {/* Authentication Section */}
      <h2>Authentication</h2>
      <p>Do keep your login details as you will need them for subsequent visits to access this documentation page.</p>

      <h3>Forgot Login Details</h3>
      <p>Users can reset their login details by accessing the "Forgot Password" link available on both the signup and login pages, after which a reset link is sent to the registered email address to facilitate the change of login details.</p>
      <h3>Accessing Endpoint</h3>
      <p>You need an API key which you will include in the URL when accessing the endpoints.</p>

      {/* Generate API key Form */}
      <form onSubmit={(e) => { e.preventDefault(); generateApiKey(); }}>
        <button type="submit">Generate an API key</button>
      </form>
      <br />

      {/* Render the generated API key */}
      {apiKey && (
        <>
          <strong>API Key: {apiKey}</strong>
          <p className="success">{success}</p>
        </>
      )}
      {error && <p className="error">{error}</p>}

     {/* Instructions for including API key */}
      <br />
      <strong>You have two options on how to include API key in your requests:</strong>
      <ul>
        <li>Include the API key as a query parameter in your URL:https://counties-unitauthorities-england-api.netlify.app/main/place?apiKey=YOUR_API_KEY&use_header=false</li>
        <li>Use the `Authorization` header in your request with the API key: `Authorization: YOUR_API_KEY`</li>
      </ul>

      {/* Endpoints Section */}
      <h3>Endpoints</h3>

      {/* GET /place Endpoint */}
      <h4>GET /place</h4>
      <p>Description: Retrieves information about all Counties and Unitary Authorities.</p>
      <strong>Request:</strong>
      <ul>
        <li>HTTP Method: GET</li>
        <li>Endpoint: /main/place</li>
        <li>Headers: None</li>
        <li>Query Parameters:
          <ul>
            <li>apiKey: YOUR_API_KEY</li>
            <li>use_header: false</li>
          </ul>
        </li>
        <li>URL:https://counties-unitauthorities-england-api.netlify.app/main/place?api_key=YOUR_API_KEY&use_header=false</li>
      </ul>
      <strong>Response Format:</strong>
      <ul>
        <li>JSON</li>
        <p>JSON Example:</p>
        <pre>
          {/* Your JSON example here */}
        </pre>
      </ul>

      {/* GET /place/{Name} Endpoint */}
      <h4>GET /place/:Name</h4>
      <p>Description: Retrieves information about a specific County or Unitary Authority by 'Name'.</p>
      <strong>Request:</strong>
      <ul>
        <li>HTTP Method: GET</li>
        <li>Endpoint: /place/:Name</li>
        <li>Headers: None</li>
        <li>Query Parameters:
          <ul>
            <li>apiKey: YOUR_API_KEY</li>
            <li>use_header: false</li>
            <li>Name: Replace with County or Unitary Authority. Adjust the URL based on if the 'Name' has a single word (No space) or multiple words (With space).</li>
          </ul>
        </li>
        <li>URL:
          <ul>
            <li>No space: https://counties-unitauthorities-england-api.netlify.app/main/place/Name?api_key=YOUR_API_KEY&use_header=false</li>
            <li>With space: https://counties-unitauthorities-england-api.netlify.app/main/place/A%20B%20C?api_key=YOUR_API_KEY&use_header=false; Replace spaces in URL parameters with '%20' or use '+' in query parameters. Assuming Name = 'A B C'.</li>
          </ul>
        </li>
      </ul>
      <strong>Response Format:</strong>
      <ul>
        <li>JSON</li>
        <p>JSON Example:</p>
        <pre>
          {/* Your JSON example here */}
        </pre>
      </ul>

      {/* Error Handling Section */}
      <h2>Error Handling</h2>

      {/* GET /place Error Handling */}
      <h3>GET /place</h3>
      <p>Possible Errors:</p>
      <ul>
        {/* Your error handling details here */}
      </ul>
      <p>Handling:</p>
      <ul>
        {/* Your error handling details here */}
      </ul>

      {/* GET /place/{name} Error Handling */}
      <h3>GET /place/:name</h3>
      <p>Possible Errors:</p>
      <ul>
        {/* Your error handling details here */}
      </ul>
      <p>Handling:</p>
      <ul>
        {/* Your error handling details here */}
      </ul>

      {/* Logout Section */}
      <h2>Logout</h2>
      <p>Once your tasks are completed, it's recommended to log out for security purposes. Use the appropriate logout functionality application below to terminate the sessions.</p>
      <Link to="/login" onClick={clearMessages} className='custom-link'>Logout</Link>

      {/* Conclusion Section */}
      <h2>Conclusion</h2>
      <p>The project aimed to provide a detailed overview of Counties and Unitary Authorities in England, ensuring organized and accessible information for analysis and utilization purposes.</p>

      {/* List of Counties and Unitary Authorities Covered */}
      <h2>Appendix</h2>
      <p>Below is a list of the covered Counties & Unitary Authorities in England.</p>

      <h3>Ceremonial Counties:</h3>
      <ol>
       <li>Bedfordshire</li>
      <li>Berkshire</li>
      <li>Bristol</li>
      <li>Buckinghamshire</li>
      <li>Cambridgeshire</li>
      <li>Cheshire</li>
      <li>City of London</li>
      <li>Cornwall</li>
      <li>County Durham</li>
      <li>Cumbria</li>
      <li>Derbyshire</li>
      <li>Devon</li>
      <li>Dorset</li>
      <li>East Riding of Yorkshire</li>
      <li>East Sussex</li>
      <li>Essex</li>
      <li>Gloucestershire</li>
      <li>Greater London</li>
      <li>Greater Manchester</li>
      <li>Hampshire</li>
      <li>Herefordshire</li>
      <li>Hertfordshire</li>
      <li>Isle of Wight</li>
      <li>Kent</li>
      <li>Lancashire</li>
      <li>Leicestershire</li>
      <li>Lincolnshire</li>
      <li>Merseyside</li>
      <li>Norfolk</li>
      <li>Northamptonshire</li>
      <li>Northumberland</li>
      <li>North Yorkshire</li>
      <li>Nottinghamshire</li>
      <li>Oxfordshire</li>
      <li>Rutland</li>
      <li>Shropshire</li>
      <li>Somerset</li>
      <li>South Yorkshire</li>
      <li>Staffordshire</li>
      <li>Suffolk</li>
      <li>Surrey</li>
      <li>Tyne and Wear</li>
      <li>Warwickshire</li>
      <li>West Midlands</li>
      <li>West Sussex</li>
      <li>West Yorkshire</li>
      <li>Wiltshire</li>
      <li>Worcestershire</li>
      </ol>

      <h3>Unitary Authorities:</h3>
      <ol>
       <li>Bedford Borough</li>
      <li>Blackburn with Darwen</li>
      <li>Bracknell Forest</li>
      <li>Central Bedfordshire</li>
      <li>Cheshire East</li>
      <li>Cheshire West and Chester</li>
      <li>Darlington</li>
      <li>Halton</li>
      <li>Hartlepool</li>
      <li>Isle of Wight</li>
      <li>Milton Keynes</li>
      <li>North East Lincolnshire</li>
      <li>North Lincolnshire</li>
      <li>Peterborough</li>
      <li>Plymouth</li>
      <li>Portsmouth</li>
      <li>Reading</li>
      <li>Redcar and Cleveland</li>
      <li>Rutland</li>
      <li>Slough</li>
      <li>Southampton</li>
      <li>Southend-on-Sea</li>
      <li>Stockton-on-Tees</li>
      <li>Stoke-on-Trent</li>
      <li>Swindon</li>
      <li>Telford and Wrekin</li>
      <li>Thurrock</li>
      <li>Warrington</li>
      <li>West Berkshire</li>
      <li>Windsor and Maidenhead</li>
      <li>Wokingham</li>
      </ol>
      <h2>Strictly Restricted</h2>
      <h3>Note:</h3>
      <p>You are required to complete a Two-Password Verification process to make changes to the API using the admin link below.</p>
      <Link to="/protected-routes" className='custom-link'>ADMIN ACCESS</Link>
      <br />
      <br />
      </div>
      )
      ;
    };
export default DocumentationPage;

