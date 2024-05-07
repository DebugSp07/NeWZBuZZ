// Navbar Component: This component represents the navigation bar of the application.

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faFutbol, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import './css/Navbar.css'; 

const Navbar = ({ currentTopic, onTopicChange }) => {
    return (
        <nav className={"navbar dark-mode"}>
            {/* Logo section */}
            <div className="logo">
                <FontAwesomeIcon icon={faNewspaper} className="news-icon" />
                <span>Today's News</span>
            </div>
            
            {/* Navigation links */}
            <div className="nav-links">
                {/* Home link */}
                <a href="#"><FontAwesomeIcon icon={faHome} /> Home</a>
                {/* Button to change topic to Sports */}
                <button onClick={() => onTopicChange('Sports')}> 
                    <FontAwesomeIcon icon={faFutbol} /> Sports
                </button>
                {/* Button to change topic to Politics */}
                <button onClick={() => onTopicChange('Politics')}>
                    <FontAwesomeIcon icon={faBalanceScale} /> Politics
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
