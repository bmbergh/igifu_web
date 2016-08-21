import React, { Component, PropTypes } from 'react'
import Question from './question';

class Questions extends React.Component {

  render() {
    let { question } = this.props;
    if(!question) return null;
    console.log('question in question components: ', question);

    let questionNodes = Object.keys((question, i) => {
      return <Question question={question} key={i} />
    });

    return (
      <div>
        {questionNodes}
      </div>
    )
  }
}
export default Questions;
