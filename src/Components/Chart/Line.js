import React, { Component } from 'react';

import {LineChart} from 'react-easy-chart';

class Line extends Component {
  render() {
      
    return (
      <div>
        <LineChart
            axisLabels={{x: 'Total Revenue', y: 'January'}}
            margin={{top: 10, right: 30, bottom: 50, left: 70}}
            yType={'time'}
            axes
            width={500}
            height={500}
            data={[
              [
                { x: 10, y: '1-Jan-15' },
                { x: 20, y: '10-Jan-15' },
                { x: 40, y: '21-Jan-15' },
                { x: 80, y: '31-Jan-15' }
              ], [
                { x: 0, y: '1-Jan-15' },
                { x: 15, y: '10-Jan-15' },
                { x: 20, y: '21-Jan-15' },
                { x: 25, y: '31-Jan-15' }
              ]
            ]}
        />
      </div>
    );
  }
}

export default Line;