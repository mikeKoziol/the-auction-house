import { useContext } from "react";

import { AuthContext } from "../context/AuthContext.tsx";

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw Error("Cannot useAuthContext outside of AuthContextProvider");
    }

    return context;
};



