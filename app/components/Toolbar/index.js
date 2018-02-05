import React from 'react';
import { NavLink, Toolbar as RToolBar } from 'rebass';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const MyToolBar = styled(RToolBar)`
  background:black;
`;

const MyLink = styled(Link)`
  color: white;
  text-decoration: none;
  border-bottom: ${({ active }) => active ? 'solid 2px white;' : 'None'}
`;


const links = [
  { name: 'Home', path: '/' },
  { name: 'Revenue', path: '/revenue' },
];


const ToolBar = () => (
  <MyToolBar>
    {links.map((item) => (
      <NavLink>
        <MyLink active={location.pathname === item.path} to={item.path}>{item.name}</MyLink>
      </NavLink>
    ))}
  </MyToolBar>
);

export default ToolBar;
