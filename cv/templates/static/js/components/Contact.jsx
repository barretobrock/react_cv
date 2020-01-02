import React, { Component } from 'react';
import Nav from './Nav';
import Footer from "./Footer";



class Contact extends Component {
    render() {
        return (
            <div className={'wrapper subpage-wrapper'}>
                <header className={'topBar'}>
                    <Nav isMainNav={false}/>
                </header>

                <Footer/>
            </div>
        )
    }
}

export default Contact