import './_about.scss';
import React from 'react';

import Catherine from '../../assets/author.jpg';
import otherCatherine from '../../assets/catherine.jpg';

export default class About extends React.Component {
  render() {
    return(
      <div id='about'>
        <h2>About Me</h2>
        <hr/>
        <img src={Catherine}/>
        <p>JavaScript Developer, MERN Stack with background in customer service, inventory management, and database querying. Passionate about solution-driven development with a focus in creative and innovative customer-minded applications.
        
        In my free time, I enjoy creating photo and video projects for local musicians, attending Seattle JS Hackers Meetups and tinkering with web design.</p>

        <div id="skills">
          <ul>
            <hr />
            <a href="https://www.javascript.com/" target="blank"><li>JavaScript</li></a>
            <a href="https://nodejs.org/en/" target="blank"><li>Node.js</li></a>
            <a href="https://www.mongodb.com/" target="blank"><li>MongoDB</li></a>
            <a href="http://mongoosejs.com/" target="blank"><li>Mongoose</li></a>
            <a href="https://expressjs.com/" target="blank"><li>Express</li></a>
            <a href="https://www.javascript.com/" target="blank"><li>HTML</li></a>
            <a href="https://www.javascript.com/" target="blank"><li>CSS</li></a>
            <a href="https://sass-lang.com/" target="blank"><li>SASS</li></a>
            <a href="https://jquery.com/" target="blank"><li>jQuery</li></a>
            <a href="https://www.postgresql.org/" target="blank"><li>PostgreSQL</li></a>
            <a href="https://developer.apple.com/swift/" target="blank"><li>Swift</li></a>
            <a href="https://reactjs.org/"><li>React</li></a>
          </ul>
        </div>
      </div>
    );
  }
}