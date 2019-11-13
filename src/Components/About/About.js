import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap";

class About extends Component {
    state = {}
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h4 className="title back-line">
                            About Me
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="about-info">
                            I firmly believe that excellence, is achieved more with perseverance than talent, our abili-
                            ty to get up from the ground defines how far we can go, I like to believe that we all can
        
                            achieve the impossible, as long as we are willing to take on the challenges that this entails.
                            i have worked since my 16's on IT related jobs, doing from maintenance jobs, to software
                            development of corporate aplications in web environments, using different technologies
                            adapted to the needs of each project. "Learn without thinking begets ignorance. Think
                            without learning is dangerous. Confucius" - Lun Yu.
                        </p>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default About;