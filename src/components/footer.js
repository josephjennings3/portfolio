import React, { Component } from 'react';
import '../css/footer.css';
import { SocialIcon } from 'react-social-icons';


class Footer extends Component {
    render() {
      return (
        <div className="footer">
            <div className="footer-container">
                <section className="footer-contact">
                    <div className="footer-icon">
                        <a href="mailto:jajenningsiii@email.com" rel="noopener noreferrer"><SocialIcon network="email" color="#faebd7" style={{ height: 30, width: 30 }}/></a>
                    </div>
                    <div className="footer-icon">
                        <a href="https://www.linkedin.com/in/josephjennings3/" target="_blank" rel="noopener noreferrer"><SocialIcon network="linkedin" color="#faebd7" style={{ height: 30, width: 30 }}/></a>
                    </div>
                    <div className="footer-icon">
                        <a href="https://github.com/josephjennings3" target="_blank" rel="noopener noreferrer"><SocialIcon network="github" color="#faebd7" style={{ height: 30, width: 30 }} /></a>
                    </div>
                </section>
                <section className="signature">
                    {/* <div className="credit">
                        Inspired by Steven Oey
                    </div> */}
                    <div className="credit">
                        Developed by Joseph Jennings III
                    </div>
                </section>
            </div>
        </div>
      );
    }
}

export default Footer;