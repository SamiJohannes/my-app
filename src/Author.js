import React from 'react'
import PropTypes from 'prop-types'
import './Author.css'

const Author = (props) => <h1
  id={props.id}
>{props.author}{props.children}</h1>

Author.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  children: PropTypes.any
}

export default Author
