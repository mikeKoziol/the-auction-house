import React from "react";

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

import "../../styles/TextFieldStyle.css";


const ForgotPasswordPage: React.FC = () => {
    let hasError = true;

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

                <Typography
                    sx={
                        {
                            alignSelf: "flex-start"
                        }
                    }
                >
                    To reset your password, enter your email and check your inbox.
                </Typography>

                <TextField 
                    id="email-field" 
                    label="Email"
                    className="textfield-style"
                />

                <Stack
                    direction="row"
                    spacing={1}
                >
                    <Button 
                        id="submit"
                        variant="contained"
                        sx={
                            {
                                minWidth: "90px",
                                width: "90px",
                                height: "40px",
                                backgroundColor: "black"
                            }
                        }

                    >
                        Reset
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
                        {hasError && "error text"}
                    </Typography>
                </Stack>

            </Stack>
        </Stack>
    );
};
export default ForgotPasswordPage;