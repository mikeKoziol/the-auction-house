package com.theah.postgresql_api.model;

import com.theah.postgresql_api.dto.*;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    // must check if a user isActive then for unique emails
    @Column(nullable = false, unique = true)
    private String email;

    @OneToOne
    @JoinColumn(name = "organizationId", nullable = true, insertable = true, updatable = true)
    private Organization organizationId;

    @Column(nullable = false)
    private Role role;

    @Column(nullable = false, updatable = false)
    private LocalDateTime dateCreated;

    public enum Role {
        admin,
        independent,
        asset_manager,
        auctioneer,
        buyer,
        viewer
    }

    // Constructors
    public User() { }

    // Creates independent users
    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = Role.independent;

        this.dateCreated = LocalDateTime.now();
        this.organizationId = null;
    }

    public User(NewUserDTO newUserDTO) {
        this.name = newUserDTO.getName();
        this.email = newUserDTO.getEmail();
        this.password = newUserDTO.getPassword();
        this.role = newUserDTO.getRole();

        this.dateCreated = LocalDateTime.now();
        this.organizationId = newUserDTO.getOrganizationId();
    }

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

    public Organization getOrganizationId() {
        return organizationId;
    }

    public void setOrganizationId(Organization organizationId) {
        this.organizationId = organizationId;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
    }

}
