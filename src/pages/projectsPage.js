import React from 'react';
import { navbarActive, navbarUnactive } from "../utils/utils";
import HomebuddyScreenshot from "../images/homebuddyScreenshot.png";
import AudioflexicaScreenshot from "../images/audioflexicaScreenshot.png";

// https://i.ytimg.com/vi/QvClYShAeAw/maxresdefault.jpg
import TitanicScreenshot from "../images/titanicSplitting.jpg";

// https://static.makeuseof.com/wp-content/uploads/2017/07/store-data-freenas-box-670x335.jpg
import DatastoreScreenshot from "../images/datastore.jpg";

// Photo by Arnold Francisca on Unsplash
import LaptopBackground from "../images/laptopBackground.jpg";

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
                <div id={"background-slider"} className={"position-fixed background-size-cover"}
                     style={{"background-image": `url(${LaptopBackground})`}}/>
                <section className={"section margin-top-3-25"}>
                    <div className={"container width-70"}>
                        <div className={"background-white padding-one border-radius-ten overflow-auto margin-bottom-2"}>
                            <div className={"float-left"}>
                                <img src={HomebuddyScreenshot} className={"height-25 border-radius-ten display-block padding-one"} />
                            </div>
                            <div className={"padding-one"}>
                                <h4 className="title is-4">Homebuddy</h4>
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
                        <div className={"background-white padding-one border-radius-ten overflow-auto margin-bottom-2"}>
                            <div className={"float-right"}>
                                <img src={DatastoreScreenshot} className={"height-25 border-radius-ten display-block padding-one"} />
                            </div>
                            <div className={"padding-one"}>
                                <h4 className="title is-4">Secure Data Store</h4>
                                <div className={"content"}>
                                    <h6 className={"margin-bottom-point-5"}>Premise:</h6>
                                    <p className={"text-justify"}>
                                        Various cloud data stores such as Google Drive and Dropbox exist where users can
                                        back up data on the cloud, allowing information to be accessed from anything connected
                                        to the internet with the right credentials. Credentials prevent others from
                                        accessing sensitive information, but what if the data store itself cannot
                                        be trusted? The secure data store enables data to be stored
                                        and retrieved with the proper credentials, but anyone with access to the
                                        data store itself can't determine anything without the credentials.
                                    </p>
                                    <h6 className={"margin-bottom-point-5"}>Implementation Overview:</h6>
                                    <p className={"text-justify"}>
                                        Credentials are hashed before being stored into the data store to be both
                                        deterministic and irreversible. All of the data stored in the data stored is
                                        encrypted with RSA keys and salted with usernames to add further entropy. This
                                        will allow only users with the right credentials to decrypt the information that
                                        they store. Anyone looking at the data store itself will only be able to read
                                        hashed credentials or encrypted data.
                                    </p>
                                    <h6 className={"margin-bottom-point-5"}>Technologies:</h6>
                                    <p className={"text-justify"}>
                                        Secure Data Store uses Golang and HMAC, AES libraries to
                                        respectively hash and encrypt data.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={"background-white padding-one border-radius-ten overflow-auto margin-bottom-2"}>
                            <div className={"float-left"}>
                                <img src={AudioflexicaScreenshot} className={"height-25 border-radius-ten display-block padding-one"} />
                            </div>
                            <div className={"padding-one"}>
                                <h4 className="title is-4">Audioflexica</h4>
                                <div className={"content"}>
                                    <h6 className={"margin-bottom-point-5"}>Premise:</h6>
                                    <p className={"text-justify"}>
                                        Music has been a large part of my life for as long as I can remember. I have been
                                        in choirs and acapella groups my entire life. Music and computer science are two
                                        of the strongest passions I have, so I thought creating a music visualizer would
                                        be a great way to bridge these two areas of my life.
                                    </p>
                                    <h6 className={"margin-bottom-point-5"}>Implementation Overview:</h6>
                                    <p className={"text-justify"}>
                                        The music visualizer is a 2D grid in 3D space. The grid is then
                                        connected to an audio receiver that takes the data and
                                        modifies the grid vertices in response to the incoming audio data.
                                    </p>
                                    <h6 className={"margin-bottom-point-5"}>Technologies:</h6>
                                    <p className={"text-justify"}>
                                        Audioflexica uses Python, PyAudio and PyQTGraph.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={"background-white padding-one border-radius-ten overflow-auto"}>
                            <div className={"float-right"}>
                                <img src={TitanicScreenshot} className={"height-25 border-radius-ten display-block padding-one"} />
                            </div>
                            <div className={"padding-one"}>
                                <h4 className="title is-4">Titanic Survivor Predictor</h4>
                                <div className={"content"}>
                                    <h6 className={"margin-bottom-point-5"}>Premise:</h6>
                                    <p className={"text-justify"}>
                                        The sinking of the "unsinkable" Titanic was one of the greatest tragedies in recent
                                        history. Though many people died, some survived, and this project predicts what
                                        factors tended to decide whether people survived the accident.
                                    </p>
                                    <h6 className={"margin-bottom-point-5"}>Implementation Overview:</h6>
                                    <p className={"text-justify"}>
                                        Using a Titanic Kaggle dataset with various categories such as age, gender, room,
                                        economic class, and more, the predictor utilizes random forests to predict which
                                        categories should be used to determine if a passenger survived.
                                    </p>
                                    <h6 className={"margin-bottom-point-5"}>Technologies:</h6>
                                    <p className={"text-justify"}>
                                        Titanic Survivor Predictor uses Python and Jupyter Notebook.
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

export default ProjectsPage;