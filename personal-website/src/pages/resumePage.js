import React from 'react';
import Resume from "../images/Kevin.Wang.pdf";
import { navbarActive, navbarUnactive } from "../utils/utils";

class ResumePage extends React.Component {
    componentDidMount() {
        navbarActive("navbar-resume")
    }

    componentWillUnmount() {
        navbarUnactive("navbar-resume")
    }

    render() {
        return (
            <section className={"section margin-top-3-25 height-90vh"}>
                <embed src={Resume} width="100%" height="100%" />
            </section>
        )
    }
}

export default ResumePage