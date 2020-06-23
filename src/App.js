import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Teams from './Teams';
import Team from './components/Teams/team';
//Switch check path

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/teams/:id" component={Team} />
        <Route path="/teams" component={Teams} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
};

export default App;
