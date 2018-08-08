import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Panel from '../../components/Panel';
import CommentsList from './components/CommentsList';
import CommentForm from './components/CommentForm';

class Comments extends Component {
  render () {
    return (
      <Panel>
        <h2>Comments #2</h2>
        <CommentsList />
        <CommentForm />
      </Panel>
    );
  }
}

Comments.propTypes = {

}

export default Comments;
