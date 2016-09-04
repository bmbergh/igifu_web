import React, { Component, PropTypes } from 'react';
import Input from './FormContainer';
import Nav from './NavContainer';
import Body_Copy from '../components/questionContent';

export default class MainContainer extends React.Component{

  render(){

    return(
      <div className='innerWrapper'>
        <div>
          <Nav />
        </div>
        <div>
          <Body_Copy />
        </div>
        <div className='headline-container'>
          <div className='inputContainer'>
            <p>IGIFU is a GIF based question and answer again. Join the fun by submitting a
            question or phrase of your own. </p>
            <Input />
          </div>
        </div>
      </div>
    )
  }
}
