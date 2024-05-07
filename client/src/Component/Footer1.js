// Footer Component: This component represents the footer of the application.

import React from "react";
import "./css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import FooterModal from "./Modal/PrivateModel"; // Importing FooterModal component

// Footer component
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Rendering FooterModal component */}
                <div className="item1">
                    <FooterModal/>
                </div>

                {/* Displaying application name and copyright year */}
                <div className="item2">
                    <span style={{ paddingRight: 5 }}>NeWZBuZZ </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} Vishnu Priya Misra
                    </span>
                </div>
                
                {/* Link to GitHub repository */}
                <a
                    href="https://github.com/DebugSp07"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
