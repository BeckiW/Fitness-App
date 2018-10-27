import React from "react"
import { Link } from 'react-router-dom'
import Bubble from "../Bubbles"
import Stream from '../stream'
import BubbleMonth from "../BubbleMonth"

class Stats extends React.Component {

  state = {
          active: false,
      };


  toggleClass = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        console.log(currentState)
    };



  club  = localStorage.getItem("Club id")



  render(){



    return (
      <div>
        <div className="navigation">
          <Link to="/"><i class="fas fa-arrow-left"></i> Change your club</Link>
          <br />
          <div className="vertical-navigation">
            <Link to="/activity">Add an activity <i class="fas fa-arrow-right"></i> </Link>
            <br />
            <Link to="/badges">View your badges <i class="fas fa-arrow-right"></i></Link>
          </div>
        </div>
        <h2>{this.club}</h2>
        <h1>Your exercise stats</h1>
        <div className="graphs">

        <div className={this.state.active ? "openView" : "closedView"}>
          <BubbleMonth
            swimTime={this.props.swimMonthTime}
            hikeTime={this.props.hikeMonthTime}
            gymTime={this.props.gymMonthTime}
            runTime={this.props.runMonthTime}
            cycleTime={this.props.cycleMonthTime}
            otherTime={this.props.otherMonthTime} />

        </div>



        <div className={this.state.active ? "closedView" : "openView"}>

          <Bubble
            swimTime={this.props.swimTime}
            hikeTime={this.props.hikeTime}
            gymTime={this.props.gymTime}
            runTime={this.props.runTime}
            cycleTime={this.props.cycleTime}
            otherTime={this.props.otherTime} />

          </div>

         <button onClick={this.toggleClass}>Change view </button>

          <Stream streamData={this.props.streamData} />


        </div>
      </div>
    )
  }
}

export default Stats
