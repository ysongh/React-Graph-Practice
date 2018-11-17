import React, { Component } from 'react';

import {PieChart} from 'react-easy-chart';
import {Legend} from 'react-easy-chart';

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
        data: [
            { key: '20%', value: 100, color: '#3cb371', name: 'Doing Good' },
            { key: '55%', value: 200, color: '#ffa500' , name: 'Need Improvement' },
            { key: '10%', value: 50, color: '#ff0000' , name: 'Not So Good' }
          ]
    };
  }
  
  render() {
    
    const config = [
      {color: '#3cb371'},
      {color: '#ffa500'},
      {color: '#ff0000'}
    ];
      
    return (
      <div>
        <PieChart
          labels
          size={400}
          innerHoleSize={250}
          data={this.state.data}
        />
        <Legend data={this.state.data} dataId={'name'} config={config} horizontal />
      </div>
    );
  }
}

export default Chart;