import React from "react"
import Activity from "../activity"
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class Calendar extends React.Component {

  render(){
    return (
      <div>
      Hello
      {console.log(this.activityList)}
      </div>
    )
  }
}

export default Calendar
