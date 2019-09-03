import React from 'react';
import '../website.css';
import { navbarActive, navbarUnactive } from "../utils/utils";

class ExtraCurricularsPage extends React.Component {
    componentDidMount() {
        navbarActive("navbar-extracurriculars")
    }

    componentWillUnmount() {
        navbarUnactive("navbar-extracurriculars")
    }

    render() {
        return (
            <section className={"section margin-top-3-25"}>
                Extra Curriculars
                <ol>
                    <li>Artists in Resonance Acapella</li>
                    <li>Tau Kappa Epsilon Fraternity</li>
                    <li>Codeology</li>
                    <li>Sabre Intern Case Competition</li>
                </ol>
            </section>
        )
    }
}

export default ExtraCurricularsPage;