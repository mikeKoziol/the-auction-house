import { useState } from "react";
import axios from "axios";

import { userLoginUrl } from "../utils/postgresqlApiUrls.tsx";
import { User } from "../types/userType.tsx";
import { ApiResponse } from "../types/apiResponseType.tsx";
import { useAuthContext } from "../hooks/useAuthContext.tsx";
import { useNavigate } from "react-router-dom";


interface useLoginState {
    login: (email: string, password: string) => Promise<void>;
    isLoading: boolean;
    error: string;
};

export const useLogin = (): useLoginState => {
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    try {
        var { dispatch } = useAuthContext();
    } catch (error: any) {
        throw Error("Login must be called within AuthContext");
    }
    

    const login = async (email: string, password: string): Promise<void> => {
        setIsLoading(true);
        setError("");

        const loginUser = { email, password };

        axios.post<ApiResponse<User>>(userLoginUrl, loginUser)
            .then(({ data }) => {
                if (data.data === null) {
                    setError("Unable to login user");
                } else {
                    localStorage.setItem("authUser", JSON.stringify(data.data));
                    dispatch({ type: "LOGIN", payload: { user: data.data } });
                    navigate("/");
                }
            })
            .catch((error) => {
                if (axios.isAxiosError<ApiResponse<null>>(error)) {
                    const errMessage = error.response?.data?.message;
                    if (errMessage) setError(errMessage);
                    else setError("Didn't recieve error message");
                } else {
                    setError("Unexpected error occured");
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return { login, isLoading, error };
};


