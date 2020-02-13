import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const Card = (props) => <p
  id={props.id}
  className={props.animateIn ? 'card-in' : 'card-out'}
  onAnimationEnd={props.newQuote}
>{props.quote}
</p>

Card.propTypes = {
  id: PropTypes.string,
  animateIn: PropTypes.bool,
  newQuote: PropTypes.func,
  quote: PropTypes.string
}

export default Card
