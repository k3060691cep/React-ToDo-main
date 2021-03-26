import React from 'react';
import styled from 'styled-components'

const ButtonStyled = styled.button`
    color: ${props => props.primary ? "#ffffff" : "#000000"};;
    padding: 6px 16px;
    margin: 0 6px;
    background-color: ${props => props.primary ? "#1976d2" : "#e0e0e0"};
    text-transform: uppercase;
    border: 0;
    cursor: pointer;
    border-radius: 4px;
    font-weight: 500;
    line-height: 1.75;
    letter-spacing: 0.4px;
   
    &:hover{
       background-color: ${props => props.primary ? "#145aa0" : "#c6c6c6"};
      -webkit-box-shadow: 0px 1px 6px 1px rgba(34, 60, 80, 0.14);
-moz-box-shadow: 0px 1px 6px 1px rgba(34, 60, 80, 0.14);
box-shadow: 0px 1px 6px 1px rgba(34, 60, 80, 0.14);
    }
`

export const Button = (props) => {
    const {value} = props


    return (
        <>
            <ButtonStyled  {...props}>
                {value}
            </ButtonStyled>
        </>
    );
};

