import React from 'react';
import styled from 'styled-components'
import moon from '../../assets/img/moon.svg'
import sun from '../../assets/img/sunny.svg'

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
`
const Sliderspan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #ccc;
  border-radius: 100px;
  box-shadow: 2px 1px 3px 2px rgba(34, 60, 80, 0.2) inset; 
  &::before{
  z-index: 10;
    position: absolute;
    content: '' ;
    height: 18px;
    width: 18px;
    left: 1px;
    bottom: 1px;
    background-color: white;
    border-radius: 50%;
    transition: 0.2s;
    box-shadow: 0 0 1px 1px rgba(34, 60, 80, 0.2);
    
  }
`
const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span:before{
  transform: translateX(20px); 
  &:checked + span{
  background-color: green;
  }
`

const Sun = styled.img`
  position: absolute;
  left: 2px;
  top: 3px;
  height: 14px;
  width: 14px;
  cursor: pointer;
  
`
const Moon = styled.img`
  position: absolute;
  right: 2px;
  top: 3px;
  height: 14px;
  width: 14px;
  cursor: pointer;
`
export function Switch({toggleTheme, onTogle}) {
    return (
        <SwitchLabel>
            <Input type="text" type="checkbox" onChange={onTogle} checked={toggleTheme}/>
            <Sliderspan />
            <Moon src={moon} alt="moon"/>
            <Sun src={sun} alt="sun"/>
        </SwitchLabel>
    );
}

