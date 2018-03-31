import './_projects.scss';
import React from 'react';

import Clouds from '../../assets/cloud-level-overview.png';
import Quiz from '../../assets/quiz-fellows.png';
import OhRose from '../../assets/oh-rose.png';
import Trendly from '../../assets/Trendly-flowchart.png';
import Todo from '../../assets/todo-list-overview.png';
import GeoJumper from '../../assets/lava-level-overview.png';


export default class Projects extends React.Component {
  render() {
    return (
      <div className='projects'>
        <a target='blank' href='https://geo-jumper-frontend.herokuapp.com/' className='portfolio-containers'>
          <img src={Clouds} alt='cloud-level' />
          <p>Geo-Jumper is a multiplayer fullstack platform game that combines socket.io with a frontend React library. This application is designed to create a unique game experience by matching online users to race to the finish line and be the first to catch the star. This application showcases a multiplayer/multi-level game and persists user data using MongoDB.</p>
          <h3>Geo-Jumper</h3>
        </a>
          
        <a target='blank' href='https://ccloops.github.io/quiz-fellows/' className='portfolio-containers'>
          <img src={Quiz} alt='quiz fellows'/>
          <p>Quiz Fellows is a quiz generating application written in pure vanilla JavaScript. This application allows users to take any of the hard-coded beginner-level coding quizzes in the `Take Quiz` section of the application. The application also allows users to make their very own quizzes in the `Make Quiz` section. These quizzes are then stored so that the user can take their personalized quiz in the same format as the hard-coded quizzes. This application relies on local storage for persistence.</p>
          <h3>Quiz Fellows</h3>
        </a>
          
        <a target='blank' href='https://oh-rose.herokuapp.com/' className='portfolio-containers'>
          <img src={OhRose} alt='Oh, Rose' />
          <p>A React application for a band from Olympia, Washington.</p>
          <h3>Oh, Rose</h3>
        </a>

        <a target='blank' href='https://github.com/Meetup-Trendly/trendly-server' className='portfolio-containers'>
          <img src={Trendly} alt='Trendly'/>
          <p>Trendly is a RESTful API that connects users via (Short Message Service) SMS to Meetup (https://www.meetup.com/). This app allows users to sign up with their Meetup User ID via text message. Once signed up, users will automatically receive a text notification 24 hours before any of their upcoming meetup events. With the Trendly application, users no longer need to worry about missing a Meetup event as text notifications will keep users up to date on all of their Meetup groups.</p>
          <h3>Trendly</h3>
        </a>

        <a target='blank' href='https://catherine-todo.herokuapp.com/' className='portfolio-containers'>
          <img src={Todo} alt='Todo List'/>
          <p>In this project, I built a frontend Todo List application containing a Home Page with a brief description about the application, and a Dashboard page where users can create their own Todo List. To create a Todo List, users can enter a note title and description and click Submit New Note. Users also have the ability to remove any of their created notes by clicking the Delete button next to the note they would like to remove.</p>
          <h3>To Do List</h3>
        </a>
      </div>
    );
  }
}

