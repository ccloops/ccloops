import './_landing.scss';
import React from 'react';
import Resume from '../../assets/resume.pdf';

class Landing extends React.Component {
  render() {
    return (
      <div className='resume'>
        <iframe src={Resume} frameBorder="0"></iframe>
      </div>
    );
  }
}

export default Landing;