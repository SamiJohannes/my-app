import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const Card = (props) => <p
  id={props.id}
  className={props.animateIn ? 'card-in' : 'card-out'}
  onAnimationEnd={props.newQuote}
>{props.quote}{props.children}
</p>

Card.propTypes = {
  id: PropTypes.string,
  animateIn: PropTypes.bool,
  newQuote: PropTypes.func,
  quote: PropTypes.string,
  children: PropTypes.any
}

export default Card
