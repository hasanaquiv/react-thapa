import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './index.css'
//import ComA from './ComA'


ReactDom.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
)