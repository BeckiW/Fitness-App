import React from "react"
import Bubble from "../Bubbles"
import Stream from '../stream'

class Stats extends React.Component {

  render(){
    return (
      <div>
      {this.props.swimTime}
        <Bubble
          swimTime={this.props.swimTime}
          hikeTime={this.props.hikeTime}
          gymTime={this.props.gymTime} />
        <Stream
          swimTime={this.props.swimTime}
          hikeTime={this.props.hikeTime}
          gymTime={this.props.gymTime} />
      </div>
    )
  }
}

export default Stats
