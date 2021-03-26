import React, {useState} from 'react';
import styled from 'styled-components'

const Color = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin: 5px 5px;
  background-color: ${props => (props.color)} ;
    
`

export const ColorPicker = (props) => {
    const {children, handleClickAddList, color} = props
    const [handleColor, setHandleColor] = useState()

    const pickColor = (e) => {
        console.log(e.target)
        setHandleColor(e.target.attributes.color.value)
     
    }


    return (
        <>
            <Color onClick={(e) => {pickColor(e) }}  color={color}/>
        </>
    );
};