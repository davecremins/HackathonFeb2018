import React from 'react';
import AreaChart from 'components/AreaChart';


class RevenueAreaChart extends React.Component {


  constructor() {
    super();

    this.state = {
      data: [
        { name: 'Sun', uv: 4000, pv: 2400 },
        { name: 'Monday', uv: 4000, pv: 2400 },
        { name: 'Tue', uv: 3000, pv: 1398 },
        { name: 'Web', uv: 2000, pv: 9800 },
        { name: 'Thurs', uv: 2780, pv: 3908 },
        { name: 'Fri', uv: 1890, pv: 4800 },
        { name: 'Sat', uv: 2390, pv: 3800 },
      ],
    };
  }

  render() {
    return (<AreaChart {...this.props} />);
  }
}


export default RevenueAreaChart;
