package com.theah.postgresql_api.advice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.theah.postgresql_api.response.ApiResponse;
import com.theah.postgresql_api.utils.ApiResponseUtil;

@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ApiResponse<Void>> handleIllegalArgumentException(IllegalArgumentException e) {
        return ApiResponseUtil.buildResponse(false, e.getMessage(), null, HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse<Void>> handleGenericException(Exception e) {
        return ApiResponseUtil.buildResponse(false, e.getMessage(), null, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
