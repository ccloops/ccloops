import './_projects.scss';
import React from 'react';

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
        </ul>
      </div>
    );
  }
}

export default Projects;