import React, { Component } from 'react';
import '../css/projects.css';
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
                        <img src={broadway} alt="preview of broadway project"/>
                        <p className="project-title">Broadway Project</p>
                        <p className="lang">html/css</p>
                        <a href="https://jovial-lamport-d5c7ff.netlify.com/" target="_blank" rel="noopener noreferrer">
                            <Button variant="contained">
                            <span classname="view-button"> View Broadway </span>
                            </Button>
                        </a>
                    </section>
                    <section className="project-ex">
                        <img src={bedford} alt="preview of bedford project" />
                        <p className="project-title">Bedford Project</p>
                        <p className="lang">html/css</p>
                        <a href="https://adoring-jennings-9e18e1.netlify.com/" target="_blank" rel="noopener noreferrer">
                            <Button variant="contained">
                            <span classname="view-button"> View Bedford </span>
                            </Button>
                        </a>
                    </section>
                </div>
                <div className="project-container">
                    <section className="project-ex">
                        <img src={inicon} alt="preview of inovation project" />
                        <p className="project-title">Innovation Project</p>
                        <p className="lang">html/css</p>
                        <a href="https://jovial-saha-cc82b0.netlify.com/" target="_blank" rel="noopener noreferrer">
                            <Button variant="contained">
                                <span classname="view-button"> View Innovation </span>
                            </Button>
                        </a>
                    </section>
                    <section className="project-ex">
                        <img src={ishi} alt="preview of ishimoto project"/>
                        <p className="project-title">Ishimoto Project</p>
                        <p className="lang">html/css</p>
                        <a href="https://happy-tesla-ad8369.netlify.com/" target="_blank" rel="noopener noreferrer">
                            <Button variant="contained">
                            <span classname="view-button"> View Ishimoto </span>
                            </Button>
                        </a>
                    </section>
                </div>
                <div className="project-container">  
                    <section className="project-ex">
                        <img src={move} alt="preview of move project"/>
                        <p className="project-title">Move Project</p>
                        <p className="lang">html/css</p>
                        <a href="https://goofy-shirley-717353.netlify.com/" target="_blank" rel="noopener noreferrer">
                            <Button variant="contained">
                        <span classname="view-button">   View Move  </span>
                            </Button>
                        </a>
                    </section>
                    <section className="project-ex">
                        <img src={native} alt="preview of native project"/>
                        <p className="project-title">Native Project</p>
                        <p className="lang">html/css</p>
                        <a href="https://elegant-wilson-56f010.netlify.com/" target="_blank" rel="noopener noreferrer">
                            <Button variant="contained">
                            <span classname="view-button">  View Native </span>
                            </Button>
                        </a>
                    </section>
                </div>    
                <div className="project-container bottom">
                    <section className="project-ex">
                        <img src={newicon} alt="preview of news project"/>
                        <p className="project-title">Newsroom Project</p>
                        <p className="lang">html/css</p>
                        <a href="https://objective-edison-fceb84.netlify.com/" target="_blank" rel="noopener noreferrer">
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
