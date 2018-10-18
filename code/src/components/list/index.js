import React from "react"
import Activity from "../activity"
import Calendar from "../calendar"
import 'react-day-picker/lib/style.css'

class List extends React.Component {

  activityList = ["swim", "run", "cycle", "hike", "tennis", "team"]
  durationList = ["30 mins", "1 hour", "2 hours", "4 hours", "8 hours"]

  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  addEntry = (selectedEntry) => {
    let data = this.state.data
    data.push(selectedEntry)
    this.setState({
      data: data
    })
  }

  fakeData = [
    {
      "selectedActivity": "swim",
      "selectedDuration": "1 hour",
      "selectedDate": new Date(2018, 9, 9)
    },
    {
      "selectedActivity": "hike",
      "selectedDuration": "5 hour",
      "selectedDate": new Date(2018, 9, 12)
    },
    {
      "selectedActivity": "swim",
      "selectedDuration": "1 hour",
      "selectedDate": new Date(2018, 9, 19)
    },
    {
      "selectedActivity": "swim",
      "selectedDuration": "1 hour",
      "selectedDate": new Date(2018, 9, 27)
    }
  ]

  swimArray = {fakeData.map((activity) => {
      if(activity.selectedActivity === "swim") {
        return activity.selectedDate
      }
    })}

  render() {
    console.log(this.state.data.selectedDate)
    return(
      <div>
        <p>Parent</p>
        <Activity
          activityList={this.activityList}
          durationList={this.durationList}
          onClick={this.addEntry}
        />
        <Calendar data={this.state.data} />
      </div>
    )
  }

}

export default List
