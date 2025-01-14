package com.theah.postgresql_api.controller;

import com.theah.postgresql_api.service.*;
import com.theah.postgresql_api.utils.ApiResponseUtil;
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
        List<User> allUsers = userService.getAllUsers();
        String message = allUsers.isEmpty() ? "No users were found" : "Users were retrieved";
        return ApiResponseUtil.buildResponse(true, message, allUsers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Optional<User>>> getUserById(@PathVariable("id") Long id) {
        Optional<User> user = userService.getUserById(id);
        String message = user.isPresent() ? "User was retrieved" : "No user was found";
        return ApiResponseUtil.buildResponse(true, message, user, HttpStatus.OK);
    }

    @GetMapping("/{email}")
    public ResponseEntity<ApiResponse<Optional<User>>> getUserByEmail(@PathVariable("email") String email) {
        Optional<User> user = userService.getUserByEmail(email);
        String message = user.isPresent() ? "User was retrieved" : "No user was found";
        return ApiResponseUtil.buildResponse(true, message, user, HttpStatus.OK);
    }

    // TODO: handle hashing id
    @PostMapping("")
    public ResponseEntity<ApiResponse<User>> createNewUser(@RequestBody NewUserDTO newUserDTO) {
        User newUser = userService.saveNewUser(newUserDTO);
        return ApiResponseUtil.buildResponse(true, "Created new user", newUser, HttpStatus.OK);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<User>> deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
        return ApiResponseUtil.buildResponse(true, "Deleted user", null, HttpStatus.OK);
    }
    

}
