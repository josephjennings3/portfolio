import React, { Component } from 'react';
import '../css/header.css';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { slide as Menu } from 'react-burger-menu'



class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
      }

    showSettings (event) {
        event.preventDefault();
       
      }

    render() {
        return (
            <div className="container">
                <header>
                    <section className="title">
                        <NavLink to ='/' exact >Joseph Jennings III</NavLink>
                    </section>
                    <nav className="header-li">
                        <MediaQuery maxDeviceWidth={800}>
                            <Menu
                                isOpen={this.state.menuOpen}
                                onStateChange={(state) => this.handleStateChange(state)}
                                right
                            >
                                <a id="menu-projects" className="menu-item" href="/pages/projectspage" onClick={() => this.closeMenu()}>Projects</a>
                                <a id="menu-about" className="menu-item" href="/pages/about" onClick={() => this.closeMenu()}>About</a>
                                <a id="menu-resume" className="menu-item" href="/pages/resume" onClick={() => this.closeMenu()}>Resume</a>
                                <a id="menu-contact" className="menu-item" href="/pages/contact" onClick={() => this.closeMenu()}>Contact</a>
                            </Menu>  
                        </MediaQuery>
                        <MediaQuery minDeviceWidth={800}>
                            <ul>
                                <li>
                                    <NavLink to ='/pages/projectspage' exact activeStyle={
                                        {borderTop: 'solid 3px #000'}
                                    }>Projects</NavLink>
                                </li>
                                <li>
                                    <NavLink to ='/pages/about' exact activeStyle={
                                        {borderTop: 'solid 3px #000'}
                                    }>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to ='/pages/resume' exact activeStyle={
                                        {borderTop: 'solid 3px #000'} 
                                    }>Resume</NavLink>
                                </li>
                                <li>
                                    <NavLink to ='/pages/contact' exact activeStyle={
                                        {borderTop: 'solid 3px #000'} 
                                    }>Contact</NavLink>
                                </li>
                            </ul>
                        </MediaQuery>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;