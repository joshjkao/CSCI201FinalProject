package com.example.demo.controller;

import java.util.List;

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

	static class signUpRequest {
		private String username;
		private String email;
		private String password;
		
		public String getUsername() {return username;}
		public String getEmail() {return email;}
		public String getPassword() {return password;}
		public void setEmail(String e) {email = e;}
		public void setPassword(String p) {password = p;}
		public void setUsername(String u) {username = u;}
	}
	
	@PostMapping(path="/signup")
	public @ResponseBody Boolean addNewUser(@RequestBody signUpRequest signup) {
		System.out.println("register");
		
		if(signup.username == null || signup.password == null || signup.email == null)
		{	
			System.out.print(signup.username);
			System.out.print(signup.password);
			System.out.print(signup.email);
			
			return false;
		}
		else
		{
			System.out.println("done");
			User user = new User(signup.username, signup.password, signup.email);
			userService.saveUser(user);
			
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
		private Long user_id;
		private String message;
		
		LoginResponse(boolean s, Long uid) {
			success = s;
			user_id = uid;
		}
		
		LoginResponse(boolean s, String m) {
			success = s;
			message = m;
		}
	}
	
	@PostMapping(path="/login")
	public @ResponseBody String loginUser(@RequestBody LoginRequest request) {
		System.out.println("login");
		
		List<User> matchingUsers = userService.getByLoginInfo(request.email, request.password);
		
		Gson gson = new Gson();
		if(request.email == null || request.password == null) {		
			return gson.toJson(new LoginResponse(false, "Please fill in all fields"));
		}
		else if (matchingUsers.isEmpty()) {
			return gson.toJson(new LoginResponse(false, "Invalid login info."));
		}
		else {
			return gson.toJson(new LoginResponse(true, matchingUsers.get(0).getID()));
		}
	}
	
	
//	@GetMapping(path="/all")
//	public @ResponseBody Iterable<User> getALLUsers() {
//		return userRepo.findALL();
//	}
	
	@PostMapping(path="/user")
	public @ResponseBody String getUser(@RequestBody Long userId) {
		System.out.println("controller" + userId);
		String temp = new Gson().toJson(userService.getByUserId(userId));
		System.out.println(temp);
		return temp;
	}

	static class UpdateRequest {
		private Long userId;
		private String profilePic;

		public void setUserId(Long u) {userId = u;}
		public void setProfilePic(String s) {profilePic = s;}
		public Long getUserId() {return userId;}
		public String getProfilePic() {return profilePic;}
	}

	@PostMapping(path="update")
	public @ResponseBody void updateProfilePic(@RequestBody UpdateRequest request) {
		Long userId = request.getUserId();
		String profilePic = request.getProfilePic();

		// userService.updateProfilePicByUserId(userId, profilePic);
	}

}
