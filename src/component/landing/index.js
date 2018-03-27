import './_landing.scss';
import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Projects from '../projects';

import Catherine from '../../assets/author.jpg';


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBlinking: true,
    };

    this.toggleBlink = this.toggleBlink.bind(this);
  }

  toggleBlink() {
    this.setState({isBlinking: !this.state.isBlinking});  
  }

  render() {
    console.log(this.state);
    return (
      <BrowserRouter>
        <div> 
          <nav>
            <ul>
              <li>home</li>
              <li>about</li>
              <Link to='/projects'>projects</Link>
            </ul>
          </nav>
          <h1 className={this.state.isBlinking ? 'toggleBlink' : null} id="blink" onClick={this.toggleBlink}>catherine looper</h1>
          <img id='catherine-photo' src={Catherine} alt="catherine" />
          <Route exact path='/projects' component={Projects}/>;
        </div>
        
      </BrowserRouter>
    );
  }
}

export default Landing;