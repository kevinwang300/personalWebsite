import React from 'react';
import '../website.css';
import { navbarActive, navbarUnactive } from "../utils/utils";
import HomebuddyScreenshot from "../images/homebuddyScreenshot.png";
import DatastoreScreenshot from "../images/datastore.jpg";

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
                <div className={"container width-70"}>
                    <div className={"background-white padding-one border-radius-ten overflow-auto margin-bottom-2"}>
                        <div className={"float-left"}>
                            <img src={HomebuddyScreenshot} className={"height-25 border-radius-ten display-block padding-one"} />
                        </div>
                        <div className={"padding-one"}>
                            <h4 className="title is-4">Homebuddy</h4>
                            <h5 className="subtitle is-5">Spring 2019</h5>
                            <div className={"content"}>
                                <h6 className={"margin-bottom-point-5"}>Premise:</h6>
                                <p className={"text-justify"}>
                                        As a college students, campus safety is a very important matter. Students often stay out
                                    late to study for upcoming midterms or finals, and they need to be able to get home safely.
                                        With Homebuddy, students can use the app to pair with other students to walk home
                                    together and ensure they reach their homes safely.
                                </p>
                                <h6 className={"margin-bottom-point-5"}>Implementation Overview:</h6>
                                <p className={"text-justify"}>
                                        For students to be able to use Homebuddy, they first have to create accounts using
                                    their college edu emails. Once they create an account, they can sign in and use
                                    the app. By clicking "Find Buddy", the student is then placed into a pool of
                                    users looking for Home Buddies to pair and walk home with.
                                </p>
                                <h6 className={"margin-bottom-point-5"}>Technologies:</h6>
                                <p className={"text-justify"}>
                                        Homebuddy uses a FERN stack: Firebase, Express, React, Node.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        )
    }
}

export default ExtraCurricularsPage;