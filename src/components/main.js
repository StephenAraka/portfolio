import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import About from './AboutMe';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';

const Main = () => (
  <Switch>
    <Route exact path='/portfolio' component={Landing} />
    <Route exact path='/portfolio/about-me' component={About} />
    <Route exact path='/portfolio/contact' component={Contact} />
    <Route exact path='/portfolio/resume' component={Resume} />
    <Route exact path='/portfolio/projects' component={Projects} />
  </Switch>
);

export default Main;