import React from 'react';
import AddOptions from './AddOptions';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './optionModal';
class IndecisionApp extends React.Component {
  state = {
    title: 'Indecision',
    subTitle: 'Put your life into hands of computer',
    options: [],
    optionSelected: false,
    randomNum: null,
  };
  componentDidMount () {
    const json = localStorage.getItem ('options');
    const options = JSON.parse (json);
    if (options) {
      this.setState ({ options: options });
    }
  }
  componentDidUpdate (prevProps, prevState) {
    const json = JSON.stringify (this.state.options);
    localStorage.setItem ('options', json);
  }
  removeAllHandler = () => {
    this.setState ({ options: [] });
  };
  pickHandler = () => {
    const randomNum = Math.floor (Math.random () * this.state.options.length);
    this.setState ({ optionSelected: true, randomNum: randomNum });
  };
  AddOptionHandler = option => {
    if (!option) {
      return 'Please enter valid value to add item';
    } else if (this.state.options.indexOf (option) > -1) {
      return 'Option already exist';
    }
    this.setState (prevState => {
      return { options: prevState.options.concat (option) };
    });
  };
  deleteOptionHandler = option => {
    this.setState (prevState => {
      return { options: prevState.options.filter (opt => opt !== option) };
    });
  };
  modalClosedHnadler = () => {
    this.setState ({ optionSelected: false });
  };
  render () {
    return (
      <div>
        <Header title={this.state.title} subTitle={this.state.subTitle} />
        <div className="container">
          <Action
            picked={this.pickHandler}
            hasOptions={this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              clicked={this.removeAllHandler}
              deleteOptionHandler={this.deleteOptionHandler}
            />
            <AddOptions AddOptionHandler={this.AddOptionHandler} />
          </div>
        </div>
        <OptionModal
          optionContent={this.state.options[this.state.randomNum]}
          optionSelected={this.state.optionSelected}
          clicked={this.modalClosedHnadler}
        />
      </div>
    );
  }
}

export default IndecisionApp;
