import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { navbarActive, navbarUnactive } from "../utils/utils";

// Photo by Nathan Dumlao on Unsplash
import CoffeeChatBackground from "../images/coffeeChat.jpg";

class ContactPage extends React.Component {
    componentDidMount() {
        navbarActive("navbar-contact")
    }

    componentWillUnmount() {
        navbarUnactive("navbar-contact")
    }

    handleEmailOnClick() {
        // Create new element
        var el = document.createElement('textarea');
        // Set value (string to be copied)
        el.value = 'kevinwang300@berkeley.edu';
        // Set non-editable to avoid focus and move outside of view
        el.setAttribute('readonly', '');
        el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);
        // Select text inside element
        el.select();
        // Copy text to clipboard
        document.execCommand('copy');
        // Remove temporary element
        document.body.removeChild(el);
        alert('kevinwang300@berkeley.edu copied.')
    }

    render() {
        return (
            <div>
                <div id={"background-slider"} className={"position-fixed background-size-cover"}
                     style={{"background-image": `url(${CoffeeChatBackground})`}}/>
                <section className="section margin-top-3-25">
                    <div className={"container margin-top-5"}>
                        <div className={"padding-one"}>
                            <h2 className={"title is-2 content centered text-centered color-white"}>
                                Let's have a coffee chat!
                            </h2>
                            <h4 className={"title is-4 content centered text-centered color-white"}>
                                Feel free to connect with me, reach out to me, or check out my projects below.
                            </h4>
                            <div className={"content"}>
                                <div className={"width-25 display-flex centered"}>
                                    <div className={"display-inline-block flex-grow-point-five"}>
                                        <a href={"http://www.linkedin.com/in/kevinwang300"}
                                           target={"_blank"} className={"color-white hover-gray"}>
                                            <FontAwesomeIcon className={"image-height"} icon={faLinkedin}/>
                                        </a>
                                    </div>
                                    <div className={"display-inline-block flex-grow-point-five"}>
                                        <a onClick={this.handleEmailOnClick} className={"color-white hover-gray"}>
                                            <FontAwesomeIcon className={"image-height"} icon={faEnvelope}/>
                                        </a>
                                    </div>
                                    <div className={"display-inline-block"}>
                                        <a href={"http://github.com/kevinwang300"} target={"_blank"}
                                           className={"color-white hover-gray"}>
                                            <FontAwesomeIcon className={"image-height"} icon={faGithubSquare}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ContactPage;