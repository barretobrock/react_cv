import React, { Component } from 'react';
import Nav from './Nav';
import Footer from "./Footer";
import { Text } from "./Text";
import { ProcessArr, dateConv, dateDiff } from "./Utils";
import {PageHeading, MajorSectionHeading, MinorTitle, JobTitle, SpanTitle} from "./Titles";
import IconsAndPicSection from "./IconsAndPicSection";
import ReactTooltip from 'react-tooltip';
import {faBeer, faCoffee, faUser, faMapMarkerAlt, faBriefcase, faCertificate, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const iconArr = [
    {
        "icon": faUser,
        "fact": "Barret Obrock",
    }, {
        "icon": faMapMarkerAlt,
        "fact": "Austin, Texas, USA",
    }, {
        "icon": faBriefcase,
        "fact": "Business Intelligence Analyst",
    }, {
        "icon": faCoffee,
        "fact": "black",
    }, {
        "icon": faBeer,
        "fact": "stout, porter",
    }
];

const CareerSection = () => {
    const expArr = [
        {
            'place': 'Indeed.com',
            'location': 'Austin, Texas',
            'start': '2017-09-11',
            'end': 'present',
            'jobtitle': 'Business Intelligence Analyst',
            'job_desc': 'Meet with stakeholders, gather requirements and set goals for ad-hoc or periodic reporting. Create analytical solutions, dashboards, visualizations, algorithms, and business tools for use across the organization. Support internal development of tools that help BI function more efficiently. Support BI team mates through mentoring and knowledge sharing.',
            'tasks': [
                'Support the Marketing department with ad-hoc data pulls and developing new reports for stakeholders.',
                'Triage incoming requests from stakeholders and assign requests to team mates',
                'Develop and promote new tools within BI that seek to improve development velocity',
                'Support internally-developed BI tools through their lifecycle'
            ],
            'tools': ['Pandas', 'Python', 'Jupyter Notebooks', 'git', 'SQL (MySQL, Postgres)', 'JIRA', 'React'],
            'highlights': [
                'Developed a suite of functions that improve the turnover in the analysis of a given industry',
                'Reduced development turnover, improved code conformity and reduced technical debt by adding internal tools to BI tool repo',
                'Promoted to level 2 BI Analyst within first year'
            ],
        }, {
            'place': 'Eesti Energia AS',
            'location': 'Tallinn, Estonia',
            'start': '2016-05-15',
            'end': '2017-02-01',
            'jobtitle': 'Business Analyst',
            'job_desc': 'Provide preliminary analysis for new services and support team members in Product Development Division with mainly ad-hoc analyses/data pulls.',
            'tasks': [
                'Examine possible new products in electricity, gas, solar and energy service sectors in Estonia and surrounding region.',
                'Generate ad-hoc reports through custom SQL queries and process with Python (numpy/pandas) and/or R.',
                'Perform ETL tasks and maintain small warehouse necessary for supporting future analyses.'
            ],
            'tools': ['Python', 'SQL (Vertica)', 'R', 'Vbscript'],
            'highlights': [
                'Automated and optimized frequent SQL queries, which, for larger analyses brought query time down to under five minutes from about forty minutes, improving report turnover.',
                'Automated external data collection for daily reports and analysis using Selenium, regex and xpath tools.',
                'Aided in the establishment of programming protocols, wrote high-level documentation on suite of functions and scripts developed for team.'
            ],
        }, {
            'place': 'Eesti Energia AS',
            'location': 'Tallinn, Estonia',
            'start': '2015-05-15',
            'end': '2016-05-15',
            'jobtitle': 'Product Development Specialist',
            'job_desc': 'Bringing new energy products in both electricity and gas sectors for residential and business clients from idea to reality.',
            'tasks': [
                'Define business cases for new products in electricity, gas, solar and energy service areas.',
                'Write SQL queries to collect energy consumption, contract and other data pertaining to groups targeted for analysis.',
                'Analyse collected data in R and Python for trends and possible solutions to developing problems.',
                'Meet with business clients and discuss piloting test products with them, going over potential benefits of product.'
            ],
            'tools': ['Python', 'SQL (Vertica)', 'R', 'VBA', 'Excel', 'VBscript', 'SAP(BOSS)'],
            'highlights': [
                'Effectively handle querying of datatables containing billions of rows of data in a quick and efficient manner.',
                'Aided in the development of a division-wide style guide to establish coding standards in both R and Python.'
            ],
        }, {
            'place': 'Molycorp Silmet AS',
            'location': 'Sillamäe, Estonia',
            'start': '2011-05-09',
            'end': '2015-05-09',
            'jobtitle': 'Financial Analyst',
            'job_desc': 'Provide SLT with financial and operational reports while maintaining sheets containing supplemental data.',
            'tasks': [
                'Design and distribute financial and operational reports to management.',
                'Perform analyses in consistency and quality of materials produced to track quality over time.',
                'Aid in translation of technical documents and serve as translator for English-speaking visitors from Estonian/Russian to English and vice versa.',
                'Create ad-hoc reports as needed.'
            ],
            'tools': ['Excel', 'VBA', 'SAP', 'SAF'],
            'highlights': [
                'Self-taught VBA to improve turnover of reports and automate repetitive tasks.',
                'Improved quarterly report turnover from ca. 1 week to 2 hours',
                'Attained a working proficiency in Estonian and Russian.'
            ],
        }, {
            'place': 'Sportspectrum',
            'location': 'Shreveport, Louisiana',
            'start': '2009-07-01',
            'end': '2011-05-01',
            'jobtitle': 'Store Manager',
            'job_desc': 'Maintain store operations, ensure quality service, efficient processes and provide forward-looking financial analyses for CEO.',
            'tasks': [
                'Generate sales reports and maintain running sales forecast.',
                'Lead team members in daily store tasks.',
                'Assist in training new employees.',
                'Resolve elevated issues between client and store'
            ],
            'tools': ['Excel', 'POS'],
            'highlights': [
                'Established key metrics to gauge store success',
                'Developed ongoing profitability analysis of products throughout store.'
            ],
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
        <div className={'cv-section experience'}>
            {expArr.map((item, index) =>
                <div key={index} className={'cv-row'}>
                    <div>
                        <MinorTitle text={item.place} />
                        <p className={'job-details'}>
                            <span>{dateConv(item.start)} - {dateConv(item.end)}</span>
                            <span>({dateDiff(item.start, item.end)})</span>
                            <span><FontAwesomeIcon icon={faMapMarkerAlt} />{item.location}</span>
                        </p>
                    </div>
                    <div>
                        <JobTitle text={item.jobtitle} />
                        <SpanTitle text={'Description'} />
                        <Text txt={item.job_desc} />
                        {processOptionals('tasks', item, 'Primary Tasks')}
                        {processOptionals('tools', item, 'Primary Tools')}
                        {processOptionals('highlights', item, 'Highlights')}
                    </div>
                </div>
            )}
        </div>
    )
};

const EducationSection = () => {
    const eduArr = [
        {
            'place': 'Udacity',
            'location': 'Austin, Texas',
            'start': '2019-12-01',
            'end': 'present',
            'edu_degree': 'Data Engineering Nanodegree',
            'edu_desc': 'Improving data model design, building data warehouses and data lakes, automating data pipelines and working with large data sets.'
        }, {
            'place': 'ReactTraining.com Seminar',
            'location': 'Austin, Texas',
            'start': '2019-06-24',
            'end': '2019-06-25',
            'edu_degree': 'React Fundamentals',
            'edu_desc': 'Course covers introduction to React concepts such as rendering, composition and UI updates and moves through to advanced use-cases, such as using React\'s new Hooks feature'
        }, {
            'place': 'Data Warehouse Institute',
            'location': 'Austin, Texas',
            'start': '2018-06-04',
            'end': '2018-06-06',
            'edu_degree': 'Dimensional Data Modelling',
            'edu_desc': 'Establishing a common philosophy and approach to data modelling efforts in Business Intelligence.'
        }, {
            'place': 'Centre for applied research',
            'location': 'Tallinn, Estonia',
            'start': '2016-10-01',
            'end': '2016-11-01',
            'edu_degree': 'data analysis with r',
            'edu_desc': 'Refining data analysis skills with the use of R programming language. Heavy focus on \"hadleyverse\" packages (e.g., ggplot2, tidyr, dplyr, lubridate)'
        }, {
            'place': 'Louisiana State University',
            'location': 'Shreveport, Louisiana',
            'start': '2006-08-01',
            'end': '2010-05-01',
            'edu_degree': 'B.Sc. - Financial Analysis',
            'edu_desc': <ProcessArr arr={[
                'Courses focused heavily on statistical/mathematical applications in finance and economics. Courses covered: investment analysis, macro & micro economic analysis, project analysis, corporate finance and financial management.',
                <span><FontAwesomeIcon icon={faCertificate} /> Graduated <i>summa cum laude</i></span>,
                <span><FontAwesomeIcon icon={faCertificate} /> Chancellor's List 2006 - 2010 every semester</span>,
                <span><FontAwesomeIcon icon={faCertificate} /> Academic Award in Finance recipient 2009 - 2010</span>,
                <span><FontAwesomeIcon icon={faCertificate} /> Finance Representative on Student Advisory Board</span>
            ]} />
        }
    ];

    return (
        <div className={'cv-section experience'}>
            {eduArr.map((item, index) =>
                <div key={index} className={'cv-row'}>
                    <div>
                        <MinorTitle text={item.place} />
                        <p className={'edu-details'}>
                            <span>{dateConv(item.start)} - {dateConv(item.end)}</span>
                            <span>({dateDiff(item.start, item.end)})</span>
                            <span><FontAwesomeIcon icon={faMapMarkerAlt} />{item.location}</span>
                        </p>
                    </div>
                    <div>
                        <JobTitle text={item.edu_degree} />
                        <Text txt={item.edu_desc} />
                    </div>
                </div>
            )}
        </div>
    )
};

const SkillSection = () => {

    const skillDefs = [
        'very narrow understanding',
        'below average understanding',
        'average understanding',
        'above average understanding',
        'expert / wide range of understanding'
    ];

    const skillArr = [
        {
            'name': 'Python',
            'skillValue': 5
        }, {
            'name': 'R',
            'skillValue': 5
        }, {
            'name': 'VBA',
            'skillValue': 5
        }, {
            'name': 'bash',
            'skillValue': 4
        }, {
            'name': 'pandas/numpy',
            'skillValue': 4
        }, {
            'name': 'SQL',
            'skillValue': 4
        }, {
            'name': 'HTML',
            'skillValue': 4
        }, {
            'name': 'CSS',
            'skillValue': 3
        }, {
            'name': 'git',
            'skillValue': 3
        }, {
            'name': 'regex',
            'skillValue': 4
        }, {
            'name': 'Selenium',
            'skillValue': 3
        }, {
            'name': 'VBscript',
            'skillValue': 3
        }, {
            'name': 'Xpath',
            'skillValue': 3
        }, {
            'name': 'PHP',
            'skillValue': 2
        }, {
            'name': 'Java',
            'skillValue': 2
        }, {
            'name': 'C++',
            'skillValue': 2
        }, {
            'name': 'React',
            'skillValue': 3
        }
    ];

    skillArr.sort((a, b) => (a.name > b.name) ? 1 : -1);

    const StarFiller = ({skillVal}) => {
        return (
            <span className={'skill-value'} data-skill={skillVal} data-tip={skillDefs[skillVal - 1]}>
                <ReactTooltip effect={'solid'} id={'tooltip-skills'} />
                {[...Array(Math.floor(skillVal))].map((item, index) =>
                    <FontAwesomeIcon icon={faStar} key={index} className={'skillstar on'}/>)}
                {[...Array(5 - Math.floor(skillVal))].map((item, index) =>
                <FontAwesomeIcon icon={faStar} key={index} className={'skillstar off'}/>)}
            </span>
        )
    };

    return (
        <div className={'cv-section abilities'}>
            <ul className={'skills'}>
            {skillArr.map((item, index) =>
                <li key={index}>
                    <span className={'skill-name'}>{item.name}</span>
                    <StarFiller skillVal={item.skillValue}/>
                </li>
            )}
            </ul>
        </div>
    )
};

const LangSection = () => {

    const skillDefs = [
        'just a few phrases',
        'elementary',
        'limited working proficiency',
        'conversational',
        'advanced',
        'expert / native speaker'
    ];

    const skillArr = [
        {
            'name': 'English',
            'skillValue': 5
        }, {
            'name': 'Estonian',
            'skillValue': 4
        }, {
            'name': 'Russian',
            'skillValue': 3
        }, {
            'name': 'Polish',
            'skillValue': 2
        }, {
            'name': 'French',
            'skillValue': 2
        }, {
            'name': 'German',
            'skillValue': 2
        }, {
            'name': 'Swedish',
            'skillValue': 1
        }, {
            'name': 'Urdu',
            'skillValue': 0
        }, {
            'name': 'Mandarin',
            'skillValue': 0
        }
    ];

    skillArr.sort((a, b) => (a.name > b.name) ? 1 : -1);

    const StarFiller = ({skillVal}) => {
        return (
            <span className={'skill-value'} data-skill={skillVal} data-tip={skillDefs[skillVal]}>
                <ReactTooltip effect={'solid'} id={'tooltip-skills'} />
                {[...Array(Math.floor(skillVal))].map((item, index) =>
                    <FontAwesomeIcon icon={faStar} key={index} className={'skillstar on'}/>)}
                {[...Array(5 - Math.floor(skillVal))].map((item, index) =>
                <FontAwesomeIcon icon={faStar} key={index} className={'skillstar off'}/>)}
            </span>
        )
    };

    return (
        <div className={'cv-section abilities'}>
            <ul className={'skills'}>
            {skillArr.map((item, index) =>
                <li key={index}>
                    <span className={'skill-name'}>{item.name}</span>
                    <StarFiller skillVal={item.skillValue}/>
                </li>
            )}
            </ul>
        </div>
    )
};


class CV extends Component {
    render() {
        return (
            <div className={'wrapper subpage-wrapper'}>
                <header className={'topBar'}>
                    <Nav isMainNav={false}/>
                </header>
                <article>
                    <PageHeading text={'Curriculum vitae'} />
                    <MajorSectionHeading text={'Introduction'} />
                    <IconsAndPicSection infoArr={iconArr} picPath={'/public/images/barret-cv.png'} altText={'Pic of me hiking'} idName={'cv-intro'}/>
                    <MajorSectionHeading text={'Careers'} />
                    <CareerSection/>
                    <MajorSectionHeading text={'Education'} />
                    <EducationSection/>
                    <MajorSectionHeading text={'Skills'} />
                    <SkillSection/>
                    <MajorSectionHeading text={'Languages'} />
                    <LangSection/>
                </article>

                <Footer/>
            </div>
        )
    }
}

export default CV
