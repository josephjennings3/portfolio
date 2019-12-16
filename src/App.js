import React, { Component } from 'react';
import Header from './components/header';
import { Switch, Route } from 'react-router-dom';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Resume from './pages/resume.js';
import Home from './pages/home.js';
import ProjectsPage from './pages/projectspage.js';
import Footer from './components/footer';
import './css/contact.css';


class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <div className="content-wrap">
              <Switch>
                <Route exact path= '/'  component={Home} />
                <Route exact path= '/pages/about'  component={About} />
                <Route exact path= '/pages/projectspage'  component={ProjectsPage} />
                <Route exact path= '/pages/contact'  component={Contact} />
                <Route exact path= '/pages/resume'  component={Resume} />
              </Switch>
              </div>
            <Footer />
        </div>
    );
  }
}

export default App;
