import React, { Component } from 'react';
import 'isomorphic-fetch';

import './App.css';
import InputForm from './components/InputForm';
import Display from './components/Display';

class App extends Component {
  constructor() {
    super();

    this.state = {
      number: null,
      value: null,
      datetime: null,
      lastDatetime: null,
      occurrences: null
    }
  }

  handleSubmitClick = event => {
    event.preventDefault();
    const input = event.target.getElementsByTagName("input")[0].value
    return fetch(`difference?number=${input}`).then(response => response.json()).then(data => {
      const { datetime, occurrences, last_datetime, value, number } = data;
      this.setState({
        number: number,
        value: value,
        datetime: datetime,
        lastDatetime: last_datetime,
        occurrences: occurrences
      })
    })
  }

  render() {
    return (
      <div className="App">
        <InputForm handleSubmitClick={ this.handleSubmitClick } />
        <Display
          datetime={ this.state.datetime }
          lastDatetime={ this.state.lastDatetime }
          number={ this.state.number }
          value={ this.state.value }
          occurrences={ this.state.occurrences }
          />
      </div>
    );
  }
}

export default App;
