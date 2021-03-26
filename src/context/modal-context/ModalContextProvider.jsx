import {ModalContext} from './ModalContext'
import {Modal} from "../../component/modal/Modal";
import React, {useState} from "react";

export const ModalProvider = ({children}) => {
    const [modalOpened, setModalOpened] = useState(false)
    const [modalContent, setModalContent] = useState(null)

    const openModal = (modalConfig) => {
        setModalContent(modalConfig);
        setModalOpened(true)
    }

    const  closeModal = () => {
        setModalOpened(false)
    }

    const valueModal = {
        openModal,
        closeModal,
    }


    return (
        <ModalContext.Provider value={valueModal}>
            {modalOpened && <Modal {...modalContent}/>}
            {children}
        </ModalContext.Provider>
    );
};

