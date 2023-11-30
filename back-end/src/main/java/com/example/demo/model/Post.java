package com.example.demo.model;

import java.util.Vector;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Post {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long postId;
	private long userId;
	private String animal;
	private String postImage;
	private int likes;
	private String caption;
	
	public Post(long userId, String animal, int likes, String postImage) {
		this.userId = userId;
		this.likes = likes;
		this.postImage = postImage;
		this.animal = animal;
	}
	
	Post() {
		
	}

}

