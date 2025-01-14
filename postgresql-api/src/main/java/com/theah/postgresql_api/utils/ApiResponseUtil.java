package com.theah.postgresql_api.utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.theah.postgresql_api.response.ApiResponse;

public class ApiResponseUtil {
    
    private ApiResponseUtil() { }

    public static <T> ResponseEntity<ApiResponse<T>> buildResponse(boolean success, String message, T data, HttpStatus status) {
        ApiResponse<T> response = new ApiResponse<>(success, message, data);
        return ResponseEntity.status(status).body(response);
    }

}
