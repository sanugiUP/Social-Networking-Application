import React from 'react';
import { Link } from 'react-router-dom';

const PostTile = ({ title, description, postId, commentsCount }) => {

  const postTileStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px auto',
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    width: '50%',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  };

  const titleStyle = {
    fontSize: '1.2em',
    marginBottom: '5px',
  };

  const descriptionStyle = {
    fontSize: '1em',
    color: '#333',
    marginBottom: '10px',
  };

  const commentStyle = {
    textAlign: 'right',
    marginTop: '10px',
    color: '#888',
  };

  return (
    <Link to={`/post/${postId}`} style={postTileStyle}>
      <div>
        <h2 style={titleStyle}>{title}</h2>
        <p style={descriptionStyle}>{description}</p>
        <div style={commentStyle}>
          <span>{commentsCount} comments</span>
        </div>
      </div>
    </Link>
  );
};

export default PostTile;
