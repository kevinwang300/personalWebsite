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
import SfSkyline from "../images/sfSkyline.jpg";

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
    }

    componentWillUnmount() {
        clearTimeout(slider);
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
                <section className={"section"}>
                    <div className={"container width-55"}>
                        <div className={"padding-one"}>
                            <h3 className="title is-3 text-centered">Experiences:</h3>
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
                                            <div className={"box"}>Hello World</div>
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
                                            <div className={"box"}>Splunk stuff here</div>
                                        </div>
                                        <button className="modal-close is-large" onClick={() => {
                                            this.toggleTile("splunk", false)
                                        }} aria-label="close"></button>
                                    </div>
                                </div>
                            </div>
                            <div className={"tile is-ancestor"}>
                                <div className={"tile is-parent"}>
                                    <article className={"tile is-child notification web-tile opacity-point-eight-five"}>
                                        <img className={"height-15 display-block centered padding-one"} src={SabreLogo}/>
                                        <h4 className="title is-5 text-centered">Software Developer Intern</h4>
                                        <h4 className="subtitle is-6 text-centered">May 2018 - August 2018</h4>
                                    </article>
                                </div>
                                <div className={"tile is-parent"}>
                                    <article className={"tile is-child notification web-tile opacity-point-eight-five"}>
                                        <img className={"height-15 display-block centered padding-one"} src={WorldlyLogo}/>
                                        <h4 className="title is-5 text-centered">Software Engineering Intern</h4>
                                        <h4 className="subtitle is-6 text-centered">December 2017 - April 2018</h4>
                                    </article>
                                </div>
                            </div>
                            <div className={"tile is-ancestor"}>
                                <div className={"tile is-parent"}>
                                    <article className={"tile is-child notification web-tile opacity-point-eight-five"}>
                                        <img className={"height-15 display-block centered padding-one"} src={Able2ShineLogo}/>
                                        <h4 className="title is-5 text-centered">Software Engineering Intern</h4>
                                        <h4 className="subtitle is-6 text-centered">May 2017 - June 2017</h4>
                                    </article>
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