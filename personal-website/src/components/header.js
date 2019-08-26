import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import '../website.css';

class Header extends React.Component {
    render(props) {
        return (
            <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item font-weight-bold" href="/">
                        Kevin Wang
                    </a>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item">
                            Experience
                        </a>
                        <a className="navbar-item">
                            Projects
                        </a>
                        <a className="navbar-item">
                            Extracurriculars
                        </a>
                        <a className="navbar-item">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;