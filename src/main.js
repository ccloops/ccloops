import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
// import App from './component/app';
import Layout from './component/layout';

const container = document.createElement('div');
document.body.appendChild(container);

ReactDom.render(<Layout/>, container);