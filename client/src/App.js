import React, { Component } from 'react';
import 'isomorphic-fetch';

import './App.css';
import InputForm from './components/InputForm';
import Display from './components/Display';

class App extends Component {

  handleSubmitClick = event => {
    event.preventDefault();
    const input = event.target.getElementsByTagName("input")[0].value
    return fetch(`difference?number=${input}`).then(response => response.json()).then(data => {
      debugger;
    })
  }

  render() {
    return (
      <div className="App">
        <InputForm handleSubmitClick={ this.handleSubmitClick } />
        <Display />
      </div>
    );
  }
}

export default App;
