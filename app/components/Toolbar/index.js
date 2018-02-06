import React from 'react';
import { Box, Toolbar as RToolBar } from 'rebass';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const MyToolBar = styled(RToolBar)`
  background:black;
`;

const MyLink = styled(Link)`
  color: white;
  text-decoration: none;
  
  &.active {
    border-bottom: solid 2px white;
  }  
`;


const links = [
  { name: 'Home', path: '/' },
  { name: 'Revenue', path: '/revenue' },
];


const ToolBar = () => (
  <MyToolBar>
    {links.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Box p={2} key={`nav-list-${index}`}>
        <MyLink
          className={location.pathname === item.path ? 'active' : ''}
          to={item.path}
        >{item.name}</MyLink>
      </Box>
    ))}
  </MyToolBar>
);

export default ToolBar;
