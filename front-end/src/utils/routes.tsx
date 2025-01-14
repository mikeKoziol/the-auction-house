import React from "react";

import HomePage from "../pages/home.tsx";
import TradePage from "../pages/trade.tsx";
import LoginPage from "../pages/loginPages/login.tsx";
import SignupPage from "../pages/loginPages/signup.tsx";
import ForgotPasswordPage from "../pages/loginPages/forgot-password.tsx";
import UserSettingsPage from "../pages/userSettings.tsx";
import { AuthRestrictedRoute } from "../components/AuthRestrictedRoute.tsx";
import { NoAuthRestrictedRoute } from "../components/NoAuthRestrictedRoute.tsx";


type Route = {
    path: string;
    element: React.ReactNode;
};

export const ROUTES: Route[] = [
    {
        path: "/",
        element: (
            <AuthRestrictedRoute>
                <HomePage />
            </AuthRestrictedRoute>
        )
    },
    {
        path: "/trade",
        element: (
            <AuthRestrictedRoute>
                <TradePage />
            </AuthRestrictedRoute>
        )
    },
    {
        path: "/login",
        element: (
            <NoAuthRestrictedRoute>
                <LoginPage />
            </NoAuthRestrictedRoute>
        )
    },
    {
        path: "/login/signup",
        element: (
            <NoAuthRestrictedRoute>
                <SignupPage />
            </NoAuthRestrictedRoute>
        )
    },
    {
        path: "/login/forgot-password",
        element: <ForgotPasswordPage />
    },
    {
        path: "/user/settings",
        element: (
            <AuthRestrictedRoute>
                <UserSettingsPage />
            </AuthRestrictedRoute>
        )
    }
];