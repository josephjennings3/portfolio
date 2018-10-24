import React, { Component } from 'react';
import '../css/about.css';
import Bike from '../images/bike.jpg';
import Jtree from '../images/jtree.jpg';
import Josephandsister from '../images/josephandsister.jpg';

class About extends Component {
    render() {
      return (
          <div className="container-about">
            <section className="container-img">
              <div className="img-bike">
                <img src={Bike} />
              </div>
              <div className="img-jtree">
                <img src={Jtree} />
              </div>
              <div className="img-persia">
                <img src={Josephandsister} />
              </div>
            </section>
            <main>
              <p>Who are you?</p>
              <p>What do you do outside of web development?</p>
            </main>
          </div>
      );
    }
  }
  
  export default About;