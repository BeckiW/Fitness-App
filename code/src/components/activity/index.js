import React from "react"
import Calender from '../calender2'
import { Link } from 'react-router-dom'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

class Activity extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        selectedActivity: "",
        selectedDuration: "",
        selectedDate: ""
      }
    }

    addEntry = (day) => {
      this.setState({
        selectedDate: day.toString()
      })
    }

    handleClick = () => {
      this.props.onClick(this.state)
    }

    club = localStorage.getItem("Club id")

  render() {
    return (
      <div>
        <div className="navigation">
          <Link to="/"><i class="fas fa-arrow-left"></i> Change your club</Link>
          <br />
          <div className="vertical-navigation">
            <Link to="/stats">View stats page <i class="fas fa-arrow-right"></i></Link>
            <br />
            <Link to="/badges">View your badges <i class="fas fa-arrow-right"></i></Link>
          </div>
        </div>
        <h2>You are playing for {this.club}</h2>
        <h1>Add a new activity</h1>
        <p>Activity</p>
        <select onChange={event => this.setState({selectedActivity: event.target.value})}>
          <option>Choose an activity</option>
          {this.props.activityList.map((activity) => {
            return (<option key={activity} value={activity}>{activity}</option>
            )
          })}
        </select>

        <p>Duration</p>
        <select onChange={event => this.setState({selectedDuration: event.target.value})}>
          <option>Choose a duration</option>
          {this.props.durationList.map((duration) => {
            return (<option key={duration} value={duration}>{duration}</option>
            )
          })}
        </select>

        <p>Date</p>
        <DayPickerInput onDayChange={day => this.addEntry(day)} />
        <button type="button" onClick={this.handleClick}>Add</button>

        <Calender calendarData={this.props.calendarData} />
      </div>
    )
  }
}

export default Activity
