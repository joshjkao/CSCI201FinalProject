package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Post;

public interface PostRepo extends JpaRepository<Post, Integer> {
// Get all posts associated with a user
}
