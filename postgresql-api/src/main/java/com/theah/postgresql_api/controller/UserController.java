package com.theah.postgresql_api.controller;

import com.theah.postgresql_api.service.*;
import com.theah.postgresql_api.model.*;
import com.theah.postgresql_api.dto.*;
import com.theah.postgresql_api.response.*;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/users")
public class UserController {
    
    private UserService userService;

    @GetMapping("/")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@RequestParam Long id) {
        return userService.getUserById(id);
    }

    @GetMapping("/{email}")
    public Optional<User> getUserByEmail(@RequestParam String email) {
        return userService.getUserByEmail(email);
    }

    // TODO: return a hashed key for the user id generated?
    @PostMapping("/")
    public ResponseEntity<ApiResponse<User>> createNewUser(@RequestBody NewUserDTO newUserDTO) {
        //TODO: process POST request

        
        
        return entity;
    }
    
    
    

}
