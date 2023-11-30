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
		return userRepo.findByUserId(user_id);
	}
	// Get all following associated with user

}
