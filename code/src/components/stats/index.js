import React from "react"
import Bubble from "./components/bubbles"
import Stream from './components/stream'

class Stats extends React.Component {

  render(){
    return (
      <div>
        <Bubble
          wimTime={this.state.swimTime}
          hikeTime={this.state.hikeTime}
          gymTime={this.state.gymTime} />
        <Stream
          swimTime={this.state.swimTime}
          hikeTime={this.state.hikeTime}
          gymTime={this.state.gymTime} />
      </div>
    )
  }
}

export default Stats
