import React, { useEffect, useState } from 'react';
import  Keycloak from "keycloak-js"
import { Navigate } from "react-router-dom";


export const AuthorizeUser = ({ children }) => {
    const token = localStorage.getItem('token');

    if(!token){
        return <Navigate to={'/'} replace={true}></Navigate>
    }

    return children;
}