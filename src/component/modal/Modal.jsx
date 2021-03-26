import React, {useContext} from 'react';
import styled, {keyframes}  from  'styled-components';
import {ModalContext} from "../../context/modal-context";

const surfacing = keyframes`
  from{
  opacity: 0;
    transform: translateY(-600px) 
  }
  to{
  opacity: 1;
    transform: translateY(0px)
  }
`
const BackgroundModal = styled.div`
  display: flex;
   justify-content: center; 
&:before { 
    content: '';
    background: #000;
    position: fixed; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    opacity: 0.4;
    z-index: 99;
    }
`
const ModalBlock = styled.div`
 animation: ${surfacing} 0.2s ease-out  ;
 position:fixed;
 top: 200px;
 min-height: 100px ;
 width: 400px;
 border-radius: 10px;
 background-color: #ffffff;
 box-shadow: 0 0 14px -3px rgba(0, 0, 0, 0.2);
 z-index: 999;
`
const Title = styled.header`
  padding: 16px 16px;
  border-bottom: 1px solid #616161;
`

const Content = styled.div`
  padding: 16px 16px;
   border-bottom: 1px solid #616161;

`

export const Modal = (props) => {
    const {title, content} = props;
    const {closeModal} = useContext(ModalContext)

    const handleClickCloseModal = (e) => {
        if (e.target){
            console.log(e.target)
            closeModal()
        }

    }

    return (
        <BackgroundModal onClick={(e) => {
            handleClickCloseModal(e)
        }}>
            <ModalBlock onClick={(e) => {
                e.stopPropagation()
            }}>
                <Title>{title}</Title>
                {content && <Content>
                    {content}
                </Content>}
            </ModalBlock>
        </BackgroundModal>
    );
};

