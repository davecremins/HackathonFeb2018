import React from 'react';
import PropTypes from 'prop-types';

import {
  Bar, BarChart as ReBarChart, CartesianGrid, Legend, ReferenceLine, ResponsiveContainer, Tooltip, XAxis,
  YAxis,
} from 'recharts';

const BarChart = ({ height, data }) => (
  <ResponsiveContainer height={height}>
    <ReBarChart
      data={data}
      stackOffset="sign"
    >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <ReferenceLine y={0} stroke="#000" />
      <Bar dataKey="uv" fill="#B11440" stackId="stack" />
      <Bar dataKey="pv" fill="#1875AC" stackId="stack" />
    </ReBarChart>
  </ResponsiveContainer>
);


BarChart.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.number,
};

BarChart.defaultProps = {
  height: 250,
};

export default BarChart;
