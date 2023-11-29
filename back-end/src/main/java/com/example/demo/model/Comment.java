package com.example.demo.model;

import java.util.Vector;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Comment {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long commentId;
	private long userId;
	private long postId;
	private String comment;
	
	public Comment(long userId, long postId, String comment) {
		this.userId = userId;
		this.postId = postId;
		this.comment = comment;
	}
	
}
