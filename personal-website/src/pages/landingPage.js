import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Header from '../components/header';
import Headshot from '../images/headshot.jpg';
import '../website.css';

class LandingPage extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <section className="section">
                    <div className={"container"}>
                        <img className={"height-25 rounded centered padding-one"} src={Headshot}/>
                        <div className={"padding-one"}>
                            <h4 className="title is-4 text-centered">Hello World! My name is Kevin Wang.</h4>
                            <div className={"content"}>
                                <p>
                                    I am currently a senior at UC Berkeley studying Computer Science
                                    looking for full time Software Engineering opportunities. I am Chinese American and
                                    grew up in Cupertino, CA. Growing up in South Bay, the software industry has been a
                                    large influence in my life. I enjoy the endless applications and possibilities that
                                    come with technology, especially with software engineering. In my spare time, I enjoy
                                    playing games from 2K to Halo, going to the gym, swimming, watching shows such as
                                    Friends and Avatar the Last Airbender, singing, and traveling; it's very eye-opening
                                    to immerse myself in different cultures and eating their delicious food.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default LandingPage