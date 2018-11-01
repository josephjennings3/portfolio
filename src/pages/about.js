import React, { Component } from 'react';
import '../css/about.css';
import Bike from '../images/bike.jpg';
import Jtree from '../images/jtree.jpg';
import Josephandsister from '../images/josephandsister.jpg';
import {Animated} from "react-animated-css";
import { Switch, Route } from 'react-router-dom';
import Contact from './contact.js';
import Resume from './resume.js';
import Home from './home.js';
import ProjectsPage from './projectspage.js';


class About extends Component {
    render() {
      return (
          <div className="container-about">
            <Animated animationIn="fadeInDown" isVisible={true} className="about-animated">
              <section className="container-img">
                <div className="img-bike">
                  <img src={Bike} alt="bicycle with downtown san diego background" />
                </div>
                <div className="img-jtree" >
                  <img src={Jtree} alt="joseph and friends at joshua tree" />
                </div>
                <div className="img-persia">
                  <img src={Josephandsister} alt="joseph and persia together" />
                </div>
              </section>
            </Animated>
            <main>
              <p className="title-about">Who are you?</p>
              <div className="container-about-text">
                <p className="text">
                  I am a Web Developer who is passionate about Front-end and UX/UI design. I've spent years self-training in HTML5, CSS3, and Photoshop with the help of a mentor. Throughout those years I've taken on multiple freelance jobs that allowed me to combine these three skills to help others in their own goals and dreams. During that phase of my life I found the joy and putting these websites together as if they were puzzles and adding in my creativity to transform them into works of art. <br />
                </p> 
                <p className="text">
                  After some time, I decided to take the dive into joining a coding bootcamp. I decided on one called LEARN Academy and they broaden my eyesight of web development further than I would've imagined. While taking this course I fell in love with React.js and UX/UI design. LEARN also pushed my education into SQL, Ruby on Rails, Github, and pair programming.<br />
                </p>
                <p className="text">
                  Currently, I am continuing to strengthen my skillsets in web development. I eagerly study every day, attend meetups to get involved with the community, as well as apply for jobs around San Diego in search for the perfect environment to grow and prosper.
                </p>
              </div>
              <p className="title-about">What do you do outside of web development?</p>
              <div className="container-about-text">
                <p className="text">
                  Outside of web development, I can be found taking long bike rides along the beach or training my body in the form of weight lifting. I enjoy pushing my mind and body to its fullest potential without burning myself out. I also can be found reading a variety of books, spending time with my family, or discovering my favorite dive bar where I can engage in conversation with old or new friends.
                </p>
              </div>
            </main>
            <Switch>
              <Route exact path= '/'  component={Home} />
              
              <Route exact path= '/pages/projectspage'  component={ProjectsPage} />
              <Route exact path= '/pages/contact'  component={Contact} />
              <Route exact path= '/pages/resume'  component={Resume} />
            </Switch>
          </div>
      );
    }
  }
  
  export default About;