package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.model.Post;
import com.example.demo.model.User;
import com.example.demo.service.PostService;
import com.google.gson.Gson;


@Controller
@CrossOrigin
@RequestMapping(path="/start")
public class PostController {
	
	@Autowired
	private PostService postService;
	
	@PostMapping(path="/upload")
	public @ResponseBody Boolean addNewPost(@RequestParam String userId, @RequestParam String postImage) {
		
		
		if(postImage == null)
		{		
			return false;
		}
		else
		{
			
//			String animal = PostService.classify;
//			Post post = new Post(userId, postImage, animal);
			//userService.saveUser(U);
			
			return true;
			
		}
	}
	
	
	
	
	@GetMapping(path="/display")
	public @ResponseBody String homepage() {
		List<Post> posts = postService.getAllPosts();
		String test = new Gson().toJson(posts);
//		System.out.println(test);
		return test;
	}
	
	public @ResponseBody String home() {
		System.out.println("asdlfkjadskf");
		return "\"Hello World!\"";
	}
	
	
	


}
