import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button.js';
import Link from './Link.js';

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
          <Link
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            target="_blank"
            rel="noopener noreferrer"
            label="tweet!"
          />
          <Button
           id="new-quote"
           onClick={this.newQuote}
           label="Quoteme!"
          />
        </header>
      </div>
    );
  }
}

export default App;
