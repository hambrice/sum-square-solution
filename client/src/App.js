import React, { Component } from 'react';

import './App.css';
import InputForm from './components/InputForm';
import Display from './components/Display';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputForm />
        <Display />
      </div>
    );
  }
}

export default App;
