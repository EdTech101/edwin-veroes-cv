import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap"

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header className="App-header">              
                <h1>EDWIN RICARDO VEROES CASTRO</h1>
                <h2>
                    Computer Science Engineer / Full Stack Web Developer
                </h2>
                <Container>
                    <Row>
                        <Col>
                            <div className="profile-pic-container">
                                <div className="profile-pic" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        );
    }
}

export default Header;