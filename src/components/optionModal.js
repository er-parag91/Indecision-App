import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => (
  <Modal
    onRequestClose={props.clicked}
    isOpen={props.optionSelected}
    contentLabel="Selected Option"
    closeTimeoutMS={400}
    className="modal">
    <h3 className="modal__title">Selected Option</h3>
    <p className="modal__body">{props.optionContent}</p>
    <button className="button" onClick={props.clicked}>Okay</button>
  </Modal>
);
export default OptionModal;
