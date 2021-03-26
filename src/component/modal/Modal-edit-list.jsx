import React, {useContext, useState, useEffect} from 'react';
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
const Footer = styled.footer`
  position: relative;
  bottom: 0;
  right: 0;
  display: flex;
  padding: 16px 16px;
  justify-content: flex-end;
  align-items: flex-end;
`

export const ModalEditList = ({item, editList}) => {
    const [text, setText] = useState(item.name);

    const handleChangeText = (e) => {
        const newText = e.target.value
        setText(newText)
    }
    const handleClickAddList = () => {
        if (text){
            editList(text, item.id)
            closeModal()
        } else {
            alert('Введите текст')
        }
    }

    const editListOnKey = (e) => {
        if (text && e.key === "Enter"){
            editList(text, item.id)
            closeModal()
        }

    }

    const {closeModal} = useContext(ModalContext)

    const handleClickCloseModal = () => {
        closeModal()
    }

    return (
        <>
            <InputStyled type="text" onChange={handleChangeText} onKeyPress={e => editListOnKey(e)}  value={text} />
            <Footer>
                <Button  value={'Отмена'} onClick={handleClickCloseModal} />
                <Button  value={'Добавить'} onClick={handleClickAddList} primary />
            </Footer>

        </>
    )
}

