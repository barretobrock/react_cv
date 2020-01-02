import React, { Component } from 'react';
import Nav from './Nav';
import Footer from "./Footer";
import { Text, Quote } from "./Text";
import IconsAndPicSection from "./IconsAndPicSection";
import { MinorSectionHeading, PageHeading } from "./Titles";
import {faBeer, faCode, faCoffee, faRunning, faSeedling } from "@fortawesome/free-solid-svg-icons";
import {ProcessArr} from "./Utils";


const facts = [
    {
        "icon": faCoffee,
        "fact": "I have relatively  simple coffee taste: black, no sugar, but sometimes with cream :)",
    }, {
        "icon": faRunning,
        "fact": "I began barefoot running back in 2009 to recover from an injury, but I've enjoyed it too much to go back to running shoes.",
    }, {
        "icon": faSeedling,
        "fact": "I like Chanterelle mushrooms way more than what's normally socially accepted. Best way to prepare them: In a pan with butter.",
    }, {
        "icon": faBeer,
        "fact": "Dark, earthy beers are my favorite. Always looking to try a new Baltic porter or Imperial Russian stout",
    }, {
        "icon": faCode,
        "fact": <ProcessArr arr={[
            "I\'ve always regarded the ",
            <a href={'https://en.wikipedia.org/wiki/Indentation_style#Allman_style'}>Allman</a>,
            " coding style to be the best for most applications.",
        ]} />
    }
];

const Basics = () => {
   return (
       <div id={'basics'}>
            <Text txt={'I enjoy learning new things and have a wide variety of interests. I often fill my free time with projects that seek to improve my understanding in a field I\'m passionate about. In practice, that might mean soldering a custom-made circuit board for a new phase of my never-ending home automation project or building out a new developer tool to help improve my coding turnaround for personal projects. Occasionally, I\'ll take a break from technical stuff and do a deeper dive into the Humanities - diving deeper into a language that I need to improve in, or learning about a new one.'} />
            <Text txt={ "I\'ve found that branching out of my comfort zone helps me solve problems that are back inside the comfort zone. In my pursuit of learning, I also sometimes find ways to make a pre-existing process more efficient or less annoying. Creating things is fun, but seeing them evolve into something more robust and powerful than before is even better. I feel quite certain that my purpose in life is to learn as much as possible while making people laugh along the way."} />
            <Quote txt={'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.'} author={'Linus Torvalds'} />
       </div>
   )
};

const Why = () => {
    return (
        <div id={'why'}>
            <Text txt={"First and foremost, I wanted to see the process of building and maintaining a site with a React front-end looked like. About a year ago, I worked with a colleague on a hackathon project that made an internally-facing React site for our fellow teammates to better understand the relationship of all the different conceptual ids we often deal with. Naming for these ids were fairly obscure and even more obscure was the many different ways they could and could not interact with each other. Rather than let this valuable information sit as institutional knowledge, we brought it out and developed a single source of truth for people to reference. Though I had only limited knowledge of React at the time, I greatly enjoyed making the processes and components modular and then seeing them get assembled into whole pages. This experience piqued my curiosity and led me to want to learn more about how it functions."}/>
            <Text txt={"I also see React as a potential new tool to offer our stakeholders for future larger-initiative analytics projects. By strengthening my skills in React with this website (and also eventually using it as a test bed for some analytical concepts), I'll be well prepared to meet the needs of my stakeholders by being able to quickly offer them something that displays results in a way not currently supported in our present toolset."}/>
        </div>
    )
};

class About extends Component {

    render() {
        return (
            <div className={'wrapper subpage-wrapper'}>
                <header className={'topBar'}>
                    <Nav isMainNav={false}/>
                </header>
                <article>
                    <PageHeading text={'about me'} />
                    <MinorSectionHeading text={'fun facts'} />
                    <IconsAndPicSection infoArr={facts} picPath={'/public/images/bio-pic.png'} altText={'Pic of me next to a window'} idName={'ff-section'} />
                    <MinorSectionHeading text={'the basics'} />
                    <Basics/>
                    <MinorSectionHeading text={'why did you build this site?'} />
                    <Why/>
                </article>

                <Footer/>
            </div>
        )
    }
}

export default About
