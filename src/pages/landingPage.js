import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Header from '../components/header';
import '../website.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ExperiencePage from "./experiencePage";
import AboutPage from "./aboutPage";
import ContactPage from "./contactPage";
import ResumePage from "./resumePage";
import ExtraCurricularsPage from "./extraCurricularsPage";
import ProjectsPage from "./projectsPage";


class LandingPage extends React.Component {
    render() {
        return (
            <Router>
                <Header/>

                <Route exact path="/" component={AboutPage} />
                <Route path="/experience" component={ExperiencePage} />
                <Route path={"/contact"} component={ContactPage} />
                <Route path={"/resume"} component={ResumePage} />
                <Route path={"/extracurriculars"} component={ExtraCurricularsPage} />
                <Route path={"/projects"} component={ProjectsPage} />
            </Router>
        )
    }
}

export default LandingPage