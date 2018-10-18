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

  render() {
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
