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
	
	public void setUserId(Long u) {userId = u;}
	public void setPostId(Long u) {postId = u;}
	public void setComment(String u) {comment = u;}
	
	public String getComment() {return comment;}
	public Long getPostId() {return postId;}
	
	public Comment(long userId, long postId, String comment) {
		this.userId = userId;
		this.postId = postId;
		this.comment = comment;
	}
	
	Comment() {
		
	}
	
}
