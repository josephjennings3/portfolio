import React, { Component } from 'react';
import '../css/header.css';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className="container">
                <header>
                    <section className="title">
                        <NavLink to ='/' exact >Joseph Jennings III</NavLink>
                    </section>
                        <nav>
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
                        </nav>
                </header>
            </div>
        );
    }
}

export default Header;