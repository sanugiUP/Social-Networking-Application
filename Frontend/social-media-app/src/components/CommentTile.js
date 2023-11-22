import React from 'react';

const CommentTile = ({ content }) => {

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

    const descriptionStyle = {
        fontSize: '1em',
        color: '#333',
        marginBottom: '10px',
    };

    return (
        <div style={postTileStyle}>
            <p style={descriptionStyle}>{content}</p>
        </div>
    );
};

export default CommentTile;