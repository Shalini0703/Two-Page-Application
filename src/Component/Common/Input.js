import React from 'react'

const Input = props => (
    <div className="row">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder} onChange = {props.input} maxLength = {props.maxlength}/>
    </div>  
);

export default Input
