import React from "react"
import Bubble from "../Bubbles"
import Stream from '../stream'
import Calender from '../calender2'



class Stats extends React.Component {

  club  = localStorage.getItem("Club id")



  render(){

console.log(this.club)
    return (
      <div>

      <h1>You are playing for {this.club}</h1>

      {this.props.swimTime}
        <Bubble
          swimTime={this.props.swimTime}
          hikeTime={this.props.hikeTime}
          gymTime={this.props.hikeTime} />
        <Stream
          streamData={this.props.streamData} />
        <Calender
        swimTime={this.props.swimTime}
        hikeTime={this.props.hikeTime}
        gymTime={this.props.gymTime} />
      </div>
    )
  }
}

export default Stats
