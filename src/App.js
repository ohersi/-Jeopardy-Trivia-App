import React, { Component } from 'react';
import Triviainfo from './components/TriviaInfo';
import './App.css'

class App extends Component {

  state = {
    baseURL: 'http://jservice.io/api/random',
    triviaInfo: {},
    showing: false,
    score: 0
  }

  getTrivia = () => {
    fetch(this.state.baseURL)
      .then(response => response.json())
      .then(data => this.setState({ triviaInfo: data[0] }))
      .catch(error => console.error(error));
    this.hideQuestion();
  }

  revealQuestion = () => {
    this.setState({ showing: !this.state.showing })
  }

  hideQuestion = () => {
    const { showing } = !this.state;
    this.setState({ showing: showing })
  }

  addScore = () => {
    this.setState({ score: this.state.score + 100 })
  }

  subtractScore = () => {
    if (this.state.score >= 100) {
      this.setState({ score: this.state.score - 100 })
    }
  }

  resetScore = () => {
    this.setState({ score: 0 })
  }

  render() {
    return (
      <>
        <div id="main">
          <div id="container">
            <h1>Welcome to Jeopardy!</h1>
            <h1>Let's play!</h1>
            <div id="scores">
              <h1>Score: {this.state.score}</h1>
              <div id="btn-container">
                <button id='subtract-btn' onClick={this.subtractScore}>Decrease</button>
                <button id='add-btn' onClick={this.addScore}>Increase</button>
                <button id='reset-btn' onClick={this.resetScore}>Reset</button>
              </div>
            </div>
            <button id='question-btn' onClick={this.getTrivia} type='submit'>Get Question</button>
            <Triviainfo triviaInfo={this.state.triviaInfo} />
            <div onClick={this.revealQuestion}>Click to Reveal Question</div>
            <div style={{ display: (this.state.showing ? 'block' : 'none') }}>
              <h2>Question: What is... <span style={{ color: '#32F183' }}>{this.state.triviaInfo.answer}</span></h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
