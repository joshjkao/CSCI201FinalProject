package com.example.demo.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long userId;
	
	private String username;
	private String password;
	private String email;
	private String profilePic;
	
	
	
	public User(String username, String password, String email, String profilePic) {
		this.username = username;
		this.password = password;
		this.email = email;
		this.profilePic = profilePic;
	}

}
