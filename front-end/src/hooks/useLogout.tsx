import { useAuthContext } from "../hooks/useAuthContext.tsx";

interface useLogoutState {
    logout: () => void;
};

export const useLogout = (): useLogoutState => {

    try {
        var { dispatch } = useAuthContext();
    } catch (error: any) {
        throw Error("Logout must be called within AuthContext");
    }

    const logout = (): void => {
        dispatch({ type: "LOGOUT", payload: { user: null } });
        localStorage.removeItem("authUser");
    };

    return { logout };
};



