import React, { Component } from 'react';
import "./TimeLineItem.css"

class TimeLineItem extends Component {
    state = {}
    render() {
        return (
            <div className={`wrapper ${this.props.inverted ? "right" : "left"}`} >
                <div className="header">
                    {this.props.header}
                </div>
                <div className="description">
                    {this.props.description}
                </div>
                <div className={`timeline-dot-${this.props.inverted ? "right" : "left"}`}>

                </div>
            </div>
        );
    }
}

export default TimeLineItem;