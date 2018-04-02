import './_layout.scss';
import React from 'react';
import {Route, Switch, Redirect, BrowserRouter, Link} from 'react-router-dom';

import Landing from '../landing';
import Projects from '../projects';
import About from '../about';
import Resume from '../resume';

export default class Layout extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to='/home' className='nav'>home</Link></li>
              <li><Link to='/projects' className='nav'>projects</Link></li>
              <li><Link to='/about' className='nav'>about</Link></li>
              <li><Link to='/resume' className ='nav'>resume</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path='/projects' component={Projects}/>
            <Route path='/about' component={About}/>
            <Route path='/resume' component={Resume}/>
            <Route path='/' component={Landing}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
