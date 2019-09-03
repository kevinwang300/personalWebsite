import React from 'react';
import SabreLogo from '../images/sabreLogo.svg';
import SplunkLogo from '../images/splunkLogo.png';
import '../website.css';

var slider;

class ExtraCurricularsPage extends React.Component {
    render() {
        return (
            <section className={"section"}>
                <div id="slideshow">
                    <div>
                        <img src={SabreLogo} />
                    </div>
                    <div>
                        <img src={SplunkLogo} />
                    </div>
                    <div>
                        Pretty cool eh? This slide is proof the content can be anything.
                    </div>
                </div>
            </section>
        )
    }
}

export default ExtraCurricularsPage;