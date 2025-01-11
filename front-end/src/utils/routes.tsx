import React from "react";

import HomePage from "../pages/home.tsx";
import TradePage from "../pages/trade.tsx";
import LoginPage from "../pages/loginPages/login.tsx";
import SignupPage from "../pages/loginPages/signup.tsx";
import ForgotPasswordPage from "../pages/loginPages/forgot-password.tsx";


type Route = {
    path: string;
    element: React.ReactNode;
};

export const ROUTES: Route[] = [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/trade",
        element: <TradePage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/login/signup",
        element: <SignupPage />
    },
    {
        path: "/login/forgot-password",
        element: <ForgotPasswordPage />
    }
];