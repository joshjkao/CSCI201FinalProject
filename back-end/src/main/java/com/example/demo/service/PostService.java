package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Post;
import com.example.demo.model.User;
import com.example.demo.repository.PostRepo;



@Service
public class PostService {
	
	@Autowired
	private PostRepo postRepo;
	
	public List<Post> getAllPosts() {
		
		return postRepo.findAll();
	}
	
	public List<Post> getUserPosts(Long user_id) {
		return postRepo.findByUserId(user_id);
	}

	public Post savePost(Post post) {
		return postRepo.save(post);
	}

}
