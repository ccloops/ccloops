import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
// import App from './component/app';
import Landing from './component/landing';

const container = document.createElement('div');
document.body.appendChild(container);

ReactDom.render(<Landing/>, container);