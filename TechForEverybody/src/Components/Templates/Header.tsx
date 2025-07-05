// import React, { useContext } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { DehazeIcon, DarkModeIcon, LightModeIcon, CloseIcon } from '../../Imports/Icons/IconImports';
// import { languageContext } from "../../App";
// import { LanguageContext } from "../../Contexts/LanguageContext";
function Header() {
    // let { language,updateLanguageState } = useContext(languageContext) as LanguageContext;

    let [window_width, updateWindowWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        updateWindowWidth(window.innerWidth);
    });
    let [toggleNavbar, updateToggleNavbar] = useState(false);
    let [showAnimation, updateShowAnimation] = useState(false);
    let [darkMode, updateDarkMode] = useState(document.querySelector("body")?.classList.contains("dark") ? true : false);
    // let toggleLanguage = () => {
    //     updateLanguageState({ isHindi: !language.isHindi });
    // }
    let toggleDarkMode = () => {
        updateShowAnimation(true);
        updateDarkMode(!darkMode);
        document.querySelector("body")?.classList.toggle("dark");
        setTimeout(() => {
            document.getElementById("animation")?.style.setProperty("display", "none");
            updateShowAnimation(false);
        }, 300)
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
                                darkMode ? "Dark " : "Light "
                            } </button>
                        {/* <button className="btn btn-primary" onClick={() => {
                        toggleLanguage();
                    }}>
                        {
                            language.isHindi ? "Hindi " : "English "
                        } </button> */}
                    </nav>

                    <nav
                        className={`MobileNav ${toggleNavbar ? "display_flex" : "display_none"
                            }`}>
                        <CloseIcon onClick={() => {
                            updateToggleNavbar(false);
                        }} />
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
                                darkMode ? "Dark " : "Light "
                            } </button>
                    </nav>
                </header>
                {
                    showAnimation ? darkMode ?
                        <div id="animation">
                            <div className="moon">
                            </div>
                        </div>
                        : <div id="animation">
                            <div className="sun">
                            </div>
                        </div>
                        : ""
                }

        </>
    );
}

export default Header;
