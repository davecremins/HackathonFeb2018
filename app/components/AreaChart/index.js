import React, { PropTypes } from 'react';
import {
  Area,
  AreaChart as ReAreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis } from 'recharts';

const AreaChart = ({ height, data }) => (
  <ResponsiveContainer height={height}>
    <ReAreaChart data={data}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#1875AC" stopOpacity={0.9} />
          <stop offset="95%" stopColor="#0CBAF3" stopOpacity={0.9} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#EC3350" stopOpacity={0.9} />
          <stop offset="95%" stopColor="#B11440" stopOpacity={0.9} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      <Area type="monotone" dataKey="pv" stroke="#1875AC" fillOpacity={1} fill="url(#colorPv)" />
    </ReAreaChart>
  </ResponsiveContainer>
);

AreaChart.propTypes = {
  data: PropTypes.array,
  height: PropTypes.number,
};

AreaChart.defaultProps = {
  height: 250,
};

export default AreaChart;
