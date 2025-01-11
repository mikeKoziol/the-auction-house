import React, { createContext, useReducer, useState, useContext, ReactNode } from "react";

import { AuthReducerState, AuthReducerAction } from "../reducer/AuthReducer.tsx";

interface AuthContextType {
    state: AuthReducerState;
    dispatch: React.Dispatch<AuthReducerAction>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

