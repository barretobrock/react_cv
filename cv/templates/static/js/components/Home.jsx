import React, { Component } from 'react';
import Nav from './Nav';
import Footer from "./Footer";



class Home extends Component {
    render() {
        return (
            <div className={'wrapper'}>
                <header id={'header'}>
                    <div className={'logo'}>
                        <img className={'rotate'} src={'public/images/gear.png'}/>
                    </div>
                    <div className={'intro'}>
                        <div className={'inner'}>
                            <h1>Barret's development space</h1>
                            <p>Welcome to my personal website</p>
                        </div>
                    </div>
                    <Nav isMainNav={true}/>
                </header>
                <Footer/>
            </div>
        )
    }
}

export default Home
