import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonToggle: true
    }

  this.newQuote = this.newQuote.bind(this);

  }

  newQuote() {
    this.setState({
      buttonToggle: !this.state.buttonToggle
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>
              {this.state.buttonToggle ? this.props.msg : "push that button"}
              </code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button id="new-quote" onClick={this.newQuote} label="Quoteme!" />
        </header>
      </div>
    );
  }
}

export default App;
