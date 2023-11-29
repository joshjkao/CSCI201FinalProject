package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.User;


public interface UserRepo extends JpaRepository<User, Integer>{
    @Query("SELECT * FROM user WHERE email = :email AND password = :password")
    List<User> findByEmailAndPassword(@Param("email") String email, @Param("password") String password);
}
