import React, { Component } from 'react';
import Nav from './Nav';
import Footer from "./Footer";



class About extends Component {
    render() {
        return (
            <div id={'wrapper'}>
                <Nav isMainNav={false}/>

                <Footer/>
            </div>
        )
    }
}

export default About
