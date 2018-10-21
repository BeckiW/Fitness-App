import React from "react"
import { Link } from 'react-router-dom'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class Calendar extends React.Component {

  modifiersStyles = {
    swim: {
      color: 'white',
      backgroundColor: '#ffc107',
    },
    hike: {
      color: 'white',
      backgroundColor: 'pink',
    },
    gym: {
      color: 'white',
      backgroundColor: 'lightblue',
    }
  }

  render(){
    return (
      <div>
      <DayPicker
        modifiers={ {
          swim: (this.props.swimData.map((date) => { return new Date(date)})),
          hike: (this.props.hikeData.map((date) => { return new Date(date)})),
          gym: (this.props.gymData.map((date) => { return new Date(date)}))
        } }
        modifiersStyles={this.modifiersStyles}
      />
      <Link to="/activity">Add an activity</Link>
      </div>
    )
  }
}

export default Calendar
