import './_app.scss';
import {FaGithub, FaLinkedin} from 'react-icons/lib/fa';
import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Landing from '../landing';
import Projects from '../projects';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <header>
              <nav>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/projects'>Projects</Link></li>
                </ul>
              </nav>
            </header>
            <footer>
              <ul className='icons'>
                <li><a href='https://github.com/ccloops' target='blank'><FaGithub/></a></li>
                <li><a href='https://www.linkedin.com/in/catherinelooper/' target='blank'><FaLinkedin/></a></li>
              </ul>
            </footer>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/projects' component={Projects}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;