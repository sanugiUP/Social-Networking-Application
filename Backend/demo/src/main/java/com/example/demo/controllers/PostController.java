package com.example.demo.controllers;

import com.example.demo.models.Post;
import com.example.demo.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/post")
@CrossOrigin("*")
public class PostController {

    @Autowired
    PostRepository postRepository;

    @GetMapping("/getall")
    public ResponseEntity<List<Post>> getAll() {
        return ResponseEntity.ok(postRepository.findAll());
    }
    

    @PostMapping("/create")
    public ResponseEntity<?> getAll(@RequestBody Post post) {
        if(post.getTitle().isEmpty() || post.getDescription().isEmpty()) {
            return ResponseEntity.badRequest().body(false); //operation failed
        }else {
            postRepository.save(post);
        }
        return ResponseEntity.ok().body(true); //operation successful
    }
}
