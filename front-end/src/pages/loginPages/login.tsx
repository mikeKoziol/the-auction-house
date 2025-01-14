import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin.tsx";

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

import "../../styles/TextFieldStyle.css";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { login, isLoading, error } = useLogin();

    const handleSubmit = async (event: React.SyntheticEvent): Promise<void> => {
        event.preventDefault();

        // send info to api and handle error or success
        await login(email, password);
    };

    const emailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.target.value);
    };

    const passwordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value);
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
                        height: "300px",
                        padding: "20px 5px",
                        alignContent: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.1)"
                    }
                }
            >

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
                    type="password"
                    value={password}
                    onChange={passwordChange}
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
                        {error}
                    </Typography>
                </Stack>

                <Typography
                    id=""
                    sx={
                        {
                            alignSelf: "center",
                            wordWrap: "break-word"
                        }
                    }
                >
                    Create a new account <Link to="/login/signup">here</Link>.
                </Typography>

                <Typography
                    id=""
                    sx={
                        {
                            alignSelf: "center"
                        }
                    }
                >
                    Forgot your password? Click <Link to="/login/forgot-password">here</Link>.
                </Typography>

            </Stack>
        </Stack>
    );
};

export default LoginPage;