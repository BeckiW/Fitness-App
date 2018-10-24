import React from 'react'
import { render } from 'react-dom'
import Stats from '../stats'
import { ResponsiveCalendar } from '@nivo/calendar'
import './style.css'

const colors = ['#fae04d', '#ff744c', '#789792', '#b1646a', '#efa9a1', '#8470c7', '#97a66f']

  const Calender = (props) => (
      <div className = "containerCalender">

  // make sure parent container have a defined height when using responsive component,
  // otherwise height will be 0 and no chart will be rendered.
  // website examples showcase many properties, you'll often use just a few of them.
  render((
      <ResponsiveCalendar
          data={
            [
              {
                "day": "2018-05-19",
                "value": "swim",
                "value": "hike"
              },
              {
                "day": "2018-10-31",
                "value": "gym",
                "value": "hike"

              },
              {
                "day": "2018-04-23",
                "value": "hike",
                "value": "gym"
              },
              {
                "day": "2018-04-14",
                "value": "hike"
              },
              {
                "day": "2018-04-30",
                "value": "swim",
                "value": "gym"
              },
              {
                "day": "2018-12-11",
                "value": "gym",
                "value": "hike"
              },
              {
                "day": "2018-04-10",
                "value": "gym",
                "value": "swim"
              }]



          }
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
              "top": 100,
              "right": 30,
              "bottom": 60,
              "left": 30
          }}
          yearSpacing={40}
          monthBorderColor="#ffffff"
          monthLegendOffset={10}
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
          legends={[
              {
                  "anchor": "bottom-right",
                  "direction": "row",
                  "translateY": 36,
                  "itemCount": 4,
                  "itemWidth": 34,
                  "itemHeight": 36,
                  "itemDirection": "top-to-bottom"
              }
          ]}
      />
  )

          <div className="Title">Calendar</div>
      </div>
  )

  export default Calender
