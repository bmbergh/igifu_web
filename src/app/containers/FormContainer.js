import React, { Component, PropTypes } from 'react';
import * as questionActionsCreator from '../actions/questionAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../components/button';
import Questions from '../components/questions';


  class FormContainer extends React.Component{
    constructor(props) {
      super(props);

      this.saveQuestionText = this.saveQuestionText.bind(this);
    }
    // componentWillReceiveProps(){
    //   let {question} = this.props;
    //   if(!question) return null;
    //   this.setState({
    //     question:this.state.question
    //   })
    // }

    render(){
      let { question } = this.props;
      if(!question) return null;

      return(
        <div>
          <input
            className='input'
            placeholder='question'
            type='text'
            ref={(ref) => this.questionInput = ref}
          />
          <Button onClick={this.saveQuestionText} text='submit'/>
          <Questions question={question} />
        </div>
      )
    }
    saveQuestionText(){
      let {questionActions} = this.props;
      var questionSubmitted = this.questionInput.value;
      questionActions.createQuestionSuccess(questionSubmitted);
    }
  }

  function mapStateToProps(state) {
    return {
      question: state.question,
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      questionActions: bindActionCreators(questionActionsCreator, dispatch)
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)
