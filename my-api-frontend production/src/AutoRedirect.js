import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AutoRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/new-login-details');
  }, [navigate]);
};

export default AutoRedirect;
