import { useState } from "react";
import axios from "axios";

import { userUrl } from "../utils/postgresqlApiUrls.tsx";
import { User } from "../types/userType.tsx";
import { ApiResponse } from "../types/apiResponseType.tsx";
import { useAuthContext } from "../hooks/useAuthContext.tsx";

interface useSignupState {
    signup: (username: string, email: string, password: string) => Promise<void>;
    isLoading: boolean;
    error: string;
};

export const useSignup = (): useSignupState => {
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    try {
        const { state, dispatch } = useAuthContext();
    } catch (error: any) {
        throw Error("Signup must be called within AuthContext");
    }
    

    const signup = async (name: string, email: string, password: string): Promise<void> => {
        setIsLoading(true);
        setError("");

        const signupUser = { name, email, password };

        console.log(signupUser)

        // TODO: create types for response and error
        axios.post<ApiResponse<User>>(userUrl, signupUser)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
                // if (axios.isAxiosError(error)) {
                //     setError(error.message);
                // } else {
                //     setError("Unexpected error occured");
                // }
                // setIsLoading(false);
            });
        
            setIsLoading(false);
    };

    return { signup, isLoading, error };
};


