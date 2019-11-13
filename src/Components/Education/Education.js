import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import TimeLine from "../Timeline/Timeline"

class Education extends Component {
    state = {
        degrees: [
            { title: "High School Degree", institution: "U.E. Liceo Cultura", year: 2010, type:"Degree"}, 
            { title: "BSc. Computer Engineer", institution: "Universidad Alejandro de Humboldt", year: 2017, type:"Degree"}, 
            { title: "Computer Sistems Technitian", institution: "Fundacion Carlos Slim", year: 2017, type:"Advanced Diploma"}, 
            { title: "Networking Engineer", institution: "Instituto Keys", year: 2017, type:"Course"}
        ]
    }

    render() {
        return (
            <React.Fragment>
                <h4 className="title back-line center-column education-back-line education-title">
                    <FontAwesomeIcon icon={faGraduationCap} /> <span>Education</span>
                </h4>
                <TimeLine elements={this.state.degrees}/>
            </React.Fragment>
        );
    }
}

export default Education;