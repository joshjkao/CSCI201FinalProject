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
	
	static class newPost {
		private long userId;
		private String postUrl;
		private String caption;
		
		public String getCaption() {return caption;}
		public long getUserId() {return userId;}
		public String getpostUrl() {return postUrl;}
		public void setUserId(long e) {userId = e;}
		public void setpostUrl(String p) {postUrl = p;}
		public void setCaption(String c) {caption = c;}
	}

	@PostMapping(path="/upload")
	public @ResponseBody Boolean addNewPost(@RequestBody newPost post) {
		
		if(post.postUrl == null || post.caption == null)
		{	
			System.out.println("NOT WORKING");
			
			return false;
		}
		else
		{
			System.out.println("Done");
			System.out.println(post.caption);
			System.out.println(post.postUrl);
			System.out.println(post.userId);
			
			Post P = new Post("dog", 0, post.postUrl, post.caption, post.userId);
			postService.savePost(P);
			
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
	
	@PostMapping(path="/userposts")
	public @ResponseBody String userPosts(@RequestBody Long user_id) {
		List<Post> posts = postService.getUserPosts(user_id);
		return new Gson().toJson(posts);
	}
	
	
	


}
