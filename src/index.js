import React from 'react';
import { MuiThemeProvider, } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SearchBar from './SearchBar';
import ProjektiApp from './ProjektiApp';




ReactDOM.render(
  <MuiThemeProvider>
  <React.StrictMode>
    <ProjektiApp/>
  </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
