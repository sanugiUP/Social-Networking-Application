import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostTile from '../components/PostTile';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch posts from the backend API
    axios.get('http://localhost:8080/post/getall')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const handleCreatePostClick = () => {
    navigate('/create-post');
  };

  return (
    <div>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <Button variant="contained" color="primary" onClick={handleCreatePostClick}>
          Create New Post
        </Button>
      </div>

      {posts.map(post => (
        <PostTile
          key={post.postid}
          title={post.title}
          description={post.description}
          postId={post.postid}
          commentsCount={post.commentCount}
        />
      ))}
    </div>
  );
};

export default Home;
