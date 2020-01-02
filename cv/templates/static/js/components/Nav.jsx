import React from 'react';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faQuestionCircle, faIdCard, faFolderOpen, faComments, faToolbox } from "@fortawesome/free-solid-svg-icons";


const Nav = ({isMainNav}) => {
    const nav_elems = [
        {
            "icon": faHome,
            "label": "Home",
            "path": '/',
        }, {
            "icon": faQuestionCircle,
            "label": "About Me",
            "path": '/about',
        }, {
            "icon": faIdCard,
            "label": "CV",
            "path": '/cv',
        }, {
            "icon": faFolderOpen,
            "label": "Projects",
            "path": '/projects',
        }, {
            "icon": faComments,
            "label": "Contact",
            "path": '/contact',
        }, {
            "icon": faToolbox,
            "label": "Tools",
            "path": '/tools',
        },
    ];

    function navSlicer(navArr, isMain) {
        // Slices off the 'home' portion of the nav for when we're building the main page's nav
        // Then builds the list of links based on whether this is for the main page's nav or not
        if (isMain) {
            navArr = navArr.slice(1);
            return (
                <ul>
                    {navArr.map((item, index) =>
                        <li key={index} className={'navItem'}>
                            <a href={item.path}>{item.label}</a>
                        </li>)}
                </ul>
            )
        }
        return (
            <ul>
                {navArr.map((item, index) =>
                    <li key={index} className={'navItem'}>
                        <a href={item.path} data-tip={item.label}>
                            <ReactTooltip place={'bottom'} effect={'solid'}/>
                            <FontAwesomeIcon icon={item.icon} />
                        </a>
                    </li>)}
            </ul>
        )
    }

    let navClass = isMainNav ? 'mainNav' : 'topNav';

    return (
        <nav className={navClass}>
            {navSlicer(nav_elems, isMainNav)}
        </nav>
    )
};

export default Nav;
