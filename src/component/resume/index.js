import './_resume.scss';
import React from 'react';
import { Document, Page } from 'react-pdf';
import ResumeDoc from '../../assets/resume.pdf';

export default class Resume extends React.Component {
  render() {
    return(
      <div id="resume">
        <iframe src={ResumeDoc} frameBorder="0"></iframe>          
      </div>
    );
  }
} 
