import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import { useSignup } from "../../hooks/useSignup.tsx";

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

import "../../styles/TextFieldStyle.css";


const SignupPage: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [retypePassword, setRetypePassword] = useState<string>("");
    const [displayError, setDisplayError] = useState<string>("");

    const { signup, isLoading, error } = useSignup();

    // TODO: cleanup this line of code, move into the single return at the end
    if (localStorage.getItem("authUser") !== null) {
        return (
            <Navigate to="/"/>
        );
    }

    const handleSubmit = async (event: React.SyntheticEvent): Promise<void> => {
        event.preventDefault();

        if (password !== retypePassword) {
            setDisplayError("Passwords must match");
            return;
        }

        // send info to api and handle error or success
        await signup(username, email, password);
    };

    const usernameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setUsername(event.target.value);
        setDisplayError("");
    };

    const emailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.target.value);
        setDisplayError("");
    };

    const passwordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value);
        setDisplayError("");
    };

    const retypePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setRetypePassword(event.target.value);
        setDisplayError("");
    };

    return (
        <Stack
            direction="column"
            sx={
                {
                    display: "flex",
                    alignItems: "center"
                }
            }
        >
            <Stack
                direction="column"
                spacing={2}
                sx={
                    {
                        width: "325px",
                        height: "400px",
                        padding: "20px 5px",
                        alignContent: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.1)"
                    }
                }
            >
                <Typography
                    sx={
                        {
                            alignSelf: "flex-start"
                        }
                    }
                >
                    To create a new user, fill out the following fields.
                </Typography>

                <TextField 
                    id="username-field" 
                    label="Username"
                    value={username}
                    onChange={usernameChange}
                    className="textfield-style"
                />

                <TextField 
                    id="email-field" 
                    label="Email"
                    value={email}
                    onChange={emailChange}
                    className="textfield-style"
                />

                <TextField 
                    id="password-field" 
                    label="Password"
                    value={password}
                    onChange={passwordChange}
                    type="password"
                    className="textfield-style"
                />

                <TextField 
                    id="retype-password-field" 
                    label="Re-type Password"
                    value={retypePassword}
                    onChange={retypePasswordChange}
                    type="password"
                    className="textfield-style"
                />

                <Stack
                    direction="row"
                    spacing={1}
                    
                >
                    <Button 
                        id="submit"
                        variant="contained"
                        onClick={handleSubmit}
                        disabled={isLoading}
                        sx={
                            {
                                minWidth: "90px",
                                width: "90px",
                                height: "40px",
                                backgroundColor: "black"
                            }
                        }
                    >
                        Submit
                    </Button>
                    
                    <Typography
                        id="login-error-text"
                        sx={
                            {
                                minHeight: "20px",
                                maxWidth: "calc(100% - 95px)",
                                color: "red",
                                alignContent: "center",
                                wordWrap: "break-word"
                            }
                        }
                    >
                        {error || displayError}
                    </Typography>
                </Stack>

            </Stack>
        </Stack>
    );
};

export default SignupPage;