import React, { Component } from 'react';
import Nav from './Nav';
import Footer from "./Footer";
import {PageHeading} from "./Titles";
import { faSkype, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";



const ContactList = () => {

    const contArr = [
        {
            'icon': faAt,
            'link': 'mailto:barret.obrock@gmail.com',
            'hovertxt': 'Email',
        }, {
            'icon': faLinkedin,
            'link': 'https://www.linkedin.com/in/barretobrock/',
            'hovertxt': 'LinkedIn',
        }, {
            'icon': faGithub,
            'link': 'https://github.com/barretobrock/',
            'hovertxt': 'Github',
        }, {
            'icon': faSkype,
            'link': 'skype:barretobrockis',
            'hovertxt': 'Skype',
        }
    ];

    return (
        <div className={'contacts'}>
            <ul>
                {contArr.map((item, index) =>
                    <li key={index} data-tip={item.hovertxt}>
                        <ReactTooltip effect={'solid'} id={'tooltip-contact'} />
                        <a href={item.link} target={'_blank'}>
                            <FontAwesomeIcon icon={item.icon}/>
                        </a>
                    </li>)}
            </ul>
        </div>
    )
};

class Contact extends Component {
    render() {
        return (
            <div className={'wrapper subpage-wrapper'}>
                <header className={'topBar'}>
                    <Nav isMainNav={false}/>
                </header>
                <article>
                    <PageHeading text={'Contact me'} />
                    <ContactList />
                </article>
                <Footer/>
            </div>
        )
    }
}

export default Contact
