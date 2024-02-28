import useAuth from '@/hooks/useAuth';
import React from 'react'
import {Navigate, Outlet, useLocation} from 'react-router-dom'

const RequiredAuth = ({ allowedRoles = [] }) => {
  const {isAuthenticated, userRole, user} = useAuth()
  const location = useLocation();
  
  console.log("userRole in required auth", userRole)

  const roles = ['admin', 'user', 'staff', 'partner'];
  return isAuthenticated && roles?.find((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : isAuthenticated ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace={true} />
  ) : (
    <>
      {userRole === "staff" ? (
        <Navigate to="/onboard/login" state={{ from: location }} replace={true} />
      ) : (
        <Navigate to="/auth/users" state={{ from: location }} replace={true} />
      )}
    </>
  );
}

export default RequiredAuth