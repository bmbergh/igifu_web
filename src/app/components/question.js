import React, { Component, PropTypes } from 'react';

class Question extends React.Component {

  render() {
    let { question } = this.props;
    if(!question) return null;
    console.log('LIST VIEW: ', question);

    return (
      <div>
        <li>{question.question}</li>
      </div>
    )
  }
}

Question.propTypes = {
  question: PropTypes.object.isRequired
}

export default Question;
