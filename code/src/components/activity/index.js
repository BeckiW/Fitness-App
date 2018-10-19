import React from "react"
import List from "../list"
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

  render() {
    return (
      <div>
        <p>Activity</p>
        <select onChange={event => this.setState({selectedActivity: event.target.value})}>
          {this.props.activityList.map((activity) => {
            return (<option key={activity} value={activity}>{activity}</option>
            )
          })}
        </select>

        <p>Duration</p>
        <select onChange={event => this.setState({selectedDuration: event.target.value})}>
          {this.props.durationList.map((duration) => {
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
