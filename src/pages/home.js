import React, { Component } from 'react';
import '../css/home.css';

class Home extends Component {
    render() {
      return (
        <div className="container-home">
            <div className="home">
                <div className="intro">
                    Hello, I'm Joseph Jennings III
                </div>
                <div className="intro-sub">
                    I am a <span>Front-End Developer</span> based in San Diego training in Full Stack and interested UI/UX design.
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Home;