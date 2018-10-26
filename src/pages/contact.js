import React, { Component } from 'react';
import '../css/contact.css';
import { SocialIcon } from 'react-social-icons';

class Contact extends Component {
    render() {
      return (
          <div className="contact">
            <div className="contact-flex-container">
              <section className="greeting">
                <div className="contact-title">
                  Say Hello
                </div>
                <div className="contact-subtitle">
                  Interested in Web Development? Are you currently hiring for a developer? Just want to say hi? You can contact me or learn more about me through any one of these means.
                </div>
              </section>
              <main className="contact-main">
                <div className="contact-email">
                  <a href="mailto:jajenningsiii@email.com"><SocialIcon network="email" /></a>
                </div>
                <div className="-contact-linkedin">
                  <a href="https://www.linkedin.com/in/josephjennings3/" target="_blank" rel="noopener noreferrer"><SocialIcon network="linkedin" /></a>
                </div>
                <div className="contact-github">
                  <a href="https://github.com/josephjennings3" target="_blank" rel="noopener noreferrer"><SocialIcon network="github" /></a>
                </div>
              </main>
            </div>
          </div>
      );
    }
  }
  
  export default Contact;