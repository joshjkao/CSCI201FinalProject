package com.example.demo.controller;

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
	
	
	
	
	@PostMapping(path="/start")
//	public @ResponseBody Iterable<Post> homepage() {
//		
//		return postService.getAllPosts();
//	}
	public @ResponseBody String home() {
		System.out.println("asdlfkjadskf");
		return "\"Hello World!\"";
	}
	
	
	


}
