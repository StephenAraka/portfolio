import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import About from './AboutMe';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route exact path='/about-me' component={About} />
    <Route exact path='/contact' component={Contact} />
    <Route exact path='/resume' component={Resume} />
    <Route exact path='/projects' component={Projects} />
  </Switch>
);

export default Main;