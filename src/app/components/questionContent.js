import React from 'react';
import questionData from 'json!../util/database.json';
import QuestionData from './questionData';

export default class MainContent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      questionIndex: 0
    }
  }

  componentDidMount() {
    var questionArray = questionData;
    setInterval(()=> {
      if(this.state.questionIndex <= questionArray.questionRequests.length -2){
        this.setState({questionIndex: ++this.state.questionIndex})
      }else{
        this.setState({questionIndex: 0 })
     }}, 7000)
  }

  render(){

    var questionArray = questionData.questionRequests;

    return(
      <div className='main-content-container'>
        <QuestionData questionData={questionArray[this.state.questionIndex].question} />
      </div>
    )
  }
}
