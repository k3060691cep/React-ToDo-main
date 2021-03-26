import React, {useContext, useState} from 'react';
import {ModalContext} from "../../context/modal-context";
import styled from "styled-components";
import {Button} from "../button";
import {ColorPicker} from "../color-picker";

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
const Footer = styled.footer`
position: relative;
 bottom: 0;
 right: 0;
  display: flex;
  padding: 16px 16px;
  justify-content: flex-end;
  align-items: flex-end;
`

export const ModalAddList = ({addNewList, colors}) => {
    const [text, setText] = useState();




    const handleChangeText = (e) => {
        const newText = e.currentTarget.value
        setText(newText)
    }
    const handleClickAddList = () => {
        if (text){
            addNewList(text )
            setText('')
            closeModal()
        } else {
            alert('Введите текст')
        }
    }

    const addNewListOnKey = (e) => {
        if (text && e.key === "Enter") {
            addNewList(text)
            closeModal()
        }
    }

    const {closeModal} = useContext(ModalContext)

    const handleClickCloseModal = () => {
        closeModal()
    }

    return (
        <>
            <LabelStyled >Название</LabelStyled>
            <InputStyled onChange={handleChangeText} onKeyPress={e => addNewListOnKey(e)} value={text} />

            {colors.map((color, index) => (
                <ColorPicker handleClickAddList={handleClickAddList}  key={index} color={color.hex} />
                )

            )}

            <Footer>
                <Button  value={'Отмена'} onClick={handleClickCloseModal} />
                <Button  value={'Добавить'} onClick={handleClickAddList} primary />
            </Footer>

        </>
    )
}

