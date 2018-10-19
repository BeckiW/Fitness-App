import React from "react"
import Activity from "../activity"
import Calendar from "../calendar"
import 'react-day-picker/lib/style.css'

class List extends React.Component {

  activityList = ["swim", "run", "cycle", "hike", "tennis", "team"]
  durationList = ["30 mins", "1 hour", "2 hours", "4 hours", "8 hours"]

  state = {
      data: [],
      swimData: []
  }

  addEntry = (selectedEntry) => {
    const data = this.state.data
    data.push(selectedEntry)
    this.setState({
      data
    }, this.filterSwimData)
  }

  filterSwimData = () => {
    const swimData = this.state.data.filter((activity) => (
      activity.selectedActivity === "swim"
    )).map((activity) => (
      activity.selectedDate
    ))
    this.setState({
      swimData
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
        <Calendar data={this.state.data} swimData={this.state.swimData} />
      </div>
    )
  }

}

export default List
