import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = (props) => <button
  type="button"
  id={props.id}
  onClick={props.onClick}
>{props.label}</button>

Button.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string
}

export default Button
