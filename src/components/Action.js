import React from 'react';
const Action = props => (
  <button
    className="big-button"
    disabled={!props.hasOptions}
    onClick={props.picked}>
    What should I do?
  </button>
);

export default Action;
