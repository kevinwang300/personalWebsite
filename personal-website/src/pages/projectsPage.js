import React from 'react';
import { navbarActive, navbarUnactive } from "../utils/utils";

class ProjectsPage extends React.Component {
    componentDidMount() {
        navbarActive("navbar-projects")
    }

    componentWillUnmount() {
        navbarUnactive("navbar-projects")
    }

    render() {
        return (
            <div>
                <section className={"section margin-top-3-25"}>
                    Projects
                    <ol>
                        <li>Homebuddy</li>
                        <li>Secure Data Store</li>
                        <li>Audioflexica</li>
                        <li>SQL Interpreter</li>
                    </ol>
                </section>
            </div>
        )
    }
}

export default ProjectsPage;