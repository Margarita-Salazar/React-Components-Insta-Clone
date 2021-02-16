import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      <form className='comment-text'>
        <input type='text' placeholder='comment'/>
        <button>post</button>
      </form>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map( comment =>{
        return <Comment key={comment.id} comment={comment}/>
      })}
    </div>
  );
};

export default Comments;
