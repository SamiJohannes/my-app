import React from 'react'
import PropTypes from 'prop-types'
import './Author.css'

const Author = (props) => <p
  id={props.id}
>{props.author}{props.children}</p>

Author.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  children: PropTypes.any
}

export default Author
