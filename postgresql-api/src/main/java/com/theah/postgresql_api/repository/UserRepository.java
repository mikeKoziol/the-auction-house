package com.theah.postgresql_api.repository;

import com.theah.postgresql_api.model.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
// import org.springframework.data.jpa.repository.Query;
// import org.springframework.data.repository.query.Param;

// import java.util.List;
import java.util.Optional;
// import java.util.List;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Find user by email
    Optional<User> findByEmail(String email);

    // Exists by email
    boolean existsByEmail(String email);


    
    
} 
