import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AutoRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/new-login-details');
  }, [navigate]);

  return null; // Since this component only handles redirection, it doesn't need to render anything
};

export default AutoRedirect;
