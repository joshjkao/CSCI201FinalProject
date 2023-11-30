package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Comment;
import com.example.demo.repository.CommentRepo;

@Service
public class CommentService {
	@Autowired
	private CommentRepo commentRepo;
	
	public List<Comment> findByPostId(Long postId) {
		return commentRepo.findByPostId(postId);
	}
	
	public List<Comment> addComment(Comment comment) {
		commentRepo.save(comment);
		return commentRepo.findByPostId(comment.getPostId());
	}
}