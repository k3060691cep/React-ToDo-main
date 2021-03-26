import React, {useContext} from 'react';
import {ModalContext} from "../../context/modal-context";
import styled from "styled-components";
import {Button} from "../button";

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

export const ModalDeleteList = ({deleteList, item}) => {
    const {closeModal} = useContext(ModalContext)

    const handleClickCloseModal = () => {
        closeModal()
    }

    const handleDelete = () => {
        deleteList(item)
        closeModal()
    }
    return (
        <>
            <LabelStyled >Вы действительно хотите удалить <span style={{color: 'red'}}>{item.name}</span>  ?</LabelStyled>
            <Footer>
                <Button  value={'Отмена'} onClick={handleClickCloseModal} />
                <Button  value={'Удалить'} onClick={handleDelete}  primary />
            </Footer>
        </>
    )
}

