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
	
	public Long getID() {return userId;}
	public String getUsername() {return username;}
	public String getPassword() {return password;}
	public String getEmail() {return email;}
	public String getProfilePic() {return profilePic;}
	
	public void setUsername(String s) {username = s;}
	public void setPassword(String s) {password = s;}
	public void setEmail(String s) {email = s;}
	public void setProfilePic(String s) {profilePic = s;}
	
	public User() {
		username = null;
		password = null;
		email = null;
		profilePic = null;
	}
	
	public User(String username, String password, String email, String profilePic) {
		this.username = username;
		this.password = password;
		this.email = email;
		this.profilePic = profilePic;
	}

}
