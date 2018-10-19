import React, { Component } from 'react';
import '../css/home.css';
import {Animated} from "react-animated-css";
import Projects from '../components/projects';



class Home extends Component {
    constructor() {
        super()
        this.state={
            showProjects:false
        }
    }

    operation(){
        this.setState({
            showProjects:true
        })
    }


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
            <button onClick={()=>this.operation()}>CLICK ME</button>
            {
                this.state.showProjects?
                <div>
                    <Projects />
                </div>
                :null
            }
            
        </div>
      );
    }
  }
  
export default Home;