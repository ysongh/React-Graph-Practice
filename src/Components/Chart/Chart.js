import React, { Component } from 'react';

import {PieChart} from 'react-easy-chart';

class Chart extends Component {
  render() {
      
    return (
      <div>
        <PieChart
            data={[
              { key: 'A', value: 100 },
              { key: 'B', value: 200 },
              { key: 'C', value: 50 }
            ]}
        />
      </div>
    );
  }
}

export default Chart;