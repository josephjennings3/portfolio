import React, { Component } from 'react';
import '../css/projects.css';
import {Animated} from "react-animated-css";
import broadway from '../images/broadway4.jpg';
import bedford from '../images/bedfordicon.png';
import inicon from '../images/inicon.png';
import ishi from '../images/ishiicon.png';
import move from '../images/moveicon.png';
import native from '../images/nativeicon.png';
import newicon from '../images/newicon.png';
import Button from '@material-ui/core/Button';

class Projects extends Component {
    render() {
        return (
            <main className="projects">
                <p className="title">Projects</p>
                <div className="project-container">
                    <section className="project-ex">
                        <img src={broadway} />
                        <p className="project-title">Broadway Project</p>
                        <p className="lang">html/css</p>
                        <a href="http://josephjennings3.com/broadway/" target="_blank">
                            <Button variant="contained">
                            <span classname="view-button"> View Broadway </span>
                            </Button>
                        </a>
                    </section>
                    <section className="project-ex">
                        <img src={bedford} />
                        <p className="project-title">Bedford Project</p>
                        <p className="lang">html/css</p>
                        <a href="http://josephjennings3.com/bedford/" target="_blank">
                            <Button variant="contained">
                            <span classname="view-button"> View Bedford </span>
                            </Button>
                        </a>
                    </section>
                </div>
                <div className="project-container">
                    <section className="project-ex">
                        <img src={inicon} />
                        <p className="project-title">Innovation Project</p>
                        <p className="lang">html/css</p>
                        <a href="http://josephjennings3.com/innovation/" target="_blank">
                            <Button variant="contained">
                                <span classname="view-button"> View Innovation </span>
                            </Button>
                        </a>
                    </section>
                    <section className="project-ex">
                        <img src={ishi} />
                        <p className="project-title">Ishimoto Project</p>
                        <p className="lang">html/css</p>
                        <a href="http://josephjennings3.com/model/" target="_blank">
                            <Button variant="contained">
                            <span classname="view-button"> View Ishimoto </span>
                            </Button>
                        </a>
                    </section>
                </div>
                <div className="project-container">  
                    <section className="project-ex">
                        <img src={move} />
                        <p className="project-title">Move Project</p>
                        <p className="lang">html/css</p>
                        <a href="http://josephjennings3.com/move/" target="_blank">
                            <Button variant="contained">
                        <span classname="view-button">   View Move  </span>
                            </Button>
                        </a>
                    </section>
                    <section className="project-ex">
                        <img src={native} />
                        <p className="project-title">Native Project</p>
                        <p className="lang">html/css</p>
                        <a href="http://josephjennings3.com/native/" target="_blank">
                            <Button variant="contained">
                            <span classname="view-button">  View Native </span>
                            </Button>
                        </a>
                    </section>
                </div>    
                <div className="project-container bottom">
                    <section className="project-ex">
                        <img src={newicon} />
                        <p className="project-title">Newsroom Project</p>
                        <p className="lang">html/css</p>
                        <a href="http://josephjennings3.com/newsroom/" target="_blank">
                            <Button variant="contained">
                            <span classname="view-button"> View Newsroom </span>
                            </Button>
                        </a>
                    </section>
                </div>
            </main>
        );
    }
}

export default Projects;
