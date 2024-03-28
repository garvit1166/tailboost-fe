import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useUser from '../../context/userContext';

const ProtectedRoute = ({ children }) => {
  const { userloggedIn } = useUser();
  let location = useLocation();

  if (!userloggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
