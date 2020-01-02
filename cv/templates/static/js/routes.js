import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import About from "./components/About";
import CV from "./components/CV";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Tools from "./components/Tools";

const routing = (
    <Router>
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/cv' component={CV} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
            <Route path='/tools' component={Tools} />
        </div>
    </Router>
);

export default routing