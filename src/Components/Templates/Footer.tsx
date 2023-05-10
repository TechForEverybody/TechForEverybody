import React from 'react'
import { NavLink } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
    return (
        <>
            <footer>
                <div className="footerOptions">
                    <div className="smallIntro">
                        <h1>TechForEverybody</h1>
                        <div className="links">
                            <a href="https://github.com/TechForEverybody"><GitHubIcon /></a>
                            <a href="https://www.linkedin.com/in/shiva995/"><LinkedInIcon /></a>
                        </div>
                    </div>
                    <div className="option contactDetails">
                        <h3>Contact Us</h3>
                        <h5>Get in touch with us!</h5>
                        <li><a href="mailto:farmerfriend2023@gmail.com">Email: <span>xxxxxxxxx@gmail.com</span></a></li>
                        <li><a href="tel:+91xxxxxxxxxx">Phone: <span>+91xxxxxxxxxx</span></a></li>
                    </div>
                </div>
                <hr />
                <div className="footerBottom">
                    <h3>TechForEverybody || All Rights are Reserved</h3>
                </div>
            </footer>
        </>
    )
}

export default Footer