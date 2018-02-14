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
              <a target='blank' href='https://geo-jumper-frontend.herokuapp.com/'><li>Geo-Jumper</li></a>
              <a target='blank' href='https://github.com/Meetup-Trendly/trendly-server'><li>Trendly</li></a>
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