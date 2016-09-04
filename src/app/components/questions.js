import React, { Component, PropTypes } from 'react'
import Question from './question';

class Questions extends React.Component {

  render() {
    let { questions } = this.props;
    if(!questions) return null;
    
    let questionNodes = questions.map((question, i) => {
      return <Question question={question} key={i}/>
    });
    return (
      <div>
        {questionNodes}
      </div>
    )
  }
}
export default Questions;
