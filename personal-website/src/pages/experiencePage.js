import React from 'react';
import TeslaLogo from "../images/teslaLogo.svg";
import TeslaOffice from "../images/teslaOffice.jpg";
import SplunkLogo from "../images/splunkLogo.png";
import SplunkOffice from "../images/splunkOffice.jpg";
import SabreLogo from "../images/sabreLogo.svg";
import SabreOffice from "../images/sabreOffice.jpg";
import WorldlyLogo from "../images/worldlyLogo.png";
import Able2ShineLogo from "../images/able2shineLogo.jpg";
import "../website.css";
import { navbarActive, navbarUnactive } from "../utils/utils";

let slider;

class ExperiencePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisibility: {
                tesla: false,
                splunk: false,
                sabre: false,
                worldly: false,
                able2shine: false
            }
        }
    }

    componentDidMount() {
        let images = [
            SplunkOffice,
            SabreOffice,
            TeslaOffice
        ];

        slider = setInterval(function() {
            document.getElementById('background-slider').setAttribute('style', 'background-image: url("'+images[0]+'")');
            images.splice(images.length, 0, images[0]);
            images.splice(0, 1);
        }, 4000);

        navbarActive("navbar-experience")
    }

    componentWillUnmount() {
        clearTimeout(slider);
        navbarUnactive("navbar-experience")
    }

    toggleTile(str, bool) {
        this.setState(prevState => ({
            modalVisibility: {
                ...prevState.modalVisibility,
                [str]: bool
            }
        }))
    }

    render() {
        let visibleModals = {}

        for (let key in this.state.modalVisibility) {
            visibleModals[key] = this.state.modalVisibility[key] ? "is-active" : ""
        }

        return (
            <div>
                <div id={"background-slider"} className={"position-fixed background-size-cover"}
                     style={{"background-image": `url(${TeslaOffice})`}}/>
                <section className={"section margin-top-3-25"}>
                    <div className={"container width-55"}>
                        <div className={"padding-one"}>
                            <div className={"tile is-ancestor"}>
                                <div className={"tile is-parent"}>
                                    <article className={"tile is-child notification web-tile opacity-point-eight-five"} onClick={() => {
                                        this.toggleTile("tesla", true)
                                    }}>
                                        <img className={"height-15 display-block centered padding-one"} src={TeslaLogo}/>
                                        <h4 className="title is-5 text-centered">Software Engineering Intern</h4>
                                        <h4 className="subtitle is-6 text-centered">September 2019 - Present</h4>
                                    </article>
                                    <div id="tesla-modal" className={"modal " + visibleModals["tesla"]}>
                                        <div className="modal-background"></div>
                                        <div className="modal-content">
                                            <div className={"box"}>
                                                <h3 className={"title is-3"}>Tesla</h3>
                                                <h5 className="title is-5">Software Engineering Intern</h5>
                                                <h6 className="subtitle is-6">September 2019 - Present</h6>
                                                <p>
                                                    ● Payments team.
                                                </p>
                                            </div>
                                        </div>
                                        <button className="modal-close is-large" onClick={() => {
                                            this.toggleTile("tesla", false)
                                        }} aria-label="close"></button>
                                    </div>
                                </div>
                                <div className={"tile is-parent"}>
                                    <article className={"tile is-child notification web-tile opacity-point-eight-five"} onClick={() => {
                                        this.toggleTile("splunk", true)
                                    }}>
                                        <img className={"height-15 display-block centered padding-one"} src={SplunkLogo}/>
                                        <h4 className="title is-5 text-centered">Software Engineering Intern</h4>
                                        <h4 className="subtitle is-6 text-centered">May 2019 - August 2019</h4>
                                    </article>
                                    <div id="splunk-modal" className={"modal " + visibleModals["splunk"]}>
                                        <div className="modal-background"></div>
                                        <div className="modal-content">
                                            <div className={"box"}>
                                                <h3 className={"title is-3"}>Splunk</h3>
                                                <h5 className="title is-5">Software Engineering Intern</h5>
                                                <h6 className="subtitle is-6">May 2019 - August 2019</h6>
                                                <p>
                                                    ● Developed an automated release pipeline for clients, incorporating
                                                    various API’s including Jenkins, Jira, Slack, and SMTP.<br/>
                                                    ● Reduced the release process from 1 day to 1 hour for over 50 Splunk
                                                    technical add-on release products.<br/>
                                                    ● Built a task engine microservice that receives tasks with a Flask
                                                    API that distributes requests to parallel workers.
                                                </p>
                                            </div>
                                        </div>
                                        <button className="modal-close is-large" onClick={() => {
                                            this.toggleTile("splunk", false)
                                        }} aria-label="close"></button>
                                    </div>
                                </div>
                            </div>
                            <div className={"tile is-ancestor"}>
                                <div className={"tile is-parent"}>
                                    <article className={"tile is-child notification web-tile opacity-point-eight-five"} onClick={() => {
                                        this.toggleTile("sabre", true)
                                    }}>
                                        <img className={"height-15 display-block centered padding-one"} src={SabreLogo}/>
                                        <h4 className="title is-5 text-centered">Software Developer Intern</h4>
                                        <h4 className="subtitle is-6 text-centered">May 2018 - August 2018</h4>
                                    </article>
                                    <div id="sabre-modal" className={"modal " + visibleModals["sabre"]}>
                                        <div className="modal-background"></div>
                                        <div className="modal-content">
                                            <div className={"box"}>
                                                <h3 className={"title is-3"}>Sabre</h3>
                                                <h5 className="title is-5">Software Developer Intern</h5>
                                                <h6 className="subtitle is-6">May 2018 - August 2018</h6>
                                                <p>
                                                    ● Built a user portal enabling clients to implement corporate travel
                                                    policies using React and Redux.<br/>
                                                    ● Designed and implemented 2 REST API’s to handle 1000’s of client
                                                    corporate travel requests using YAML.<br/>
                                                    ● Improved code coverage of unit and integration tests by 60%, using
                                                    JUnit, Mockito, Jest, Enzyme and Selenide.<br/>
                                                </p>
                                            </div>
                                        </div>
                                        <button className="modal-close is-large" onClick={() => {
                                            this.toggleTile("sabre", false)
                                        }} aria-label="close"></button>
                                    </div>
                                </div>
                                <div className={"tile is-parent"}>
                                    <article className={"tile is-child notification web-tile opacity-point-eight-five"} onClick={() => {
                                        this.toggleTile("worldly", true)
                                    }}>
                                        <img className={"height-15 display-block centered padding-one"} src={WorldlyLogo}/>
                                        <h4 className="title is-5 text-centered">Software Engineering Intern</h4>
                                        <h4 className="subtitle is-6 text-centered">December 2017 - April 2018</h4>
                                    </article>
                                    <div id="worldly-modal" className={"modal " + visibleModals["worldly"]}>
                                        <div className="modal-background"></div>
                                        <div className="modal-content">
                                            <div className={"box"}>
                                                <h3 className={"title is-3"}>Worldly</h3>
                                                <h5 className="title is-5">Software Engineering Intern</h5>
                                                <h6 className="subtitle is-6">December 2017 - April 2018</h6>
                                                <p>
                                                    ● Enabled annotation, translation, and definition features to aid
                                                    students with reading academic journals.<br/>
                                                    ● Integrated the Google Translate and Oxford Dictionary API’s to
                                                    enable drop down functionalities for the product.<br/>
                                                </p>
                                            </div>
                                        </div>
                                        <button className="modal-close is-large" onClick={() => {
                                            this.toggleTile("worldly", false)
                                        }} aria-label="close"></button>
                                    </div>
                                </div>
                            </div>
                            <div className={"tile is-ancestor"}>
                                <div className={"tile is-parent"}>
                                    <article className={"tile is-child notification web-tile opacity-point-eight-five"} onClick={() => {
                                        this.toggleTile("able2shine", true)
                                    }}>
                                        <img className={"height-15 display-block centered padding-one"} src={Able2ShineLogo}/>
                                        <h4 className="title is-5 text-centered">Software Engineering Intern</h4>
                                        <h4 className="subtitle is-6 text-centered">May 2017 - June 2017</h4>
                                    </article>
                                    <div id="able2shine-modal" className={"modal " + visibleModals["able2shine"]}>
                                        <div className="modal-background"></div>
                                        <div className="modal-content">
                                            <div className={"box"}>
                                                <h3 className={"title is-3"}>Able2Shine</h3>
                                                <h5 className="title is-5">Software Engineering Intern</h5>
                                                <h6 className="subtitle is-6">May 2017 - June 2017</h6>
                                                <p>
                                                    ● Developed a comment-based student-teacher feedback system to enhance
                                                    communication across the product platform.<br/>
                                                    ● Spearheaded a UI redesign by rewriting components for responsive
                                                    design and making listings more image-centric.<br/>
                                                </p>
                                            </div>
                                        </div>
                                        <button className="modal-close is-large" onClick={() => {
                                            this.toggleTile("able2shine", false)
                                        }} aria-label="close"></button>
                                    </div>
                                </div>
                                <div className={"tile is-parent"} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ExperiencePage;