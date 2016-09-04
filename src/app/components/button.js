import React, { Component, Proptypes } from 'react';

class Button extends React.Component{
  render(){
    return(
      <button className='button' onClick = { this.props.onClick } >{this.props.text}</button>
    )
  }
}
Button.propTypes = {
  onClick: React.PropTypes.func,
  text: React.PropTypes.string
}

export default Button;
