import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getSelectedItem } from '../../helpers/selectors';

import Panel from '../../components/Panel';
import CommentsList from './components/CommentsList';
import CommentForm from './components/CommentForm';

const Comments = ({ selectedItem }) => {
  if (!selectedItem) {
    return null;
  }

  return (
    <Panel>
      <CommentsList />
      <CommentForm selectedItem={selectedItem} />
    </Panel>
  );
};

Comments.propTypes = {
  selectedItem: PropTypes.string
};

const mapStateToProps = state => ({
  selectedItem: getSelectedItem(state)
});

export default connect(mapStateToProps)(Comments);
