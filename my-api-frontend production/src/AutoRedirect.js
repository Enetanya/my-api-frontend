
import React, { useEffect } from 'react';

const AutoRedirect = () => {
  useEffect(() => {
    window.location.href = '/new-login-details';
  }, []);

  return null; // Since this component is handling redirection, it doesn't render anything
};

export default AutoRedirect;
