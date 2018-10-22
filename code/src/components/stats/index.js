import React from "react"
import Bubble from "../Bubbles"
import Stream from '../stream'

class Stats extends React.Component {

  render(){
    return (
      <div>
        <Bubble
          swimTime={this.props.swimTime}
          hikeTime={this.props.hikeTime}
          gymTime={this.props.hikeTime} />
        <Stream
          swimTime={this.props.swimTime}
          hikeTime={this.props.hikeTime}
          gymTime={this.props.gymTime} />
      </div>
    )
  }
}

export default Stats
