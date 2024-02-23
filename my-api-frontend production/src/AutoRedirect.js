
import { useNavigate } from 'react-router-dom';

const AutoRedirect = () => {
  const navigate = useNavigate();
  navigate('/new-login-details');
  };

export default AutoRedirect;
