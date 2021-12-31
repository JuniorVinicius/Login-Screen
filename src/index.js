import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Favicon from "react-favicon";
import tree from '../src/img/tree.ico'

ReactDOM.render(
  <React.StrictMode>
    <Favicon url={tree} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
