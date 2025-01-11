import React, { createContext, useReducer, useState, useContext, ReactNode } from "react";

import { User } from "../types/userType.tsx";

interface LoginPayload {
    user: User;
};

interface LogoutPayload {
    user: null
};

interface UpdateRolePayload {
    role: string;
};

export interface AuthReducerState {
    user: User | null;
};

export type AuthReducerAction = 
    | { type: "LOGIN"; payload: LoginPayload }
    | { type: "LOGOUT"; payload: LogoutPayload }
    | { type: "UPDATE_ROLE"; payload: UpdateRolePayload };

export const AuthReducer = (state: AuthReducerState, action: AuthReducerAction): AuthReducerState => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload.user
            };
        case "LOGOUT":
            return { 
                ...state,
                user: action.payload.user
            };
        case "UPDATE_ROLE":
            if (state.user) {
                return {
                    ...state,
                    user: { ...state.user, role: action.payload.role }
                };
            }
            return state;
        default:
            return state;
    }
};