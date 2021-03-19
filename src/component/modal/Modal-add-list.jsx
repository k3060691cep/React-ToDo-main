import React, {useContext, useState} from 'react';
import {ModalContext} from "../../context/modal-context";
import styled from "styled-components";
import {Button} from "../button";

const InputStyled = styled.input`
  border: 1px solid #cbcbcb;
    border-radius: 5px;
    padding: 5px 5px;
    margin: 0;
    width: calc(100% - 15px) ;
    &:focus{
      border: 1px solid #868686;
    }
`
const LabelStyled = styled.div`
  padding-bottom: 10px
`

const Input = ({addNewList}) => {
    const [text, setText] = useState();

    const handleChangeText = (e) => {
        const newText = e.target.value
        setText(newText)
    }
    const handleClick = () => {
        addNewList(text)
    }

    return (
        <>
            <LabelStyled >Название</LabelStyled>
            <InputStyled onChange={handleChangeText} value={text} />
            <Button  value={'Добавить'} onClick={handleClick} primary/>
        </>
    );
};

export default Input;