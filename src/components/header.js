import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import '../website.css';
import { Link } from "react-router-dom";

class Header extends React.Component {
    render(props) {
        return (
            <div>
                <nav className="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link to={"/"} id={"navbar-brand"} className="navbar-item font-weight-bold">
                            Kevin Wang
                        </Link>

                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                           data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-end">
                            <Link to={"/experience"} id={"navbar-experience"} className="navbar-item">
                                Experience
                            </Link>
                            <Link to={"/projects"} id={"navbar-projects"} className="navbar-item">
                                Projects
                            </Link>
                            <Link to={"/resume"} id={"navbar-resume"} className="navbar-item">
                                Resume
                            </Link>
                            <Link to={"/extracurriculars"} id={"navbar-extracurriculars"} className="navbar-item">
                                Extracurriculars
                            </Link>
                            <Link to={"/contact"} id={"navbar-contact"} className="navbar-item">
                                Contact
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;