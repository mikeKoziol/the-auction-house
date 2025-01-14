package com.theah.postgresql_api.dto;

import javax.validation.constraints.NotBlank;

public class LoginDTO {

    @NotBlank
    private String password;

    @NotBlank
    private String email;

    // Constructor
    public LoginDTO() { }

    // Getters + Setters
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
