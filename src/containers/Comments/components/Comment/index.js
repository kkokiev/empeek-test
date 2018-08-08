import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { comment: { comment } } = this.props;

    return (
      <li className="d-flex align-items-start comment">
        <div className="comment-avatar-wrap">
          <div className="comment-avatar" />
        </div>
        <div className="flex-grow-1 flex-shrink-1">
          <p>{comment}</p>
        </div>
      </li>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default Comment;
