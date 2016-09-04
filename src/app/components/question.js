import React, { Component, PropTypes } from 'react';

class Question extends React.Component {

  render() {
    let { question } = this.props;
    return(
      <li>{question.question}</li>
    )
  }
}

Question.propTypes = {
  question: PropTypes.object.isRequired
}

export default Question;
