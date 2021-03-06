import React, { Component } from 'react';
import '../css/home.css';
import {Animated} from "react-animated-css";
import Projects from '../components/projects';
import  ScrollableAnchor  from 'react-scrollable-anchor';

class Home extends Component {
    
    render() {
      return (
        <div className="container-home">
            <Animated animationIn="fadeInDown" isVisible={true} className="animated-intro">
                <div className="home">
                    <div className="intro">
                        Hello, I'm Joseph Jennings
                    </div>
                    <div className="intro-sub">
                        I am a <div className="fed">Front-End Developer</div> based in San Diego training in Full Stack and interested UI/UX design.
                    </div>
                </div>
            </Animated>
            <Animated animationIn="fadeInDown" isVisible={true} className="arrow">
                <a href="#projectsSection">
                    <i class="material-icons arrow" >keyboard_arrow_down</i>
                </a>
            </Animated>
            <div>
                <Projects />
            </div>          
        </div>
      );
    }
  }
  
export default Home;