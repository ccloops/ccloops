import './_landing.scss';
import React from 'react';
import Signature from '../../assets/signature.jpg';

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
      <div> 
        <h1 className={this.state.isBlinking ? 'toggleBlink' : null} id="blink" onClick={this.toggleBlink}>Catherine Looper</h1>
        <img src={Signature} alt="signature" />
      </div>
    );
  }
}

export default Landing;