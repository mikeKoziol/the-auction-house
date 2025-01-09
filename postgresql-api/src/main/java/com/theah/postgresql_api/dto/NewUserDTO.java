package com.theah.postgresql_api.dto;

import javax.validation.constraints.NotBlank;

import com.theah.postgresql_api.model.*;


public class NewUserDTO {

    @NotBlank
    private String password;

    @NotBlank
    private String name;

    @NotBlank
    private String email;

    // Constructor
    public NewUserDTO() { }

    // Getters + Setters
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
