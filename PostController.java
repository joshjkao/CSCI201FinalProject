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

import com.example.demo.controller.UserController.signUpRequest;
import com.example.demo.model.Post;
import com.example.demo.service.PostService;
import com.google.gson.Gson;


@Controller
@CrossOrigin
@RequestMapping(path="/start")
public class PostController {
	
	@Autowired
	private PostService postService;
	
	static class newPost {
		private long userID;
		private String postUrl;
		private String caption;
		
		public String getCaption() {return caption;}
		public long getUserID() {return userID;}
		public String getpostUrl() {return postUrl;}
		public void setUserID(long e) {userID = e;}
		public void setpostUrl(String p) {postUrl = p;}
		public void setCaption(String c) {caption = c;}
	}
	
	
	@GetMapping(path="/display")
	public @ResponseBody String homepage() {
		List<Post> posts = postService.getAllPosts();
		String test = new Gson().toJson(posts);
		System.out.println(test);
		return test;
	}
	
	
	@PostMapping(path="/upload")
	public @ResponseBody Boolean addNewPost(@RequestBody newPost post) {
		
		if(post.postUrl == null || post.caption == null)
		{	
			System.out.println("NOT WORKING");
			System.out.print(post.caption);
			System.out.print(post.postUrl);
			System.out.print(post.userID);
			return false;
		}
		else
		{
			System.out.print("Done");
			
			
			Post P = new Post(post.userID, "dog", 0, post.postUrl, post.caption);
			postService.savePost(P);
			
			return true;
			
		}
	}
	
//	@GetMapping(path="/classify")
//	public @ResponseBody String classify(@RequestBody String url) {
//		
//	
//		return
//	}
	
}
