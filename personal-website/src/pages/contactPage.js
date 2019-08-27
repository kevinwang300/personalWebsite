import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

class ContactPage extends React.Component {
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
            <section className="section">
                <div className={"container margin-top-5"}>
                    <div className={"padding-one"}>
                        <h4 className="title is-4 text-centered">Contact Me:</h4>
                        <div className={"content centered text-centered"}>
                            Feel free to connect with me, reach out to me, or check out my projects below!
                        </div>
                        <div className={"content"}>
                            <div className={"width-25 display-flex centered"}>
                                <div className={"display-inline-block flex-grow-point-five"}>
                                    <a href={"http://www.linkedin.com/in/kevin-wang-ba7b36123"}
                                       target={"_blank"}>
                                        <FontAwesomeIcon className={"image-height"} icon={faLinkedin}/>
                                    </a>
                                </div>
                                <div className={"display-inline-block flex-grow-point-five"}>
                                    <a onClick={this.handleEmailOnClick}>
                                        <FontAwesomeIcon className={"image-height"} icon={faEnvelope}/>
                                    </a>
                                </div>
                                <div className={"display-inline-block"}>
                                    <a href={"http://github.com/kevinwang300"} target={"_blank"}>
                                        <FontAwesomeIcon className={"image-height"} icon={faGithubSquare}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactPage;