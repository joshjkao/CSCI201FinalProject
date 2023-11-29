package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Comment;


public interface CommentRepo extends JpaRepository<Comment, Integer>{
// Get all comments associated with a post
}
