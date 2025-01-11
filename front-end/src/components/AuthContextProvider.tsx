import React, { useReducer, ReactNode } from "react";

import { AuthContext } from "../context/AuthContext.tsx";
import { AuthReducer } from "../reducer/AuthReducer.tsx";

interface AuthProviderProps {
    children: ReactNode;
};

export const AuthContextProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, {
        user: null
    });

    React.useEffect(() => {
        const storedUser = localStorage.getItem("authUser");
        if (storedUser) {
            dispatch({ type: "LOGIN", payload: JSON.parse(storedUser) });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

