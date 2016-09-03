import React, { Component, PropTypes } from 'react';
import questionData from 'json!../util/database.json';

class QuestionData extends React.Component{

  render(){
    return(
      <h1>{questionData}</h1>
    )
  }
}
QuestionData.propTypes = {
  questionData: PropTypes.string.isRequired
}

export default QuestionData;
