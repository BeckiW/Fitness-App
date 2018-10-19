import React from "react"
import List from "../list"
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
  }

  render(){
    return (
      <div>
      {this.props.swimData}
      {this.props.data}
      <DayPicker
        modifiers={{
          swim: [new Date(2018, 9, 9), new Date(2018, 9, 21)],
          hike: this.props.swimData,
        }}
        modifiersStyles={this.modifiersStyles}
      />
      </div>
    )
  }
}

export default Calendar
