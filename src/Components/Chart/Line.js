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
            { x: 3, y: 25 },
            { x: 4, y: 15 }
          ], [
            { x: 1, y: 10 },
            { x: 2, y: 25 },
            { x: 3, y: 17 },
            { x: 4, y: 32 }
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