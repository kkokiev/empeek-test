import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getItems, getSelectedItem } from '../../../../helpers/selectors';

import Comment from '../Comment';

const CommentsList = ({ comments, index }) =>
  <div>
    <h2>Comments #{index + 1}</h2>
    {comments &&
      <ul className="comments-list">
        {comments.map((comment, i) =>
          <Comment key={i} comment={comment} />
        )}
      </ul>
    }
  </div>;

CommentsList.propTypes = {
  comments: PropTypes.array,
  index: PropTypes.number
};

const mapStateToProps = (state) => {
  const items = getItems(state);
  const selectedItem = getSelectedItem(state);
  const index = items.findIndex(item => item.id === selectedItem);
  const { comments } = items[index];

  return {
    comments,
    index
  };
};

export default connect(mapStateToProps)(CommentsList);
