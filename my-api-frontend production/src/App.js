// App.js
import React from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import './styles.css';
import DocumentationPage from './components/DocumentationPage';
import ForgotPasswordPage from './components/ForgotPasswordPage'; 
import LoginPage from './components/LoginPage';
import ProtectedRoutesPage from './components/ProtectedRoutesPage';
import SignupPage from './components/SignupPage';
import NewLoginDetailsPage from './components/NewLoginDetailsPage';
import Autoredirect from './components/Autoredirect';





const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<SignupPage/>} /> 
        <Route path="/documentation" element={<DocumentationPage/>} />
        <Route path="/forgot-password" element={<ForgotPasswordPage/>} /> 
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/protected-routes" element={<ProtectedRoutesPage/>} />
   <Route path="/new-login-details" element={<NewLoginDetailsPage/>} />
        <Route path="/auto-redirect" element={<Autoredirect/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
