import  React, {useContext} from 'react'
import styled from 'styled-components'

import {ModalContext} from "../../context/modal-context"
import { ModalAddList, ModalDeleteList, ModalEditList} from  '../index'
import {colors} from "../../styles/global.js"
import addImg from "../../assets/img/plus.svg"
import deleteImg from "../../assets/img/delete.svg"
import pen from "../../assets/img/pen.svg"

const StyledSidebarList = styled.div`
  color: ${props => props.theme.colors.text};
  overflow: auto;
  height: 100%;
  box-sizing: border-box;
  width: 500px;
  border-right: 1px solid #616161;
  resize: both;
  padding: 30px 30px;
`
const StyledLi = styled.li`
    
    border-bottom: 1px solid #acacac;
    align-items: center;
    display: flex;
    justify-content: space-between;
`
const StyledUl = styled.ul`
    box-sizing: border-box;   
    font-size: 18px;
    line-height: 30px;
    max-height: 500px;
`
const OpenModal= styled.img`
    fill: #63d2e0;
    margin: 0 4px;
    cursor: pointer;
    height: 16px;
    width: 16px;

`
const AddList = styled.div`
    cursor: context-menu;
    padding: 14px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    text-align: center;
    align-content: center;
`
const TitleList = styled.span`
cursor: pointer;
  width: calc(100% - 50px);    
`

export const SidebarList = (props) => {
    const {colors, list, addNewList, deleteList, editList, addNewListOnKey, activeList} = props

    const {openModal} = useContext(ModalContext)

    const handleClickOpenModalAddList = () => {
        openModal({
            title: 'Добавить список',
            content: <ModalAddList colors={colors} addNewList={addNewList} addNewListOnKey={addNewListOnKey}/>
        })

    }

    const handleClickOpenModalDeleteList = (item) => {
        openModal({
            title: 'Удалить список?',
            content: <ModalDeleteList item={item} deleteList={deleteList}/>
        })
    }
    const handleClickOpenModalEditList = (item) => {
        openModal({
            title: 'Редактировать проект',
            content: <ModalEditList item={item} editList={editList}/>
        })
    }

    return (
        <StyledSidebarList>
            <AddList>
                <div>Добавить список</div>
                <OpenModal  onClick={handleClickOpenModalAddList} src={addImg} alt="add"/>
            </AddList>

            <StyledUl>
                { list.map((item) =>
                    <StyledLi key={item.id}  >
                        <TitleList onClick={activeList ? () => activeList(item, colors) : null}>{(item.name)}</TitleList>
                        <div>
                            <OpenModal onClick={() => handleClickOpenModalEditList(item)} editList={editList} src={pen} alt="add"/>
                            <OpenModal onClick={() => handleClickOpenModalDeleteList(item)} src={deleteImg} alt="add"/>
                            <img src="" fill alt=""/>

                        </div>

                    </StyledLi>
                    )
                }
            </StyledUl>
        </StyledSidebarList>
    )
}

