import React, { Component } from 'react';
import Header from './components/header';
import { Switch, Route } from 'react-router-dom';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Resume from './pages/resume.js';
import Projects from './pages/projects.js';
import Home from './pages/home.js';


class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <Switch>
              <Route exact path= '/' exact component={Home} />
              <Route exact path= '/pages/projects' exact component={Projects} />
              <Route exact path= '/pages/about' exact component={About} />
              <Route exact path= '/pages/contact' exact component={Contact} />
              <Route exact path= '/pages/resume' exact component={Resume} />
            </Switch>
        </div>
    );
  }
}

export default App;
