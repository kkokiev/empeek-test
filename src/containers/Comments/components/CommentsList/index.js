import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment';

const CommentsList = () =>
  <ul className="comments-list">
    <Comment />
    <Comment />
    <Comment />
    <Comment />
  </ul>;

CommentsList.propTypes = {

};

export default CommentsList;
