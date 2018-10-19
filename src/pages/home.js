import React, { Component } from 'react';
import '../css/home.css';
import {Animated} from "react-animated-css";
import broadway from '../images/broadway4.jpg';
import bedford from '../images/bedfordicon.png';
import inicon from '../images/inicon.png';
import ishi from '../images/ishiicon.png';
import move from '../images/moveicon.png';
import native from '../images/nativeicon.png';
import newicon from '../images/newicon.png';
import Button from '@material-ui/core/Button';


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
                <i class="material-icons">
                    keyboard_arrow_down
                </i>
            </Animated>
            <main className="projects">
                <p className="title">Projects</p>
                <div className="project-container">
                    <section className="project-ex">
                        <img src={broadway} />
                        <p>Broadway Project</p>
                        <Button variant="contained">
                          <span classname="view-button"> View Broadway </span>
                        </Button>
                    </section>
                    <section className="project-ex">
                        <img src={bedford} />
                        <p>Bedford Project</p>
                        <Button variant="contained">
                         <span classname="view-button"> View Bedford </span>
                        </Button>
                    </section>
                </div>
                <div className="project-container">
                    <section className="project-ex">
                        <img src={inicon} />
                        <p>Innovation Project</p>
                        <Button variant="contained">
                            <span classname="view-button"> View Innovation </span>
                        </Button>
                    </section>
                    <section className="project-ex">
                        <img src={ishi} />
                        <p>Ishimoto Project</p>
                        <Button variant="contained">
                          <span classname="view-button"> View Ishimoto </span>
                        </Button>
                    </section>
                </div>
                <div className="project-container">  
                    <section className="project-ex">
                        <img src={move} />
                        <p>Move Project</p>
                        <Button variant="contained">
                       <span classname="view-button">   View Move  </span>
                        </Button>
                    </section>
                    <section className="project-ex">
                        <img src={native} />
                        <p>Native Project</p>
                        <Button variant="contained">
                        <span classname="view-button">  View Native </span>
                        </Button>
                    </section>
                </div>    
                <div className="project-container bottom">
                    <section className="project-ex">
                        <img src={newicon} />
                        <p>Newsroom Project</p>
                        <Button variant="contained">
                          <span classname="view-button"> View Newsroom </span>
                        </Button>
                    </section>
                </div>
            </main>
        </div>
      );
    }
  }
  
  export default Home;