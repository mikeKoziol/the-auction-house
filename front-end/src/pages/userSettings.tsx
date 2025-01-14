import React from "react";

import { useLogout } from "../hooks/useLogout.tsx";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const UserSettingsPage: React.FC= () => {
    const { logout } = useLogout();

    const handleLogout = (event: React.SyntheticEvent): void => {
        logout();
    };

    return (
        <Stack
            direction="column"
        >

            <h1>Settings</h1>

            <Button
                id="logout"
                variant="contained"
                onClick={handleLogout}
                sx={
                    {
                        minWidth: "90px",
                        width: "90px",
                        height: "40px",
                        backgroundColor: "black"
                    }
                }
            >
                Logout
            </Button>

        </Stack>
    );
};
export default UserSettingsPage;



