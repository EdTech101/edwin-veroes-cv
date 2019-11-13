import React from 'react';
import { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { faGithub, faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Social extends Component {
    state = {}
    render() {
        return (
        <section className="section-social">
            <Container>
                <Row>
                    <Col className="social-item">
                        <span>
                            <FontAwesomeIcon icon={faFacebookF} className="icon-social" />
                        </span> Edwin Veroes
                    </Col>
                    <Col className="social-item">
                        <span>
                            <FontAwesomeIcon icon={faTwitter} className="icon-social" />
                        </span> @Edwinx101
                    </Col>
                    <Col className="social-item">
                        <span>
                            <FontAwesomeIcon icon={faGithub} className="icon-social" />
                        </span> EdTech101
                    </Col>
                    <Col className="social-item">
                        <span>
                            <FontAwesomeIcon icon={faInstagram} className="icon-social" />
                        </span> Edwin Veroes
                    </Col>
                </Row>
            </Container>
        </section>);
    }
}

export default Social;