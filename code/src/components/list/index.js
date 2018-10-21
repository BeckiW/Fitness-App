import React from "react"
import Activity from "../activity"
import Calendar from "../calendar"
import 'react-day-picker/lib/style.css'

class List extends React.Component {

  activityList = ["swim", "hike", "gym"]
  durationList = ["30 mins", "1 hour", "2 hours", "4 hours", "8 hours"]

  state = {
      data: [],
      swimData: [],
      hikeData: [],
      gymData: []
  }

  addEntry = (selectedEntry) => {
    const data = this.state.data
    data.push(selectedEntry)
    this.setState({
      data
    }, this.filterData)
  }

  filterData = () => {
    const swimData = this.state.data.filter((activity) => (
      activity.selectedActivity === "swim"
    )).map((activity) => (
      activity.selectedDate
    ))
    const hikeData = this.state.data.filter((activity) => (
      activity.selectedActivity === "hike"
    )).map((activity) => (
      activity.selectedDate
    ))
    const gymData = this.state.data.filter((activity) => (
      activity.selectedActivity === "gym"
    )).map((activity) => (
      activity.selectedDate
    ))
    this.setState({
      swimData,
      hikeData,
      gymData
    })
  }

  render() {
    return(
      <div>
        <p>Parent</p>
        <Activity
          activityList={this.activityList}
          durationList={this.durationList}
          onClick={this.addEntry}
        />
        <Calendar
          data={this.state.data}
          swimData={this.state.swimData}
          hikeData={this.state.hikeData}
          gymData={this.state.gymData}
        />
      </div>
    )
  }

}

export default List
