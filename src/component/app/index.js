import './_app.scss';
import {FaGithub, FaLinkedin} from 'react-icons/lib/fa';
import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

// import Landing from '../landing';
// import Projects from '../projects';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <h1>Catherine Looper</h1>
            <ul className='projects'>
              <a target='blank' href='https://geo-jumper-frontend.herokuapp.com/'>
                <li>Geo-Jumper</li>
                <p>Geo-Jumper is a multiplayer fullstack platform game that combines socket.io with a frontend React library. This application is designed to create a unique game experience by matching online users to race to the finish line and be the first to catch the star. This application showcases a multiplayer/multi-level game and persists user data using MongoDB.</p>
              </a>
              <a target='blank' href='https://github.com/Meetup-Trendly/trendly-server'>
                <li>Trendly</li>
                <p>Trendly is a RESTful API that connects users via (Short Message Service) SMS to Meetup (https://www.meetup.com/). This app allows users to sign up with their Meetup User ID via text message. Once signed up, users will automatically receive a text notification 24 hours before any of their upcoming meetup events. With the Trendly application, users no longer need to worry about missing a Meetup event as text notifications will keep users up to date on all of their Meetup groups.</p></a>
              <a target='blank' href='https://ccloops.github.io/quiz-fellows/'><li>Quiz Fellows</li></a>
              <a target='blank' href='https://github.com/ccloops/28-todo-app/tree/master/lab-catherine'><li>To Do List</li></a>
              <a target='blank' href='https://ccloops.github.io/oh-rose/'><li>Oh, Rose</li></a>
            </ul>
          </div>
   
        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


// <div>
// <header>
// <nav>
// <ul>
//   <li><Link to='/'>Home</Link></li>
//   <li><Link to='/projects'>Projects</Link></li>
// </ul>
// </nav>
// </header>
// <footer>
// </footer>
// <Route exact path='/' component={Landing}/>
// <Route exact path='/projects' component={Projects}/>
// <ul className='icons'>
// <li><a href='https://github.com/ccloops' target='blank'><FaGithub/></a></li>
// <li><a href='https://www.linkedin.com/in/catherinelooper/' target='blank'><FaLinkedin/></a></li>
// </ul>

// </div>