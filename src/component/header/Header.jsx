import React from 'react';
import styled from 'styled-components'
import {Switch} from "../switch";


const StyledHeader = styled.header`
    display: flex;
    box-sizing: border-box;
    height: 44px;
    background-color: ${props => props.theme.colors.header}; 
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: flex-end;
    border-bottom: 1px solid transparent;
    -webkit-transition: height .2s ease-in;
    padding-left: 42px;
    padding-right: 42px;
`


export const Header = ({toggleChangeTheme, toggleTheme}) => {
    return (
        <StyledHeader>
            <Switch toggleTheme={toggleTheme} onTogle={toggleChangeTheme}/>
        </StyledHeader>
    );
};

