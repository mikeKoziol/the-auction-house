import { useState } from "react";
import axios from "axios";

import { userUrl } from "../utils/postgresqlApiUrls.tsx";
import { User } from "../types/userType.tsx";
import { ApiResponse } from "../types/apiResponseType.tsx";
import { useAuthContext } from "../hooks/useAuthContext.tsx";
import { useNavigate } from "react-router-dom";

interface useSignupState {
    signup: (username: string, email: string, password: string) => Promise<void>;
    isLoading: boolean;
    error: string;
};

export const useSignup = (): useSignupState => {
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    try {
        var { state, dispatch } = useAuthContext();
    } catch (error: any) {
        throw Error("Signup must be called within AuthContext");
    }
    

    const signup = async (username: string, email: string, password: string): Promise<void> => {
        setIsLoading(true);
        setError("");

        const signupUser = { username, email, password };

        axios.post<ApiResponse<User>>(userUrl, signupUser)
            .then(({ data }) => {
                console.log(data);
                if (data.data === null) {
                    setError("Unable to create user");
                } else {
                    localStorage.setItem("authUser", JSON.stringify(data.data));
                    dispatch({ type: "LOGIN", payload: { user: data.data } });
                    navigate("/");
                }
            })
            .catch((error) => {
                console.log(error);
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

    return { signup, isLoading, error };
};


