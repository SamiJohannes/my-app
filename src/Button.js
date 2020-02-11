import React, { Component } from 'react';
import './Button.css';

const Button = (props) => <button 
    type="button" 
    id={props.id} 
    onClick={props.onClick}
    >{props.label}</button>;

export default Button;