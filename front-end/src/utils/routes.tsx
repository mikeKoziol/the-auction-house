import React from "react";

import HomePage from "../pages/home.tsx";
import TradePage from "../pages/trade.tsx";


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
    }
];