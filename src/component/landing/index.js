import './_landing.scss';
import React from 'react';
import Tilt from 'react-tilt';

import Catherine from '../../assets/author.jpg';
import BusinessCard from '../../assets/cclogo.png';


export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBlinking: true,
      backgroundColorCard: '',
    };

    this.toggleBlink = this.toggleBlink.bind(this);
    this.toggleBackgroundColorCard = this.toggleBackgroundColorCard.bind(this);
  }

  toggleBlink() {
    this.setState({isBlinking: !this.state.isBlinking});  
  }

  toggleBackgroundColorCard() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let colorToDisplay = `rgb(${r}, ${g}, ${b})`;
    this.setState({backgroundColorCard: colorToDisplay});
  }
  // <div id="yin"></div>

  render() {
    return (
      <div onClick={this.toggleBackgroundColorCard}> 
        <h1 className={this.state.isBlinking ? 'toggleBlink' : ''} id="blink" onClick={this.toggleBlink}>catherine looper</h1>
        <Tilt className="Tilt" options={{ max : 25, easing:         'cubic-bezier(.03,.98,.52,.99)' }} style={{ height: 750, width: 750 }} >
          <div className="Tilt-inner"> <img onClick={this.toggleBackgroundColorCard} style={{backgroundColor: this.state.backgroundColorCard}} id="logo" src={BusinessCard} /> </div>
        </Tilt>
        <footer>
          <a href="/"><h3> © Catherine Looper 2018</h3></a>
        </footer>
      </div>        
    );
  }
}
  
  