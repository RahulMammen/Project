import React, { useState, useEffect } from 'react';
import '../styles/Comment.css';

const CommentModal = ({ open, onClose, eventId, comments, addComment, deleteComment }) => {
  const [comment, setComment] = useState('');
  const currentUser = 'You'; // Replace with logic to get the actual current user's username

  useEffect(() => {
    if (open && eventId && !comments[eventId]) {
      // Initialize with dummy comments if event has no comments yet
      addComment(eventId, [
        { id: Date.now(), username: 'Vinu', text: 'Looking forward to this event!', time: '2 hours ago', isUserComment: false },
        { id: Date.now() + 1, username: 'Alice', text: 'Waiting!', time: '1 hour', isUserComment: false }
      ]);
    }
  }, [open, eventId, addComment, comments]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    const newComment = {
      id: Date.now(), // Unique id for the comment
      username: currentUser,
      text: comment,
      time: 'Just now',
      isUserComment: true
    };

    addComment(eventId, [ ...(comments[eventId] || []), newComment ]);
    setComment('');
  };

  if (!open) return null;

  const eventComments = comments[eventId] || [];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h3>Add a Comment</h3>
        <div className="comment-input-container">
          <input
            type="text"
            placeholder="Your Comment"
            value={comment}
            onChange={handleCommentChange}
          />
          <button className="send-button" onClick={handleSubmit}>
            <img src="../src/assets/Send.jpg" alt="Send" />
          </button>
        </div>
        {eventComments.map((c) => (
          <div key={c.id} className="comment">
            <p>
              <strong>{c.username}</strong>: {c.text}
              <span className="comment-time">{c.time}</span>
              {c.isUserComment && (
                <button className="delete-button" onClick={() => deleteComment(eventId, c.id)}>Delete</button>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentModal;
