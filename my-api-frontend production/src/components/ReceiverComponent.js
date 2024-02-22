import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReceiverComponent = () => {
  const [sseMessage, setSSEMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Connecting to SSE...');
  
    const eventSource = new EventSource('https://charming-figolla-3e81b7.netlify.app/forgot/sse');
  
    eventSource.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      console.log('Received message:', message);
  
      setSSEMessage(message);
  
      if (message.status === 'successful') {
        console.log('Navigating to /new-login-details...');
        navigate('/new-login-details');
        eventSource.close();
        setSSEMessage('');
      }
    });
  
    eventSource.addEventListener('error', (error) => {
      console.error('SSE Error:', error);
      eventSource.close();
    });
  
    return () => {
      console.log('Closing SSE connection...');
      eventSource.close();
    };
  }, [navigate]);
  return (
    <div>
      <h1>Server-Sent Events </h1>
      <p>Status: {sseMessage}</p>
    </div>
  );
};

export default ReceiverComponent;
