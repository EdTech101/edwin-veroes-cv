import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import CircleGraph from '../CircleGraph/CircleGraph';

class Languages extends Component {
    state = {
        languages:[
            {name:"Spanish", percentage: 0,},
            {name:"English", percentage: 0},
            {name:"French", percentage: 0}
        ]
       
    }

    componentDidMount() {

        setTimeout(function () {
            this.setState({languages: [
                {name:"Spanish", percentage: 100,},
                {name:"English", percentage: 90},
                {name:"French", percentage: 25}
            ]})
        }.bind(this), 0)
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className="align-left side-info-title">
                        <h1 className="title main-section"><FontAwesomeIcon icon={faGlobe} className="languages-fix" />  Languages</h1>
                    </Col>
                </Row>
                <Row>
                    {this.state.languages.map((language, key) => {
                    return (
                    <Col xs={12} md={6} key={key}>
                        <div className="center-items languages-height">
                            <CircleGraph percentage={language.percentage} />
                            <span className="language-name">{language.name}</span>
                        </div>
                    </Col> 
                    )
                })}                   
                 
                </Row>
            </Container>);
    }
}

export default Languages;