import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { MDBTextArea } from 'mdb-react-ui-kit';
import PostTile from '../components/PostTile';
import axios from 'axios';
import CommentTile from '../components/CommentTile';
import { useParams } from 'react-router-dom';

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [open, setOpen] = useState(false)
  const [comment, setComment] = useState('');
  const [refresh, setRefresh] = useState(false);
  const { postId } = useParams();

  useEffect(() => {
    const postData = { postid: postId };
    axios.post('http://localhost:8080/comment/postcomms', postData)
      .then(response => {
        setComments(response.data);
        setRefresh(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
      console.log(refresh);
  }, [refresh, postId]);

  const addComment = () => {
    const payload = {
      text: comment,
      postid: postId
    };
    axios.post('http://localhost:8080/comment/add', payload)
      .then(response => {
        console.log('Comment added successfully', response);
        setComment('');
        setRefresh(true);
      })
      .catch(error => {
        console.error('Error adding comment:', error);
      });
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Edit Post</Modal.Header>
      <Modal.Content>
        <PostTile
          key='1'
          title='Elevate Your Wellness Routine with Mindfulness Mondays! 🌿'
          description='Introducing Mindfulness Mondays—a weekly oasis for tranquility and self-care. Join us every Monday for guided meditation sessions, wellness tips, and peaceful moments to center yourself amidst the chaos. Lets prioritize our mental well-being together and start the week on a calm, rejuvenated note. 🧘‍♀️✨'
          postId='1'
          commentsCount='0'
        />
      </Modal.Content>


      <Modal.Content scrolling style={{ maxHeight: '200px', overflowY: 'auto' }}>
        {comments.map(comment => (
          <CommentTile
            key={comment.commentid}
            content={comment.text}
          />
        ))}
      </Modal.Content>

      <Modal.Actions>
        <MDBTextArea label='Type Your Comment Here' id='textarea' rows={3} value={comment} onChange={(e) => setComment(e.target.value)} />
        <br></br>
        <Button color='black' onClick={() => setOpen(false)}>
          Exit
        </Button>
        <Button
          content="Add Comment"
          labelPosition='right'
          icon='checkmark'
          onClick={addComment}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default Comment;