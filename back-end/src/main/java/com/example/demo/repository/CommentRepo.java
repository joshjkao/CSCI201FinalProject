package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Comment;

@Repository
public interface CommentRepo extends JpaRepository<Comment, Long>{
	List<Comment> findByPostId(Long postId);
}
