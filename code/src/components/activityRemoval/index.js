import React from "react"
import ActivityItem from "../activityItem"
import { Link } from 'react-router-dom'
import 'react-day-picker/lib/style.css'

class ActivityRemoval extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        selectedActivity: "",
        selectedDuration: "",
        selectedDate: ""
      }
    }

    club = localStorage.getItem("Club id")
    data = JSON.parse(localStorage.getItem("data"))

    // handleClick = (selectedRemovalActivity, selectedRemovalDuration, selectedRemovalDate) => {
    //     this.setState({
    //       selectedActivity: selectedRemovalActivity,
    //       selectedDuration: selectedRemovalDuration,
    //       selectedDate: selectedRemovalDate
    //     })
    //     //localStorage.removeItem(this.state)
    // }

  render() {
    return (
      <div>
        hello from ActivityRemoval
        <button type="button" onClick={this.handleClick}>Add</button>
        <table>
        <tr>
          <th>Activity</th>
          <th>Duration</th>
          <th>Date</th>
        </tr>
          {this.data.map((activity) => {
            return <ActivityItem
              activity={activity.selectedActivity}
              duration={activity.selectedDuration}
              date={activity.selectedDate}
              handleClick={this.handleClick}
            />
          })}
        </table>
      </div>
    )
  }
}

export default ActivityRemoval
