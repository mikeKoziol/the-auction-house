import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext.tsx";


export const AuthRestrictedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { state } = useAuthContext();

    console.log(state);

    if (state.user) {
        return <Navigate to="/"/>
    }

    return <>{children}</>;
};


