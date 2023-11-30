package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.model.Comment;
import com.example.demo.model.User;
import com.example.demo.service.CommentService;

@Controller
@CrossOrigin
@RequestMapping(path="/comment")
public class CommentController {
	
	@Autowired 
	private CommentService commentService;
	
	@PostMapping(path="/comment")
	public @ResponseBody List<Comment> getPostComments(@RequestBody Long postId) {
		List<Comment> temp = commentService.findByPostId(postId);
		return temp;
	}
	
	@PostMapping(path="/post")
	public @ResponseBody List<Comment> addComment(@RequestBody Comment comment) {
		List<Comment> temp = commentService.addComment(comment);
		return temp;
	}

}
