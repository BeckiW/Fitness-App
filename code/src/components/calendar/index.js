import React from "react"
import List from "../list"
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class Calendar extends React.Component {



  modifiers = {
  swim: [new Date(2018, 9, 9), new Date(2018, 9, 21)],
  hike: new Date(2018, 9, 17),
  }

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
      <DayPicker
        modifiers={this.modifiers}
        modifiersStyles={this.modifiersStyles}
      />
      </div>
    )
  }
}

export default Calendar
