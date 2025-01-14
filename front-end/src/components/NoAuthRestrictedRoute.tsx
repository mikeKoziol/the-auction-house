import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext.tsx";


export const NoAuthRestrictedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { state } = useAuthContext();

    if (state.user) {
        return <Navigate to="/"/>;
    }

    return <>{children}</>;
};


