import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faUser } from "@fortawesome/free-solid-svg-icons"

class PersonalData extends Component {
    state = {}
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className="align-left side-info-title">
                        <h1 className="title"> <FontAwesomeIcon icon={faUser} /> Personal Data</h1>
                    </Col>
                </Row>
                <Row className="center-items">
                    <Col className="align-left">From:</Col>
                    <Col className="align-right"> Venezuela <FontAwesomeIcon icon={faMapMarkerAlt} /></Col> 
                </Row>
                <Row className="center-items">
                    <Col className="align-left">Living:</Col>
                    <Col className="align-right">Mexico <FontAwesomeIcon icon={faMapMarkerAlt} /></Col>
                </Row>
            </Container>
        );
    }
}

export default PersonalData;