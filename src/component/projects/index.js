import './_projects.scss';
import React from 'react';

import Clouds from '../../assets/cloud-level-overview.png';
import Quiz from '../../assets/quiz-fellows.png';
import OhRose from '../../assets/oh-rose.png';
import Trendly from '../../assets/Trendly-flowchart.png';
import Todo from '../../assets/todo-list-overview.png';
import GeoJumper from '../../assets/lava-level-overview.png';


export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded1: false,
      isExpanded2: false,
      isExpanded3: false,
      isExpanded4: false,
      isExpanded5: false,
    };

    this.toggleModal1 = this.toggleModal1.bind(this);
    this.toggleModal2 = this.toggleModal2.bind(this);
    this.toggleModal3 = this.toggleModal3.bind(this);
    this.toggleModal4 = this.toggleModal4.bind(this);
    this.toggleModal5 = this.toggleModal5.bind(this);
  }

  toggleModal1() {
    this.setState({isExpanded1: !this.state.isExpanded1});
  }  
  toggleModal2() {
    this.setState({isExpanded2: !this.state.isExpanded2});
  }
  toggleModal3() {
    this.setState({isExpanded3: !this.state.isExpanded3});
  }
  toggleModal4() {
    this.setState({isExpanded4: !this.state.isExpanded4});
  }
  toggleModal5() {
    this.setState({isExpanded5: !this.state.isExpanded5});
  }
  render() {
    console.log(this.state);
    return (
      <div className='projects'>
        <div className={this.state.isExpanded1 ? 'toggleModal' : ''} onDoubleClick={this.toggleModal1}>
          <a target='blank' href='https://geo-jumper-frontend.herokuapp.com/'>visit</a>
          <img src={Clouds} alt='cloud-level' />
          <p>Geo-Jumper is a multiplayer fullstack platform game that combines socket.io with a frontend React library. This application is designed to create a unique game experience by matching online users to race to the finish line and be the first to catch the star. This application showcases a multiplayer/multi-level game and persists user data using MongoDB.</p>
          <h3>GeoJumper</h3>
        </div>
    
        <div className={this.state.isExpanded2 ? 'toggleModal' : ''} onDoubleClick={this.toggleModal2}>
          <a target='blank' href='https://ccloops.github.io/quiz-fellows/'>visit</a>
          <img src={Quiz} alt='quiz fellows'/>
          <p>Quiz Fellows is a quiz generating application written in pure vanilla JavaScript. This application allows users to take any of the hard-coded beginner-level coding quizzes in the `Take Quiz` section of the application. The application also allows users to make their very own quizzes in the `Make Quiz` section. These quizzes are then stored so that the user can take their personalized quiz in the same format as the hard-coded quizzes. This application relies on local storage for persistence.</p>
          <h3>Quiz Fellows</h3>
        </div>
     
        <div className={this.state.isExpanded3 ? 'toggleModal' : ''} onDoubleClick={this.toggleModal3}>
          <a target='blank' href='https://oh-rose.herokuapp.com/'>visit</a>
          <img src={OhRose} alt='Oh, Rose' />
          <p>A React application for a band from Olympia, Washington.</p>
          <h3>Oh, Rose</h3>
        </div>
   
        <div className={this.state.isExpanded4 ? 'toggleModal' : ''} onDoubleClick={this.toggleModal4}>
          <a target='blank' href='https://github.com/Meetup-Trendly/trendly-server'>visit</a>
          <img src={Trendly} alt='Trendly'/>
          <p>Trendly is a RESTful API that connects users via (Short Message Service) SMS to Meetup (https://www.meetup.com/). This app allows users to sign up with their Meetup User ID via text message. Once signed up, users will automatically receive a text notification 24 hours before any of their upcoming meetup events. With the Trendly application, users no longer need to worry about missing a Meetup event as text notifications will keep users up to date on all of their Meetup groups.</p>
          <h3>Trendly</h3>
        </div>
    
        <div className={this.state.isExpanded5 ? 'toggleModal' : ''} onDoubleClick={this.toggleModal5}>
          <a target='blank' href='https://catherine-todo.herokuapp.com/'>visit</a>
          <img src={Todo} alt='Todo List'/>
          <p>In this project, I built a frontend Todo List application containing a Home Page with a brief description about the application, and a Dashboard page where users can create their own Todo List. To create a Todo List, users can enter a note title and description and click Submit New Note. Users also have the ability to remove any of their created notes by clicking the Delete button next to the note they would like to remove.</p>
          <h3>Todo List</h3>
        </div>
      </div>
    );
  }
}










