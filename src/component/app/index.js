import './_app.scss';
import React from 'react';
import {Route, Switch, Redirect, BrowserRouter, Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import FaBars from 'react-icons/lib/fa/bars';

import Landing from '../landing';
import Projects from '../projects';
import About from '../about';
import Resume from '../resume';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClicked: false,
      backgroundColor: '',
    };

    this.toggleHamburger = this.toggleHamburger.bind(this);
    this.toggleBackgroundColor = this.toggleBackgroundColor.bind(this);
  }

  toggleHamburger() {
    this.setState({menuClicked: !this.state.menuClicked});
  }

  toggleBackgroundColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let colorToDisplay = `rgb(${r}, ${g}, ${b})`;
    this.setState({backgroundColor: colorToDisplay});
  }

  render() {
    console.log(this.state);
    return(
      <BrowserRouter>
        <div style={{backgroundColor: this.state.backgroundColor}}>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content="Catherine Looper" />
            <meta property="og:image" content="https://s3-us-west-2.amazonaws.com/cloopercatpic/c7f5a7c8e7da315a8bcadc410ae73a1d.mooshy.jpg" />
            <meta property="og:description" 
              content="Catherine Looper - collection of weird." />
            <link rel="shortcut icon" type="image/png" href="https://www.stickersmalin.com/images/ajoute/prd/107/107989-image2_448x448.png" />           
            <title>loops</title>
          </Helmet>
          <nav onClick={this.toggleBackgroundColor} className={this.state.menuClicked ? 'toggleHamburger' : ''} >
            <ul>
              <li onClick={this.toggleHamburger} id='hamburger'><FaBars/></li>
              <li id='first' className='links'><Link to='/home' className='nav'>home</Link></li>
              <li className='links' ><Link to='/projects' className='nav'>projects</Link></li>
              <li className='links'><Link to='/about' className='nav'>about</Link></li>
              <li className='links'><Link to='/resume' className ='nav'>resume</Link></li>
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