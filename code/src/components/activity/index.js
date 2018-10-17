import React from "react"
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css'

class Activity extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        presets: {
          activity: ["swim", "run", "cycle", "hike", "tennis", "team"],
          duration: ["30 mins", "1 hour", "2 hours", "4 hours", "8 hours"]
        },
        entryLog: []
      }
    }


    addEntry = (day) => {
      this.setState({
        entryLog: this.state.entryLog.push(day)
      })
      console.log(this.state.entryLog)
    }



  render() {
    return (
      <div>

      <p>Activity</p>
      <select>
        {this.state.presets.activity.map((activity) => {
          return (<option key={activity} value={activity}>{activity}</option>
          )
        })}
      </select>

      <p>Duration</p>
      <select>
        {this.state.presets.duration.map((duration) => {
          return (<option key={duration} value={duration}>{duration}</option>
          )
        })}
      </select>

      <p>Date</p>
      <DayPickerInput onDayChange={day => this.addEntry(day)} />

      </div>
    )
  }

}

export default Activity
