package com.example.demo.payloads;

public class InComment {
    private String text;
    private int postid;

    public InComment(String text, int postid) {
        this.text = text;
        this.postid = postid;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public int getPostid() {
        return postid;
    }

    public void setPostid(int postid) {
        this.postid = postid;
    }
}
