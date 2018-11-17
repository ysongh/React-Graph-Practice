import React, { Component } from 'react';
import './App.css';

import Chart from './Components/Chart/Chart';
import Line from './Components/Chart/Line';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chart />
        <Line />
      </div>
    );
  }
}

export default App;
