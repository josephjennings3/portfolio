import React, { Component } from 'react';
import '../css/header-css.css';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <section className="title">
                    Joseph Jennings III
                </section>
                <Router>
                    <section className="menu">
                        <ul>
                            <li>
                                <NavLink to ='/' exact activeStyle={
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
                    </section>
                </Router>
            </header>
        );
    }
}

export default Header;