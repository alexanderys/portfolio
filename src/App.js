/* IMPORTS */
// React
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Components
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header'

// Styles
import './styles/App.css';

/* Imports END */

const headerContent = {
  home: ["Welcome to my portfolio site", "I'm Alex, a front-end developer student."],
  about: ['About me', 'A little bit about myself and my acquired skills so far during my coding journey.'],
  contact: ['Contact', 'Feel free to get in touch.']
}

function App() {

  return (
    <Router>
      <ScrollToTop />

      <Header content={headerContent} />

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
