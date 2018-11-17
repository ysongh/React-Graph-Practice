import React, { Component } from 'react';

import {PieChart} from 'react-easy-chart';

class Chart extends Component {
  render() {
      
    return (
      <div>
        <PieChart
          labels
          size={400}
          innerHoleSize={250}
          data={[
            { key: '20%', value: 100, color: '#3cb371' },
            { key: '55%', value: 200, color: '#ffa500' },
            { key: '10%', value: 50, color: '#ff0000' }
          ]}
        />
      </div>
    );
  }
}

export default Chart;