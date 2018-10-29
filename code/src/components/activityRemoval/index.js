import React from "react"
import ActivityItem from "../activityItem"
import { Link } from 'react-router-dom'
import 'react-day-picker/lib/style.css'

class ActivityRemoval extends React.Component {

  state = {
    showList: false,
    club: localStorage.getItem("Club id"),
    data: localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
  }

  showActivities = () => {
    this.setState({
      showList: !this.state.showList
    })
  }

  handleClick = (selectedDate, selectedActivity, selectedDuration) => {
    this.props.handleClick(selectedDate, selectedActivity, selectedDuration)
  }

  render() {
    console.log(this.props.data)
    return (
      <div>
        <button type="button" onClick={this.showActivities}>Show all activities</button>
        <div className={this.state.showList ? "" : "activityTable"}>
          <p>Click on an activity below to remove it</p>
          <table>
              {this.props.data.map((activity) => {
                return <ActivityItem
                  activity={activity.selectedActivity}
                  duration={activity.selectedDuration}
                  date={activity.selectedDate}
                  handleClick={this.handleClick}
                />
              })}
          </table>
        </div>
      </div>
    )
  }
}

export default ActivityRemoval
