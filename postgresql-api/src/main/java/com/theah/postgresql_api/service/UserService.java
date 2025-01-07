package com.theah.postgresql_api.service;

import com.theah.postgresql_api.model.*;
import com.theah.postgresql_api.repository.*;

import jakarta.transaction.Transactional;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /* ACCESSORS */

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    /* SAVES + UPDATES */

    public User saveNewUser(User newUser) {
        validateUser(newUser);

        try {
            User user = userRepository.save(newUser);
            // TODO: hash user id to be returned
            return user;
        } catch (DataIntegrityViolationException e) {
            throw new IllegalArgumentException("A database constraint was violated: " + e.getMessage());
        } catch (Exception e) {
            throw new RuntimeException("Unexpected error occured when saving user");
        }
    }

    public User updateUser(User user) {
        validateUser(user);

        try {
            return userRepository.save(user);
        } catch (DataIntegrityViolationException e) {
            throw new IllegalArgumentException("A database constraint was violated: " + e.getMessage());
        } catch (Exception e) {
            throw new RuntimeException("Unexpected error occured when saving user");
        }
    }

    /* DELETES */

    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new IllegalArgumentException("User doesn't exist thus cannot be deleted");
        }

        /* 
         * TODO:
         * - move user into deleted users table
         * - if user owns organization, transfer to other user or call delete org.
         * - ensure no assets are still active, must export them
         */

        try {
            userRepository.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException("Unexpected error occured when deleting user");
        }
    }

    /* HELPERS */

    public void validateUser(User user) {
        if (user.getPassword() == null) {
            throw new IllegalArgumentException("User must have a password");
        } 
        if (user.getName() == null) {
            throw new IllegalArgumentException("User must have a name");
        } 
        if (user.getEmail() == null) {
            throw new IllegalArgumentException("User must have an email");
        } 
        if (user.getRole() == null) {
            throw new IllegalArgumentException("User must have a role");
        }

        if (user.getId() != null && userRepository.existsByEmail(user.getEmail())) {
            throw new IllegalArgumentException("User with email " + user.getEmail() + " already exists");
        }

        if (user.getOrganizationId() != null && user.getRole() == User.Role.independent) {
            throw new IllegalArgumentException("User cannot be an independent in an organization");
        }
        if (user.getOrganizationId() == null && user.getRole() != User.Role.independent) {
            throw new IllegalArgumentException("User not part of organization must be an independent");
        }

        //TODO: ensure organization exists


    }


}