import React, { Component } from 'react';
import 'isomorphic-fetch';

import './App.css';
import InputForm from './components/InputForm';
import Display from './components/Display';

class App extends Component {
  constructor() {
    super(props);

    this.state = {
      number: null,
      value: null,
      datetime: null,
      last_datetime: null,
      occurrences: null
    }
  }

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
        <Display currentValues={ this.state }/>
      </div>
    );
  }
}

export default App;
