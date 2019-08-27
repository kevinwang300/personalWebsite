import React from 'react';
import TeslaLogo from "../images/teslaLogo.svg";
import SplunkLogo from "../images/splunkLogo.png";
import SabreLogo from "../images/sabreLogo.svg";
import WorldlyLogo from "../images/worldlyLogo.png";
import Able2ShineLogo from "../images/able2shineLogo.jpg";
import "../website.css";

class ExperiencePage extends React.Component {
    render() {
        return (
            <section className={"section"}>
                <div className={"container width-55"}>
                    <div className={"padding-one"}>
                        <h3 className="title is-3 text-centered">Experiences:</h3>
                        <div className={"tile is-ancestor"}>
                            <div className={"tile is-parent"}>
                                <article className={"tile is-child notification web-tile"}>
                                    <img className={"height-15 display-block centered padding-one"} src={TeslaLogo}/>
                                    <h4 className="title is-5 text-centered">Software Engineering Intern</h4>
                                    <h4 className="subtitle is-6 text-centered">September 2019 - Present</h4>
                                </article>
                            </div>
                            <div className={"tile is-parent"}>
                                <article className={"tile is-child notification web-tile"}>
                                    <img className={"height-15 display-block centered padding-one"} src={SplunkLogo}/>
                                    <h4 className="title is-5 text-centered">Software Engineering Intern</h4>
                                    <h4 className="subtitle is-6 text-centered">May 2019 - August 2019</h4>
                                </article>
                            </div>
                        </div>
                        <div className={"tile is-ancestor"}>
                            <div className={"tile is-parent"}>
                                <article className={"tile is-child notification web-tile"}>
                                    <img className={"height-15 display-block centered padding-one"} src={SabreLogo}/>
                                    <h4 className="title is-5 text-centered">Software Developer Intern</h4>
                                    <h4 className="subtitle is-6 text-centered">May 2018 - August 2018</h4>
                                </article>
                            </div>
                            <div className={"tile is-parent"}>
                                <article className={"tile is-child notification web-tile"}>
                                    <img className={"height-15 display-block centered padding-one"} src={WorldlyLogo}/>
                                    <h4 className="title is-5 text-centered">Software Engineering Intern</h4>
                                    <h4 className="subtitle is-6 text-centered">December 2017 - April 2018</h4>
                                </article>
                            </div>
                        </div>
                        <div className={"tile is-ancestor"}>
                            <div className={"tile is-parent"}>
                                <article className={"tile is-child notification web-tile"}>
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
        )
    }
}

export default ExperiencePage;