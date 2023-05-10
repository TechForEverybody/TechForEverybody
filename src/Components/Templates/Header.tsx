import React, { useContext } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { DehazeIcon, DarkModeIcon, LightModeIcon ,CloseIcon} from '../../Imports/Icons/IconImports';

function Header() {
    let [window_width, updateWindowWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        updateWindowWidth(window.innerWidth);
    });
    let [toggleNavbar, updateToggleNavbar] = useState(false);

    let [darkMode, updateDarkMode] = useState(document.querySelector("body")?.classList.contains("dark") ? true : false);
    let toggleDarkMode = () => {
        updateDarkMode(!darkMode);
        document.querySelector("body")?.classList.toggle("dark");
    }
    return (
        <>
            <header>
                <DehazeIcon
                    className={`${window_width < 786 ? "display_flex" : "display_none"
                        }`}
                    onClick={() => {
                        updateToggleNavbar(true);
                    }}
                />
                <div className="header">
                    <h1>
                        <NavLink to="/">
                            TechForEverybody
                        </NavLink>
                    </h1>
                </div>
                <div className=""></div>
                <div className=""></div>
                <nav
                    className={`DesktopNav ${window_width > 786 ? "display_flex" : "display_none"}`}>
                    <NavLink to="/experience">Skills & Experience</NavLink>
                    <NavLink to="/certifications"> Certifications</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <button className="btn btn-primary" onClick={() => {
                        toggleDarkMode();
                    }}>
                    {
                        darkMode ? <DarkModeIcon /> : <LightModeIcon />
                    } 
                    {
                        darkMode ? "Dark ": "Light "
                    } </button>
                </nav>

                <nav
                    className={`MobileNav ${toggleNavbar ? "display_flex" : "display_none"
                        }`}>
                    <CloseIcon onClick={() => {
                        updateToggleNavbar(false);
                    }}/>
                                        <NavLink to="/experience">Skills & Experience</NavLink>
                    <NavLink to="/certifications">Certifications</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <button className="btn btn-primary" onClick={() => {
                        toggleDarkMode();
                    }}>
                    {
                        darkMode ? <DarkModeIcon /> : <LightModeIcon />
                    } 
                    {
                        darkMode ? "Dark ": "Light "
                    } </button>
                </nav>
            </header>
        </>
    );
}

export default Header;
