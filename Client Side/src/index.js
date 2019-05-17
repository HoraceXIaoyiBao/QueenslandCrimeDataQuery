import './index.css';

import LoginInput from './LoginInput';
import OffenceCategory from './OffenceCategory';

import React, { Component } from 'react';
import ReactDOM from 'react-dom'


import './App.css';




const loginpanelElement = document.getElementById("loginInput");
  ReactDOM.render(<LoginInput />, loginpanelElement);
  

const ControlPanelElement = document.getElementById("ControlPanel");
ReactDOM.render(<OffenceCategory />, ControlPanelElement);
