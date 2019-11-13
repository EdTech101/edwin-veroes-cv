import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import TimeLineItem from "../TimeLineItem/TimeLineItem"


class Timeline extends Component {
    state = {}
    render() {
        let studies = [];
        for (let i = 0; i < this.props.elements.length; i+=2) {
            studies.push(
                    <Row key={i} style={{display:"flex"}}>
                        <Col>
                            <TimeLineItem header={this.props.elements[i].title} description={this.props.elements[i].institution} />
                        </Col>
                        <Col>
                            <TimeLineItem header={this.props.elements[i+1].title} description={this.props.elements[i+1].institution} inverted />
                        </Col>
                    </Row>    
               )             
        }
        return (            
            <div style={{ marginTop: "60px", display:"flex", flexDirection:"column" }} id="timeline-wrapper" >              
                {studies.map(element => element)}
            </div>
        );
    }
}

export default Timeline;