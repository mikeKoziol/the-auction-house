package com.theah.postgresql_api.controller;

import com.theah.postgresql_api.service.*;
import com.theah.postgresql_api.model.*;
import com.theah.postgresql_api.dto.*;
import com.theah.postgresql_api.response.*;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


// TODO: secure mappings, except create user, by requiring userId hash each request
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("")
    public ResponseEntity<ApiResponse<List<User>>> getAllUsers() {
        try {
            List<User> allUsers = userService.getAllUsers();
            String message = allUsers.isEmpty() ? "No users were found" : "Users were retrieved";
            ApiResponse<List<User>> response = new ApiResponse<>(true, message, allUsers);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            String errMessage = e.getMessage();
            ApiResponse<List<User>> errResponse = new ApiResponse<>(false, errMessage, null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errResponse);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Optional<User>>> getUserById(@PathVariable("id") Long id) {
        try {
            Optional<User> user = userService.getUserById(id);
            String message = user.isPresent() ? "User was retrieved" : "No user was found";
            ApiResponse<Optional<User>> response = new ApiResponse<>(true, message, user);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            String errMessage = e.getMessage();
            ApiResponse<Optional<User>> errResponse = new ApiResponse<>(false, errMessage, null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errResponse);
        }
    }

    @GetMapping("/{email}")
    public ResponseEntity<ApiResponse<Optional<User>>> getUserByEmail(@PathVariable("email") String email) {
        try {
            Optional<User> user = userService.getUserByEmail(email);
            String message = user.isPresent() ? "User was retrieved" : "No user was found";
            ApiResponse<Optional<User>> response = new ApiResponse<>(true, message, user);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            String errMessage = e.getMessage();
            ApiResponse<Optional<User>> errResponse = new ApiResponse<>(false, errMessage, null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errResponse);
        }
    }

    // TODO: handle hashing id
    @PostMapping("")
    public ResponseEntity<ApiResponse<User>> createNewUser(@RequestBody NewUserDTO newUserDTO) {
        try {
            User newUser = userService.saveNewUser(newUserDTO);
            String message = "Created new user";
            ApiResponse<User> response = new ApiResponse<>(true, message, newUser);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            String errMessage = e.getMessage();
            ApiResponse<User> errResponse = new ApiResponse<>(false, errMessage, null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errResponse);
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<User>> deleteUser(@PathVariable("id") Long id) {
        try {
            userService.deleteUser(id);
            String message = "Deleted user";
            ApiResponse<User> response = new ApiResponse<>(true, message, null);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            String errMessage = e.getMessage();
            ApiResponse<User> errResponse = new ApiResponse<>(false, errMessage, null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errResponse);
        }
    }
    

}
