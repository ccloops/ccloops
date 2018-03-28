import './_projects.scss';
import React from 'react';

import Clouds from '../../assets/cloud-level-overview.png';
import Quiz from '../../assets/quiz-fellows.png';
import OhRose from '../../assets/oh-rose.png';
import Trendly from '../../assets/Trendly-flowchart.png';
import Todo from '../../assets/todo-list-overview.png';

export default class Projects extends React.Component {
  render() {
    return (
      <div className='projects'>
        <a target='blank' href='https://geo-jumper-frontend.herokuapp.com/' className='center'><img src={Clouds} alt='cloud-level' /></a>
        <a target='blank' href='https://ccloops.github.io/quiz-fellows/' className='deg0'><img src={Quiz} alt='quiz fellows'/></a>
        <a target='blank' href='https://oh-rose.herokuapp.com/' className='deg45'><img src={OhRose} alt='Oh, Rose' /></a>
        <a target='blank' href='https://github.com/Meetup-Trendly/trendly-server'><img src={Trendly} alt='Trendly'/></a>
        <a target='blank' href='https://github.com/ccloops/28-todo-app/tree/master/lab-catherine'><img src={Todo} alt='Todo List'/></a>
      </div>
    );
  }
}

