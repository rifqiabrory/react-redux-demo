import React from 'react';

const Button = (props) => {
  return (
    <button className={props.styles} onClick={props.onPress}>{props.title}</button>
  )
}

export default Button;