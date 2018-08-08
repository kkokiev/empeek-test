import React from 'react';
import PropTypes from 'prop-types';

const Comment = () =>
  <li className="d-flex align-items-start comment">
    <div className="comment-avatar-wrap">
      <div className="comment-avatar" />
    </div>
    <div className="flex-grow-1 flex-shrink-1">
      <p>Lorem ipsum dolor</p>
    </div>
  </li>;

Comment.propTypes = {

}

export default Comment;
