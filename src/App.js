import React, { Component } from 'react';
import logo from './logo.svg';
import blot01 from './images/blot01.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Rorschach Test</h1>
        </header>
        <form className="Form-blotTest">
          <h2>What do you see in the image below?</h2>
          <img src={blot01} className="Image-inkBlot" />

          <h3>Your answer:</h3>
          <input type="text" className="Input-answerBox" />
          <p><input type="submit" value="Submit" /></p>
        </form>
      </div>
    );
  }
}

export default App;
