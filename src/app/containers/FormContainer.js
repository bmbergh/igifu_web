import React, { Component, PropTypes } from 'react';
import * as questionActionsCreator from '../actions/questionAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../components/button';
import Questions from '../components/questions';
import Nav from '../containers/NavContainer';
import Body_Copy from '../components/main_content';


  class FormContainer extends React.Component{
    constructor(props) {
      super(props);

      this.saveQuestionText = this.saveQuestionText.bind(this);
    }

    render(){
      let { questions } = this.props;
      if(!questions) return null;

      return(
        <div>
          <div className='innerWrapper'>
            <Nav />
            <Body_Copy />
            <input
              className='input'
              placeholder='question'
              type='text'
              ref={(ref) => this.questionInput = ref}
            />
            <Button onClick={this.saveQuestionText} text='submit'/>
            <Questions questions={questions} />
          </div>
        </div>
      )
    }
    saveQuestionText(){
      let {questionActions} = this.props;
      var questionSubmitted = this.questionInput.value;
      questionActions.createQuestionSuccess(questionSubmitted);
      this.questionInput.value = "";
    }
  }

  function mapStateToProps(state) {
    return {
      questions: state.questions,
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      questionActions: bindActionCreators(questionActionsCreator, dispatch)
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)
