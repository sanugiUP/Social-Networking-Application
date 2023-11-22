package com.example.demo.controllers;

import com.example.demo.models.Comment;
import com.example.demo.models.Post;
import com.example.demo.payloads.InComment;
import com.example.demo.repositories.CommentRepository;
import com.example.demo.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/comment")
@CrossOrigin("*")
public class CommentController {

    @Autowired
    CommentRepository commentRepository;
    @Autowired
    PostRepository postRepository;

    @PostMapping("/add")
    public ResponseEntity<?> addComment(@RequestBody InComment comment) {
        Optional<Post> post = postRepository.findById(comment.getPostid());
        if(post.isPresent()) {
            int count = post.get().getCommentCount();
            post.get().setCommentCount(count + 1);
            postRepository.save(post.get());
            Comment com = new Comment(comment.getText(), post.get());
            commentRepository.save(com);
            return ResponseEntity.ok().body(true); //operation successful
        }
        return ResponseEntity.badRequest().body(false); //operation failed
    }

    @PostMapping("/postcomms")
    public ResponseEntity<List<Comment>> getPostComments(@RequestBody Map<String, Integer> requestBody) {
        int postId = requestBody.get("postid");
        List<Comment> comments = commentRepository.findAll();
        List<Comment> selected_comms = new ArrayList<>();
        if(!comments.isEmpty()) {
            for (Comment c: comments) {
                if(c.getPost().getPostid() == postId){
                    selected_comms.add(c);
                }
            }
            return ResponseEntity.ok().body(selected_comms);
        }
        return ResponseEntity.badRequest().body(selected_comms);
    }
}
