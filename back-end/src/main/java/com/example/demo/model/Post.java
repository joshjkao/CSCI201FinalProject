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
	private String postUrl;
	private int likes;
	private String caption;
	
	public Post(String animal, int likes, String postUrl, String caption, long userId) {
		this.userId = userId;
		this.likes = likes;
		this.postUrl = postUrl;
		this.animal = animal;
		this.caption = caption;
	}
	
	Post() {
		
	}

}

