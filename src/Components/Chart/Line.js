import React, { Component } from 'react';

import {LineChart} from 'react-easy-chart';

class Line extends Component {
  constructor(props){
    super(props);
    this.state = {
        data: [
          [
            { x: 1, y: 20 },
            { x: 2, y: 10 },
            { x: 3, y: 25 }
          ], [
            { x: 1, y: 10 },
            { x: 2, y: 12 },
            { x: 3, y: 4 }
          ]
        ]
    };
  }
  render() {
      
    return (
      <div>
        <LineChart
            axes
            width={350}
            height={350}
            data={this.state.data}
        />
    </div>
    );
  }
}

export default Line;