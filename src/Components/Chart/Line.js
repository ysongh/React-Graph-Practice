import React, { Component } from 'react';

import {LineChart} from 'react-easy-chart';

class Line extends Component {
  constructor(props){
    super(props);
    this.state = {
        data: [
          [
            { x: 1, y: 20 },
            { x: 2, y: 14 },
            { x: 4, y: 26 },
            { x: 6, y: 20 },
            { x: 8, y: 34 },
            { x: 10, y: 18 },
            { x: 12, y: 40 }
          ], [
            { x: 1, y: 14 },
            { x: 2, y: 34 },
            { x: 4, y: 15 },
            { x: 6, y: 39 },
            { x: 8, y: 24 },
            { x: 10, y: 41 },
            { x: 12, y: 32 }
          ]
        ]
    };
  }
  render() {
      
    return (
      <div>
        <LineChart
            axes
            margin={{top: 10, right: 10, bottom: 50, left: 50}}
            axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
            width={350}
            interpolate={'cardinal'}
            height={350}
            data={this.state.data}
        />
    </div>
    );
  }
}

export default Line;