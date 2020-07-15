import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './landing/Landing';
import About from './about/AboutMe';
import Contact from './contact/Contact';
import Resume from './resume/Resume';
import Projects from './project/Projects';

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