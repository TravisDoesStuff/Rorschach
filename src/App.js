import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import InkBlot from './InkBlot.js';
import Comments from './Comments.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data : [],
      isAnswered: false,
      answer: "",
      inkId: 1
    };
  }

  componentWillMount() {
    this.retrieveInkBlot();
  }

  retrieveInkBlot() {
    let inkNum = Math.floor(Math.random()*10)+1;
    this.setState({ inkId: inkNum });
  }

  render() {
    return (
      <div className="App">
        { this.renderForm() }
        { this.renderComments() }
      </div>
    );
  }

  renderForm() {
    return (
      <form className="Form-blotTest">
        <h2>What do you see in the image below?</h2>
        { this.renderBlotImage() }

        { this.renderAnswerInput() }
      </form>
    );
  }

  renderBlotImage() {
    return (
      <InkBlot inkId={this.state.inkId} />
    );
  }

  renderAnswerInput() {
    return (
      <div>
        <h3>Your answer:</h3>
        <input type="text" className="Input-answerBox" value={ this.state.answer } onChange={ this.handleTextInput } />
        <p><input type="submit" value="Submit" onClick={ this.handleSubmit } /></p>
      </div>
    )
  }

  renderComments() {
    if(this.state.isAnswered) {
      return (
        <Comments inkId={this.state.inkId} />
      );
    }
    else {
      return (
        this.renderUnanswered()
      );
    }
  }

  renderUnanswered() {
    return (
      <div>
        <h4 className="HintPrompt">Answer the question to see other peoples answers!</h4>
      </div>
    )
  }

  handleTextInput = (e) => {
    let answerValue = e.target.value;
    this.setState({ answer: answerValue });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let answerValue = this.state.answer;
    let inkId = this.state.inkId;

    if(answerValue) {
      this.setState({ isAnswered: true });
      fetch('/api/comments/'+inkId, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answerValue, inkId })
      }).then(data => data.json()).then((res) => {
        this.setState({ data: res.data });
      });
    }
  }
}

export default App;
