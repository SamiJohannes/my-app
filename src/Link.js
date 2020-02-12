import React from 'react';
import './Link.css';

const Link = (props) => <a
    id={props.id}
    href={props.href}>{props.label}</a>;

export default Link;