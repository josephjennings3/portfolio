import React, { Component } from 'react';
import '../css/header-css.css';
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <header>
                <section className="title">
                    Joseph Jennings III
                </section>
                <section className="menu">
                    <ul>
                        <li><Link to="#">Projects</Link></li>
                        <li>About</li>
                        <li>Resume</li>
                        <li>Contact</li>
                    </ul>
                </section>
            </header>
        );
    }
}

export default Header;