import React from 'react'
import {Navigate, Outlet, useLocation} from 'react-router-dom'

const RequiredAuth = ({allowedRoles = []}) => {
    const location = useLocation();

    const roles = ['admin', 'user', 'staff', 'partner'];
  return (
    roles?.find((role) =>allowedRoles.includes(role)) ? <Outlet/> : <Navigate to="/auth/login" state={{from: location}} replace={true}/>
  )
}

export default RequiredAuth