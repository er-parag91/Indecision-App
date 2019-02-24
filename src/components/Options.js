import React from 'react';
import Option from './Option';
const Options = props => (
  <div>
    <div className="widget-header">
      <h3>Your Options</h3>
      <button className="button button--link" onClick={props.clicked}>
        Remove All
      </button>
    </div>

    {props.options.length === 0 &&
      <p className="widget--text">Please add an options to get started</p>}
    <div>

      {props.options.map ((option, index) => (
        <Option
          key={option}
          deleteOptionHandler={props.deleteOptionHandler}
          optionText={option}
          count={index + 1}
        />
      ))}

    </div>
  </div>
);

export default Options;
