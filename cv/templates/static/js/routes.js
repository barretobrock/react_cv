import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import About from "./components/About";

const routing = (
    <Router>
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
        </div>
    </Router>
);

export default routing