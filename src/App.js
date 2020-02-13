import React from 'react'
import './App.css'
import Card from './Card.js'
import Button from './Button.js'
import Link from './Link.js'
import quotes from './quotes.json'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      randomIndex: Math.floor(Math.random() * 10),
      animateIn: true
    }

    this.disCard = this.disCard.bind(this)
    this.randomQuote = this.randomQuote.bind(this)
  }

  disCard () {
    this.setState({
      animateIn: !this.state.animateIn
    })
  }

  randomQuote () {
    if (!this.state.animateIn) {
      console.log(this.state.randomIndex)
      const newIndex = 0
      this.setState({
        randomIndex: newIndex,
        animateIn: true
      })
    }
  }

  render () {
    return (
      <div id="quote-box" className="App">
        <Card
          id="text"
          animateIn={this.state.animateIn}
          newQuote={this.randomQuote}
          quote={quotes[this.state.randomIndex].quote}
        >
        </Card>
        <Link
          id="tweet-quote"
          href="twitter.com/intent/tweet"
          target="_blank"
          rel="noopener noreferrer"
          label="tweet!"
        />
        <Button
          id="new-quote"
          onClick={this.disCard}
          label="Quoteme!"
        />
      </div>
    )
  }
}

export default App
