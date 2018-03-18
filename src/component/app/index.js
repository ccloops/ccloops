import './_app.scss';
import {FaGithub, FaLinkedin} from 'react-icons/lib/fa';
import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Landing from '../landing';
import Catherine from '../../assets/catherine.jpg';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <a href="#home"><li>Home</li></a>              
                <a href="#about"><li>About</li></a>
                <a href="#portfolio"><li>Portfolio</li></a>
                <a href="#skills"><li>Skills</li></a>
                <a href="#contact"><li>Contact</li></a>
              </ul>
            </nav>  
            <div id="img" className="parallax">        
              <h1 id="home">Catherine Looper</h1>
              <div id='icons'>
                <a target='blank' href='https://github.com/ccloops'><h3><FaGithub/></h3></a>
                <a target='blank' href='https://www.linkedin.com/in/catherinelooper/'><h3><FaLinkedin/></h3></a>
              </div>   
            </div>
            <hr />

            <img src={Catherine} alt="" />
            
            <ul id="portfolio" className='projects'>
              <a target='blank' href='https://geo-jumper-frontend.herokuapp.com/'>
                <li>Geo-Jumper</li>
                <p>Geo-Jumper is a multiplayer fullstack platform game that combines socket.io with a frontend React library. This application is designed to create a unique game experience by matching online users to race to the finish line and be the first to catch the star. This application showcases a multiplayer/multi-level game and persists user data using MongoDB.</p>
              </a>
              <a target='blank' href='https://github.com/Meetup-Trendly/trendly-server'>
                <li>Trendly</li>
                <p>Trendly is a RESTful API that connects users via (Short Message Service) SMS to Meetup (https://www.meetup.com/). This app allows users to sign up with their Meetup User ID via text message. Once signed up, users will automatically receive a text notification 24 hours before any of their upcoming meetup events. With the Trendly application, users no longer need to worry about missing a Meetup event as text notifications will keep users up to date on all of their Meetup groups.</p></a>
              <a target='blank' href='https://ccloops.github.io/quiz-fellows/'>
                <li>Quiz Fellows</li>
                <p>Quiz Fellows is a quiz generating application written in pure vanilla JavaScript. This application allows users to take any of the hard-coded beginner-level coding quizzes in the `Take Quiz` section of the application. The application also allows users to make their very own quizzes in the `Make Quiz` section. These quizzes are then stored so that the user can take their personalized quiz in the same format as the hard-coded quizzes. This application relies on local storage for persistence.</p>
              </a>
              <a target='blank' href='https://github.com/ccloops/28-todo-app/tree/master/lab-catherine'>
                <li>To Do List</li>
                <p>In this project, I built a frontend Todo List application containing a Home Page with a brief description about the application, and a Dashboard page where users can create their own Todo List. To create a Todo List, users can enter a note title and description and click Submit New Note. Users also have the ability to remove any of their created notes by clicking the Delete button next to the note they would like to remove.</p>
              </a>
              <a target='blank' href='https://oh-rose.herokuapp.com/'>
                <li>Oh, Rose</li>
                <p>A React application for a band from Olympia, Washington.</p>
              </a>
            </ul>

            <div id="about">
              <hr />
              <h2>About Me</h2>
              <hr/>
              <p>JavaScript Developer, MERN Stack with background in customer service, inventory management, and database querying. Passionate about solution-driven development with a focus in creative and innovative customer-minded applications.
              
              In my free time, I enjoy creating photo and video projects for local musicians, attending Seattle JS Hackers Meetups and tinkering with web design.</p>
            </div>

            <hr />

            <div id="skills">
              <ul>
                <h2>Skills</h2>
                <hr />
                <a href="https://www.javascript.com/"><li>JavaScript</li></a>
                <a href="https://nodejs.org/en/"><li>Node.js</li></a>
                <a href="https://www.mongodb.com/"><li>MongoDB</li></a>
                <a href="http://mongoosejs.com/"><li>Mongoose</li></a>
                <a href="https://expressjs.com/"><li>Express</li></a>
                <a href="https://www.javascript.com/"><li>HTML</li></a>
                <a href="https://www.javascript.com/"><li>CSS</li></a>
                <a href="https://sass-lang.com/"><li>SASS</li></a>
                <a href="https://jquery.com/"><li>jQuery</li></a>
                <a href="https://www.postgresql.org/"><li>PostgreSQL</li></a>
              </ul>
            </div>

            <div id="contact">
              <hr />              
              <h2>Contact</h2>
              <hr/>
              <ul>
                <li>Email: loopercat@gmail.com</li>
                <li>GitHub: https://github.com/ccloops</li>
                <li>LinkedIn: https://www.linkedin.com/in/catherinelooper/</li>
              </ul>
            </div>
    
            <footer>
              <a href="/"><h3> © 2018 Catherine Looper</h3></a>
            </footer>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


    
// <a target='blank' href='https://github.com/ccloops'><h3><FaGithub/></h3></a>
// <a target='blank' href='https://www.linkedin.com/in/catherinelooper/'><h3><FaLinkedin/></h3></a>