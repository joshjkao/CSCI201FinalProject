package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Post;

@Repository
public interface PostRepo extends JpaRepository<Post, Integer> {
// Get all posts associated with a user
	List<Post> findByUserId(Long user_id);
}
