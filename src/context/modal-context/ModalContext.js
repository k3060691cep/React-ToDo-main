import {createContext} from 'react';



export const Context = createContext({
    openModal: () => {},
    closeModal: () => {}
});