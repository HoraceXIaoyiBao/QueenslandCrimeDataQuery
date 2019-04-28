import './index.css';

import LoginInput from './LoginInput';
import OffenceCategory from './OffenceCategory';

import React, { Component } from 'react';
import ReactDOM from 'react-dom'


import './App.css';




const rootElement = document.getElementById("loginInput");
  ReactDOM.render(<LoginInput />, rootElement);
  

const ControlPanelElement = document.getElementById("ControlPanel");
ReactDOM.render(<OffenceCategory />, ControlPanelElement);
