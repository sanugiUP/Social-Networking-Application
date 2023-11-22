package com.example.demo.models;

import jakarta.persistence.*;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int commentid;
    private String text;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "postid")
    private Post post;

    public Comment(String text, Post post) {
        this.text = text;
        this.post = post;
    }

    public Comment() {

    }

    public int getCommentid() {
        return commentid;
    }

    public void setCommentid(int commentid) {
        this.commentid = commentid;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }
}
