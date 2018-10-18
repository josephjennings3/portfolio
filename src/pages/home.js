import React, { Component } from 'react';
import '../css/home.css';
import {Animated} from "react-animated-css";


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
                        I am a <span>Front-End Developer</span> based in San Diego training in Full Stack and interested UI/UX design.
                    </div>
                </div>
            </Animated>
            <Animated animationIn="fadeInDown" isVisible={true} className="arrow">
                <i class="material-icons">
                    keyboard_arrow_down
                </i>
            </Animated>
            <main className="projects">
                <h1>Projects</h1>
                <div className="project-container">
                    <section className="project-ex">
                        project 1
                    </section>
                    <section className="project-ex">
                        project 2
                    </section>
                </div>
                <div className="project-container">
                    <section className="project-ex">
                        project 3
                    </section>
                    <section className="project-ex">
                        project 4
                    </section>
                </div>
                <div className="project-container">  
                    <section className="project-ex">
                        project 5
                    </section>
                    <section className="project-ex">
                        project 6
                    </section>
                </div>    
                <div className="project-container">
                    <section className="project-ex">
                        project 7
                    </section>
                </div>
            </main>
        </div>
      );
    }
  }
  
  export default Home;