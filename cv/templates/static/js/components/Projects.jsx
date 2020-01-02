import React, { Component } from 'react';
import Nav from './Nav';
import Footer from "./Footer";
import {MinorSectionHeading, PageHeading, SpanTitle} from "./Titles";
import {ProcessArr} from "./Utils";
import {Text} from "./Text";


const ProjectList = () => {
    const projects = [
        {
            'name': '\"Lazy Mechanic\"',
            'desc': <ProcessArr arr={[
                'I installed a Bluetooth transmitter on my car\'s ',
                <a href={'https://en.wikipedia.org/wiki/On-board_diagnostics'}>OBD2 port</a>,
                ' that, in conjunction with a Raspberry Pi (with built-in Bluetooth) in the car, I can collect data on the car\'s engine performance. When the car is back home, the Raspberry Pi uploads the data to my home server, where the information will then be processed.'
            ]} />,
            'tools': ['Python', 'pandas', 'obd-python', 'Raspberry Pi'],
            'future': [
                'The current method is incredibly energy-intense. Either a system that\'s integrated with the car\'s power or something efficient enough to last a month on battery power is required to improve.',
                'Would also need a smarter shutdown protocol to aid in the conservation of energy.',
                'Include compound stats that take into account engine, batter health, etc. as well as driving stats (avg acceleration)',
                'Set definitions of what constitutes a \"healthy\" or otherwise engine. Add warnings to data packet when sent to server and handle analysis/notification on the server side.',
            ]

        }, {
            'name': 'Car Commute Calculator',
            'desc': <ProcessArr arr={[
                'Using ',
                <a href={'https://ifttt.com/'}>IFTTT</a>,
                ', I set up a ',
                <a href={'https://en.wikipedia.org/wiki/Geo-fence'}>geofence</a>,
                ' near my home and work locations to record a log to a Google Sheets spreadsheet every time I enter/exit one of the areas. The data for this is then processed to issue commute reports to my phone via ',
                <a href={'https://www.pushbullet.com/'}>Pushbullet</a>,
                ' within 10 minutes of my arrival/departure.'
            ]} />,
            'tools': ['Python', 'plotly', 'pandas', 'Pushbullet', 'IFTTT', 'Google Sheets'],
            'future': 'This was more of a \"one-off\" kind of project. After the analysis ran for a few months I\'m not sure if any improvements will be made, as I don\'t see much value in keeping it running.'
        }, {
            'name': 'Severe Weather Notifier',
            'desc': <ProcessArr arr={[
                'Checks severe weather alerts sent out by the National Weather Service (via ',
                <a href={'https://darksky.net/dev'}>Dark Sky API</a>,
                '. New alerts are pushed to a ',
                <a href={'https://slack.com/'}>Slack</a>,
                ' workspace where I\'m notified immediately. This was built out of a need to have a relatively quick weather warning system on mobile without having to pay for a third-party provider.',
                ]} />,
            'tools': ['Python', 'Dark Sky API'],
            'future': [
                'After more data is collected, it might be interesting to perform a seasonal analysis on the alerts.',
                'Having a tiered system of alerts - e.g., wind advisories get recorded, but not pushed to my device.'
            ]
        }, {
            'name': 'Home Automation Network',
            'desc': 'I put a bunch of scripts on an old desktop box and connected it directly to my home\'s router, effectively making it a server for collecting data and automating tasks. A network of Raspberry PIs and other devices send periodic environment measurements (temp, humidity, light level, etc) to the server, which then records these measurements in a MySQL database. A network of leak detectors also monitor for possible water leaks near washer and hot water heater. A \"low-tier\" home security layer is also handled through the server by monitoring devices connected. When certain devices are disconnected, security cameras are set to active and any motion detected is recorded and pushed.',
            'tools': ['Python', 'bash'],
            'future': [
                'More thorough network of temperature sensors',
                'Analysis of cooling retention in the home - see how quickly indoor temperatures equalize with outdoor after a cooling cycle in the summer and vice versa.',
                'Include energy consumption data collection of highest consuming equipment (HVAC, Hot water, refrigerator, etc.)'
            ]
        }, {
            'name': 'Personal Website Design',
            'desc': 'Hey - That\'s this site!',
            'tools': ['Python', 'Javascript', 'CSS', 'HTML', 'React', 'Nginx', 'Gunicorn', 'flask'],
            'future': [
                'Continue adding more projects I\'ve worked on'
            ]
        }, {
            'name': 'Slack Automation bot',
            'desc': 'I built out a slack bot that handles primarily notifications to different channels on a Slack workspace. Valuable communications include recent log reporting, where recently encountered errors are tallied so that I can monitor processes remotely.',
            'tools': ['Python', 'Slack API', 'pandas'],
        }, {
            'name': 'Cards Against Humanity bot for Slack',
            'desc': 'This was mainly for fun, but I learned a bot more about classes in Python doing it. I initially built the bot to store game data in a dictionary, though I soon after converted it into a system of classes to better maintain processes in the game.',
            'tools': ['Python', 'Slack API'],
            'future': [
                'Maybe I\'ll put this into its own webapp later on'
            ]
        }
    ];

    function processOptionals(key, items, spantitle) {
        if (key in items) {

            let info_chunk = items[key];
            let info;
            if (Array.isArray(info_chunk)) {
                info = <ul className={key}>{info_chunk.map((item, index) => <li key={index}>{item}</li>)}</ul>
            } else {
                info = <Text txt={info_chunk} />
            }

            return (
                <div className={'info-section'}>
                    <SpanTitle text={spantitle} />
                    {info}
                </div>
            )
        }
    }

    return (
        <ul className={'project-list'}>
            {projects.map((item, index) =>
                <li key={index}>
                    <details>
                        <summary><MinorSectionHeading text={item.name}/></summary>
                        <div className={'project-panel'}>
                            {processOptionals('desc', item, 'Description')}
                            {processOptionals('tools', item, 'Tools Used')}
                            {processOptionals('future', item, 'Future Plans')}
                        </div>
                    </details>
                </li>
            )}
        </ul>
    )
};

class Projects extends Component {
    render() {
        return (
            <div className={'wrapper subpage-wrapper'}>
                <header className={'topBar'}>
                    <Nav isMainNav={false}/>
                </header>
                <article>
                    <PageHeading text={'Projects I\'m Proud Of'} />
                    <ProjectList/>
                </article>

                <Footer/>
            </div>
        )
    }
}

export default Projects
