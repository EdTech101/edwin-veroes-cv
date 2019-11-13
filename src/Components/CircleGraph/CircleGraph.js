import React, { Component } from 'react';
import {VictoryAnimation,VictoryLabel,VictoryPie} from "victory"
import "./CircleGraph.css"

class CircleGraph extends Component {
    constructor() {
        super();
        this.state = {
          percent: 0, data: this.getData(0)
        };
      }
    
      componentDidMount() {
        let percent = 0;
        this.setStateInterval = setTimeout(() => {
          percent += this.props.percentage;         
          this.setState({
            percent, data: this.getData(percent)
          });
        }, 100);
      }
    
      componentWillUnmount() {
        window.clearInterval(this.setStateInterval);
      }

    getData(percent) {
        return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
      }

    render() { 
        return (  
            <div className="clearfix flip">
            <svg viewBox="0 0 400 400" width="100%" height="100%">
              <VictoryPie
                standalone={false}
                animate={{ duration: 1000 }}
                width={400} height={400}
                data={this.state.data}
                innerRadius={130}
                cornerRadius={0}
                labels={() => null}
                style={{
                  data: { fill: ({ datum }) => {
                    const color = "rgb(0, 174, 239)";
                    return datum.x === 1 ? color : "rgb(68, 71, 69)";
                  }
                  }
                }}
              />
              <VictoryAnimation duration={1000} data={this.state}>
                {(newProps) => {
                  return (
                    <VictoryLabel
                      textAnchor="start" verticalAnchor="end"
                      x={300} y={50}
                      text={`${Math.round(newProps.percent)}%`}
                      style={{ fontSize: 45 }}
                      
                    />
                  );
                }}
              </VictoryAnimation>
            </svg>
          </div>
       );
    }
}
 
export default CircleGraph;