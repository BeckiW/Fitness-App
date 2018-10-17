import React from "react"
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

class Activity extends React.Component {

  activity = ["swim", "run", "cycle", "hike", "tennis", "team"]
  duration = ["30 mins", "1 hour", "2 hours", "4 hours", "8 hours"]

  activityList = []
  activityItem = {}

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
      this.activityItem = {
        activity: this.state.selectedActivity,
        duration: this.state.selectedDuration,
        date: this.state.selectedDate
      }
      this.activityList.push(this.activityItem)
      console.log(this.activityList)
    }

  render() {
    return (
      <div>

        <p>Activity</p>
        <select onChange={event => this.setState({selectedActivity: event.target.value})}>
          {this.activity.map((activity) => {
            return (<option key={activity} value={activity}>{activity}</option>
            )
          })}
        </select>

        <p>Duration</p>
        <select onChange={event => this.setState({selectedDuration: event.target.value})}>
          {this.duration.map((duration) => {
            return (<option key={duration} value={duration}>{duration}</option>
            )
          })}
        </select>

        <p>Date</p>
        <DayPickerInput onDayChange={day => this.addEntry(day)} />

        <button type="button" onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}

export default Activity
