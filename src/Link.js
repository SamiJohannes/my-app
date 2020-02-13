import React from 'react'
import PropTypes from 'prop-types'
import './Link.css'

const Link = (props) => <a
  id={props.id}
  href={props.href}
>{props.label}</a>

Link.propTypes = {
  id: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string
}

export default Link
