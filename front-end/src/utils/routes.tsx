import React from "react";

import HomePage from "../pages/home.tsx";
import TradePage from "../pages/trade.tsx";
import LoginPage from "../pages/loginPages/login.tsx";
import NewUserPage from "../pages/loginPages/new-user.tsx";
import ResetPasswordPage from "../pages/loginPages/reset-password.tsx";


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
        path: "/login/new-user",
        element: <NewUserPage />
    },
    {
        path: "/login/reset-password",
        element: <ResetPasswordPage />
    }
];