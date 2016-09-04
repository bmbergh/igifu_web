import React, { Component, PropTypes } from 'react';

class QuestionData extends React.Component{

  render(){

    return(
      <h1>{this.props.questionData}</h1>
    )
  }
}
QuestionData.propTypes = {
  questionData: PropTypes.string.isRequired
}

export default QuestionData;
