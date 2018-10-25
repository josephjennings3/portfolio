import React, { Component } from 'react';
import '../css/resume.css';


class Resume extends Component {
    render() {
      return (
          <div className="resume">
            <main className="container-resume">
              <div className="container-resume-header">
                <div className="title-resume">
                  Joseph Jennings III
                </div>
                <a href="https://docs.google.com/document/d/1YdDKRCx6zZjnkcs-0R2bJF3uSeMBANuEbxk_hkIoBdk//export?format=pdf" className="download-text">Download Resume<i class="download material-icons ">get_app</i></a>
              </div>
              <div className="container-sections">
                <section className="resume-sections">
                  <div className="section-title">
                    What am I looking for?
                  </div>
                  <div className="section-details para">
                    I am in search for a fun and determined environment that will allow me to grow and learn as a web developer. I learn towards front-end but am constantly growing my knowledge of back-end.
                  </div>
                </section>
                <section className="resume-sections">
                  <div className="section-title">
                    Hard Skills
                  </div>
                  <div className="section-details">
                    <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>Node</li>
                      <li>JavaScript</li>
                      <li>React.js</li>
                      <li>React Native</li>
                      <li>Ruby on Rails</li>
                    </ul>
                    <ul>
                      <li>Photoshop</li>
                      <li>Git</li>
                      <li>Github</li>
                      <li>Postgresql</li>
                      <li>Responsive Web Development</li>
                      <li>Bootstrap</li>
                      <li>Facebook Business Manager</li>
                    </ul>
                  </div>
                </section>
                <section className="resume-sections">
                  <div className="section-title">
                    Soft Skills
                  </div>
                  <div className="section-details">
                    <ul>
                      <li>Positive Attitude</li>
                      <li>Analytical</li>
                      <li>Learning from Criticism</li>
                      <li>Customer Service</li>
                    </ul>
                    <ul>
                      <li>Fast</li>
                      <li>Accurate</li>
                      <li>Pair Programming</li>
                      <li>Multi-Tasking</li>
                    </ul>
                  </div>
                </section>
                <section className="resume-sections jobs">
                  <div className="section-title">
                    Experience                
                  </div>
                  <div className="job-details">
                    <div className="job-block">
                      <div className="job-title">
                        Tutti, React Native Developer (2018-Current)
                      </div>
                      <div className="job-description">
                        Dived into the experience of React Native and assisted a start-up company build their mobile app. I organized stylesheets, built a calendar function, and set up the working environment with Docker.
                      </div>
                    </div>
                    <div className="job-block">
                      <div className="job-title">
                        LEARN Academy, Student (2018)
                      </div>
                      <div className="job-description">
                        Was immerse in the knowledge of full stack development. I learn many topics such as React and Ruby on Rails. Then pulled it all together to a final group project to create a coffee shop finder.
                      </div>
                    </div>
                    <div className="job-block">
                      <div className="job-title">
                        Bootsumo, Online Marketing Intern (2018)
                      </div>
                      <div className="job-description">
                        I enjoyed my first internship that involved front-end web development and online marketing. I sharpen my HTML3 and CSS3 skills in building ads and a massage website as well as creating and posting ads on Facebook to generate venue. 
                      </div>
                    </div>
                    <div className="job-block">
                      <div className="job-title">
                        JenningsIII, Front-End Web Developer/Graphic Design (2015-Current)
                      </div>
                      <div className="job-description">
                        I first experienced web development on a business level. I was a self taught developer and took on multiple freelancing jobs dealing with both web development and graphic design. 
                      </div>
                    </div>
                  </div>
                </section>
                <section className="resume-sections jobs">
                  <div className="section-title">
                    Education
                  </div>
                  <div className="section-details">
                    <div className="job-block education">
                      <div className="job-title">LEARN Academy (2018)</div>
                      <div className="job-description">16-week Full Stack Coding Bootcamp.</div>
                    </div>
                    <div className="job-block education">
                      <div className="job-title">Self-Taught (2015-Current)</div>
                      <div className="job-description">HTML5, CSS3, Wordpress, Photoshop</div>
                    </div>
                    <div className="job-block education">
                      <div className="job-title">Otay Ranch (2002-2006)</div>
                      <div className="job-description">General Education</div>
                    </div>
                  </div>
                </section>
                </div>
            </main>
          </div>
      );
    }
  }
  
  export default Resume;