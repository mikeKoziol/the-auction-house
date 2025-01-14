package com.theah.postgresql_api.dto;

import javax.validation.constraints.NotBlank;

import com.theah.postgresql_api.model.*;


public class ExistingUserDTO {

    @NotBlank
    private Long id;

    @NotBlank
    private String password;

    private String username;

    @NotBlank
    private String email;

    private Organization organizationId;

    @NotBlank
    private User.Role role;

    // Constructor
    public ExistingUserDTO() { }

    // Getters + Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Organization getOrganizationId() {
        return organizationId;
    }

    public void setOrganizationId(Organization organizationId) {
        this.organizationId = organizationId;
    }

    public User.Role getRole() {
        return role;
    }

    public void setRole(User.Role role) {
        this.role = role;
    }

}
