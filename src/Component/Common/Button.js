import React from 'react'

const Button = props => (
    <div id={props.id} className="row">
      <button onClick = {props.click}>{props.title}</button>
    </div>
);

export default Button