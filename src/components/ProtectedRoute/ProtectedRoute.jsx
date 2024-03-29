import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
//import useUser from '../../context/userContext';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
  //const { userloggedIn } = useUser();
  let location = useLocation();
  const isAuthenticated=!!Cookies.get('auth');

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
