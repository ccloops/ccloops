import './_landing.scss';
import React from 'react';

import Catherine from '../../assets/author.jpg';


export default class Landing extends React.Component {
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
      <div> 
        <h1 className={this.state.isBlinking ? 'toggleBlink' : ''} id="blink" onClick={this.toggleBlink}>catherine looper</h1>
        <div id="yin"></div>
        
        <footer>
          <a href="/"><h3> © Catherine Looper 2018</h3></a>
        </footer>
      </div>        
    );
  }
}
  
  
// <img id='catherine-photo' src={Catherine} alt="catherine" />