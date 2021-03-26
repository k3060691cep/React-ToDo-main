import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import {ModalProvider} from "./context/modal-context";


const Global = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
`

ReactDOM.render(
    <Router>
        <ModalProvider>
        <Global/>
            <App/>
            </ModalProvider>
    </Router>,
    document.getElementById('root')
);

reportWebVitals();
