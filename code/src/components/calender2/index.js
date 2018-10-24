import React from 'react'
import { render } from 'react-dom'
import Stats from '../stats'
import { ResponsiveCalendar } from '@nivo/calendar'
import './style.css'

const colors = ['#fae04d', '#ff744c', '#789792', '#b1646a', '#efa9a1', '#8470c7', '#97a66f']

  const Calender = (props) => (

    <div className="calendarContainer">
      <ResponsiveCalendar
          data={props.calendarData}
          from="2018-01-01"
          to="2018-12-31"
          emptyColor="#eeeeee"
          colors={[
              "#61cdbb",
              "#97e3d5",
              "#e8c1a0",
              "#f47560"
          ]}
          margin={{
              "top": 40,
              "right": 0,
              "bottom": 10,
              "left": 30
          }}
          monthBorderColor="#ffffff"
          monthLegendOffset={10}
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
          tooltip = {(data) => {
            if ( data.value == 100 ) {
              return (<p>{data.day}: Swimming</p>)
            } else if ( data.value == 200 ) {
              return (<p>{data.day}: Hiking</p>)
            } else if ( data.value == 300 ) {
              return (<p>{data.day}: Gym</p>)
            }

            return (<p>{data.day}: Multiple Activities</p>)
          }}
      />
    </div>
  )

  export default Calender
