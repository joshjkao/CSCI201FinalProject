package com.example.demo.controller;

import java.io.Serializable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;
import com.example.demo.service.UserService;
import com.google.gson.Gson;

@Controller
@CrossOrigin
@RequestMapping(path="/login")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping(path="/signup")
	public @ResponseBody Boolean addNewUser(@RequestParam String username, @RequestParam String password, @RequestParam String email, @RequestParam String profilePic) {
		
		
		if(username == null || password == null || email == null || profilePic == null)
		{		
			return false;
		}
		else
		{
			User U = new User(username, password, email, profilePic);
			userService.saveUser(U);
			
			return true;
			
		}
	
	}
	
	static class LoginRequest {
		private String email;
		private String password;
		
		public String getEmail() {return email;}
		public String getPassword() {return password;}
		public void setEmail(String e) {email = e;}
		public void setPassword(String p) {password = p;}
	}
	
	static class LoginResponse {
		private boolean success;
		private Integer user_id;
		
		LoginResponse(boolean s, Integer uid) {
			success = s;
			user_id = uid;
		}
	}
	
	@PostMapping(path="/login")
	public @ResponseBody String loginUser(@RequestBody LoginRequest request) {
		System.out.println("login");
		System.out.println(request.email);
		System.out.println(request.password);
		
		// TODO: validate against database
		
		Gson gson = new Gson();
		if(request.email == null || request.password == null)
		{		
			return gson.toJson(new LoginResponse(false, null));
		}
		else
		{
			return gson.toJson(new LoginResponse(true, 1));
		}
	}
	
	
//	@GetMapping(path="/all")
//	public @ResponseBody Iterable<User> getALLUsers() {
//		return userRepo.findALL();
//	}
	
	
	
	

}
