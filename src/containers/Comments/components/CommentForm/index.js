import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentForm extends Component {
  render() {
    return (
      <form className="form-inline align-items-start">
        <div className="form-group mr-3">
          <div className="comment-form-avatar" />
        </div>
        <div className="form-group flex-grow-1 flex-shrink-1">
          <textarea className="form-control w-100" />
        </div>
      </form>
    );
  }
}

CommentForm.propTypes = {

}

export default CommentForm;
