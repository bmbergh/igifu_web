import React from 'react';
import questionData from 'json!../util/database.json';
import QuestionData from './questionData';

export default class MainContent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      questionIndex:0
    }
  }

  componentDidMount() {
    var questionArray = questionData;
    console.log(questionArray.questionRequests.length);
    setInterval(()=> {
      console.log('setInterval');
      if(this.state.questionIndex <= questionArray.questionRequests.length){
        this.setState({questionIndex: ++this.state.questionIndex})
      }else{
        this.setState({questionIndex: 0 })
     }}, 1000)
  }

  render(){
    console.log('questionIndex: ', this.state.questionIndex);
    //var i = -1;
    // console.log('questionData: ', questionData);
    // let questionNodes = questionRequests.map((question, i)=>{
    //   return <QuestionData questionData={questionData} key={i} />
    // })
    return(
      <div className='main-content-container'>
        <div className='headline-container'>

        </div>
        <div className='copy-container'>
          <p>IGIFU is a gif based quesiton an answer game that is fun for everyone. </p>
        </div>
      </div>
    )
  }
  // timer() {
  //    var newCount = this.state.questionData - 1;
  //    if(newCount >= 0) {
  //        this.setState({ questionData: newCount });
  //    } else {
  //        clearInterval(this.state.intervalId);
  //    }
  // }
}



/*
questionInterval(){
  i = (i + 1) % questionData.length;
  document.write(questionData[ i ]);
  setTimeout(questionInterval, 5000);
}
*/
