import React from "react"
import { Link } from 'react-router-dom'
import Bubble from "../Bubbles"
import Stream from '../stream'



class Stats extends React.Component {

  club  = localStorage.getItem("Club id")



  render(){

console.log(this.club)
    return (
      <div>
        <div className="navigation">
          <Link to="/"><i class="fas fa-arrow-left"></i> Change your club</Link>
          <br />
          <Link to="/activity">Add a new activity <i class="fas fa-arrow-right"></i></Link>
        </div>
        <h1>Your exercise stats</h1>
        <h1>You are playing for {this.club}</h1>
        <Bubble
          swimTime={this.props.swimTime}
          hikeTime={this.props.hikeTime}
          gymTime={this.props.hikeTime} />
        <Stream streamData={this.props.streamData} />
      </div>
    )
  }
}

export default Stats
