import React, { Component } from 'react';
import Header from './components/header';
import { Switch, Route } from 'react-router-dom';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Resume from './pages/resume.js';
import Home from './pages/home.js';
import ProjectsPage from './pages/projectspage.js';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <Switch>
              <Route exact path= '/' exact component={Home} />
              <Route exact path= '/pages/about' exact component={About} />
              <Route exact path= '/pages/projectspage' exact component={ProjectsPage} />
              <Route exact path= '/pages/contact' exact component={Contact} />
              <Route exact path= '/pages/resume' exact component={Resume} />
            </Switch>
            <Footer />
        </div>
    );
  }
}

export default App;
