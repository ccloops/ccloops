import './_projects.scss';
import React from 'react';

import Clouds from '../../assets/cloud-level-overview.png';
import Quiz from '../../assets/quiz-fellows.png';
import OhRose from '../../assets/oh-rose.png';

class Projects extends React.Component {
  render() {
    return (
      <div>
        <ul className='projects'>
          <a target='blank' href='https://geo-jumper-frontend.herokuapp.com/'><li>Geo-Jumper</li></a>
          <a target='blank' href='https://github.com/Meetup-Trendly/trendly-server'><li>Trendly</li></a>
          <a target='blank' href='https://ccloops.github.io/quiz-fellows/'><li>Quiz Fellows</li></a>
          <a target='blank' href='https://github.com/ccloops/28-todo-app/tree/master/lab-catherine'><li>To Do List</li></a>
          <a target='blank' href='https://ccloops.github.io/oh-rose/'><li>Oh, Rose</li></a>

          <div className='circle-container'>
            <a href='#' className='center'><img src={Clouds} alt="cloud-level" /></a>
            <a href='#' className='deg0'><img src={Quiz} alt="quiz fellows" /></a>
            <a href='#' className='deg45'><img src={OhRose} alt="Oh, Rose" /></a>
          </div>
        </ul>
      </div>
    );
  }
}

export default Projects;