import React from 'react'
import PropTypes from 'prop-types'
import './Link.css'
import TwitterLogoWhiteOnBlue from './Twitter_Logo_WhiteOnBlue.png'

const Link = (props) => <a
  id={props.id}
  href={props.href}
  target="_blank"
  rel="noopener noreferrer"
><img src={TwitterLogoWhiteOnBlue} alt="Logo"/></a>

Link.propTypes = {
  id: PropTypes.string,
  href: PropTypes.string
}

export default Link
