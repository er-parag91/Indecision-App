import React, { Component } from 'react';

class AddOptions extends React.Component {
  state = {
    error: undefined,
  };
  AddOptionHandler = e => {
    e.preventDefault ();
    const option = e.target.elements.option.value.trim ();

    const error = this.props.AddOptionHandler (option);
    this.setState ({ error: error });
    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render () {
    return (
      <div>
        {this.state.error &&
          <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.AddOptionHandler}>
          <input
            className="add-option__input"
            type="text"
            placeholder="Add option here"
            name="option"
          />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOptions;
