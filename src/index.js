import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SimpleMenu from './menu';

ReactDOM.render(
  <React.StrictMode>
    <SimpleMenu/>,
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
