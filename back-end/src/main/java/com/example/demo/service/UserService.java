package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;

@Service
public class UserService {
	
	@Autowired
	private UserRepo userRepo;
	
	public User saveUser(User user) {
		return userRepo.save(user);
	}
	
	public List<User> getByLoginInfo(String email, String password) {
		return userRepo.findByEmailAndPassword(email, password);
	}
	
	public User getByUserId(Long user_id) {
		System.out.println("service" + user_id);
		User temp = userRepo.findByUserId(user_id);
		System.out.println(temp.getProfilePic());
		return temp;
	}
	
	// public void updateProfilePicByUserId(Long user_id, String profile_pic) {
	// 	userRepo.updateProfilePicByUserId(user_id, profile_pic);
	// }

}
