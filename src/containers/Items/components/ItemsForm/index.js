import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

class ItemsForm extends Component {
  state = {
    text: ''
  }

  handleInputChange = (e) => {
    console.log(e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <form className="form-inline">
        <div className="form-group flex-grow-1 flex-shrink-1 mr-3">
          <Input
            className="form-control w-100"
            type="text"
            value={this.state.text}
            placeholder="Type name here..."
            onChange={this.handleInputChange}
          />
        </div>

        <div className="form-group">
          <Button
            className="btn-success"
            type="submit"
            text="Add new"
            onClick={this.handleSubmit}
          />
        </div>
      </form>
    );
  }
}

ItemsForm.propTypes = {

};

export default ItemsForm;
