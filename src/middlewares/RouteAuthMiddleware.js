import React from 'react'
import authServices from '../services/authServices';

function RouteAuthMiddleware(props) {
  const currentUserRole = authServices.getRole();
  const validRole = props.role;

  if (currentUserRole !== validRole) {
    window.location = '/home';
  }
  
  return props.children;
}

export default RouteAuthMiddleware