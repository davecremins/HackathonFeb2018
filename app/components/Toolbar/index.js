import React from 'react';
import { NavLink, Toolbar as RToolBar } from 'rebass';
import styled from 'styled-components';


const MyToolBar = styled(RToolBar)`
  background:black;
`;


const ToolBar = () => (
  <MyToolBar>
    <NavLink>
        Hello
    </NavLink>
    <NavLink ml="auto">
        Beep
    </NavLink>
    <NavLink>
        Boop
    </NavLink>
  </MyToolBar>
);

export default ToolBar;
