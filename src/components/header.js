import React, { Component } from 'react';
import '../css/header-css.css';
import { BrowserRouter as Router, Link, NavLink, Switch, Route } from 'react-router-dom';
import About from '../pages/about.js';
import Contact from '../pages/contact.js';
import Resume from '../pages/resume.js';

class Header extends Component {
    render() {
        return (
            <div className="container">
                <header>
                    <section className="title">
                        Joseph Jennings III
                    </section>
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
                </header>
                <Switch>
                            <Route exact path= '/pages/about' component={About} />
                            <Route exact path= '/pages/contact' component={Contact} />
                            <Route exact path= '/pages/resume' component={Resume} />
                        </Switch>
            </div>
        );
    }
}

export default Header;