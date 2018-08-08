import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addComment } from '../../../../services/items';

class CommentForm extends Component {
  state = {
    comment: ''
  }
  componentDidMount() {
    document.addEventListener('keydown', this.keydownHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keydownHandler);
  }

  keydownHandler = (e) => {
    if (e.keyCode === 13 && e.ctrlKey) {
      this.handleSubmit();
    }
  }

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  }

  handleSubmit = () => {
    const { dispatch, selectedItem } = this.props;
    dispatch(addComment({ comment: this.state.comment, id: selectedItem }));
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form className="form-inline align-items-start">
        <div className="form-group mr-3">
          <div className="comment-form-avatar" />
        </div>
        <div className="form-group flex-grow-1 flex-shrink-1">
          <textarea className="form-control w-100" value={this.state.comment} onChange={this.handleChange} />
        </div>
      </form>
    );
  }
}

CommentForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedItem: PropTypes.string
};

export default connect()(CommentForm);
