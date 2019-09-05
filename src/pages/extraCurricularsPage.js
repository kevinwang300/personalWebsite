import React from 'react';
import '../website.css';
import { navbarActive, navbarUnactive } from "../utils/utils";
import HomebuddyScreenshot from "../images/homebuddyScreenshot.png";

// https://www.stanforddaily.com/wp-content/uploads/2017/11/NEW.111617.MORETTI.CROP_.jpg
import UCBerkeleyBackground from "../images/UCBerkeleyBackground.jpg";

import AiRPicture from "../images/AiRPicture.jpg";
import TKEPicture from "../images/TKEPicture.jpg";
import CodeologyPicture from "../images/CodeologyPicture.jpg";

// https://artistsinresonance.berkeley.edu/#about
let airAbout = "Artists in Resonance, casually known on campus as AiR!, is the premiere\n" +
    "independent co-ed a cappella group based out of the University of California,\n" +
    "Berkeley. From our humble beginnings in 1987, We now have fourteen amazing\n" +
    "performers, performing every Monday at noon underneath Sather Gate on campus.\n" +
    "Our repertoire includes self-arranged pieces, everything from alternative rock\n" +
    "and hip-hop to traditional fight songs and Top 40 hits.";

// https://en.wikipedia.org/wiki/Tau_Kappa_Epsilon
let tkeAbout = "Tau Kappa Epsilon, commonly known as TKE or Teke, is a social college\n" +
    "fraternity founded on January 10, 1899, at Illinois Wesleyan University. \n" +
    "The organization has chapters throughout the United States and Canada, making \n" +
    "it an international organization. As of fall 2017 there were 246 active TKE chapters and colonies.";

// https://www.codeology.club/about
let codeologyAbout = "Codeology is a UC Berkeley student club focused on self-exploration within the tech industry. \n" +
    "By offering hands-on experience through collaborative student projects and professional workshops, we aim to \n" +
    "bring the breadth of opportunities and roles within the tech field to Cal students, as well as help our members \n" +
    "explore their specific technical and professional interests. \n" +
    "\n" +
    "We boast of having 60+ active members and alumni who have diverse interests and are highly motivated. They \n" +
    "contribute to a variety of research positions on campus as well as tech companies in the Bay area such as Samsara, \n" +
    "Uber, Google, Amazon, Facebook, Microsoft, Samsung, Berkeley InterACT, ServiceNow, Rubrik, The Climate Corporation, \n" +
    "Atlassian, Expedia, IBM, Berkeley's Division of Data Sciences and more.";

class ExtraCurricularsPage extends React.Component {
    componentDidMount() {
        navbarActive("navbar-extracurriculars")
    }

    componentWillUnmount() {
        navbarUnactive("navbar-extracurriculars")
    }

    render() {
        return (
            <div>
                <div id={"background-slider"} className={"position-fixed background-size-cover"}
                     style={{"background-image": `url(${UCBerkeleyBackground})`}}/>
                <section className={"section margin-top-3-25"}>
                    <div className={"container width-70"}>
                        <div className={"background-white padding-one border-radius-ten overflow-auto margin-bottom-2"}>
                            <div className={"float-right"}>
                                <img src={AiRPicture} className={"height-25 border-radius-ten display-block padding-one"} />
                            </div>
                            <div className={"padding-one"}>
                                <h4 className="title is-4">Artists in Resonance</h4>
                                <h6 className="subtitle is-6">Acapella Group</h6>
                                <div className={"content"}>
                                    <h6 className={"margin-bottom-point-5"}>About:</h6>
                                    <p className={"text-justify"}>
                                        {airAbout}
                                    </p>
                                    <h6 className={"margin-bottom-point-5"}>Roles:</h6>
                                    <p className={"text-justify"}>
                                        Music Manager, Tenor
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={"background-white padding-one border-radius-ten overflow-auto margin-bottom-2"}>
                            <div className={"float-left"}>
                                <img src={TKEPicture} className={"height-25 border-radius-ten display-block padding-one"} />
                            </div>
                            <div className={"padding-one"}>
                                <h4 className="title is-4">Tau Kappa Epsilon</h4>
                                <h6 className="subtitle is-6">Social Fraternity</h6>
                                <div className={"content"}>
                                    <h6 className={"margin-bottom-point-5"}>About:</h6>
                                    <p className={"text-justify"}>
                                        {tkeAbout}
                                    </p>
                                    <h6 className={"margin-bottom-point-5"}>Roles:</h6>
                                    <p className={"text-justify"}>
                                        Pledge Dad, House Manager Assistant, Serenade Chair, Date Party Chair,
                                        Sexual Violence Protection Chair
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={"background-white padding-one border-radius-ten overflow-auto margin-bottom-2"}>
                            <div className={"float-right"}>
                                <img src={CodeologyPicture} className={"height-25 border-radius-ten display-block padding-one"} />
                            </div>
                            <div className={"padding-one"}>
                                <h4 className="title is-4">Codeology</h4>
                                <h6 className="subtitle is-6">Computer Science Club</h6>
                                <div className={"content"}>
                                    <h6 className={"margin-bottom-point-5"}>About:</h6>
                                    <p className={"text-justify"}>
                                        {codeologyAbout}
                                    </p>
                                    <h6 className={"margin-bottom-point-5"}>Roles:</h6>
                                    <p className={"text-justify"}>
                                        Project Lead, Project Manager
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        )
    }
}

export default ExtraCurricularsPage;