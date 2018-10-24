import React from 'react'
import { ResponsiveBubble } from '@nivo/circle-packing'
import Stats from '../stats'
import { generateCountriesData } from '@nivo/generators'
import './style.css'


  const Bubble = (props) => (
      <div className = "containerBubble">
          <ResponsiveBubble
              root={{
                  data: 'root',
                  children: [{"name": "swim",
                              "value": props.swimTime},
                              {"name": "hike",
                              "value": props.hikeTime}, {"name": "gym",
                                                        "value": props.gymTime}]
              }}
              identity="name"
              value="value"
              leavesOnly={true}
              colors={['#901dd2', '#5493ff', '#37c670']}
              labelTextColor="#000"
              labelTextFont=''
              labelSkipRadius={12}
              colorBy="name"
              borderWidth={0}
              borderColor="#000"
              padding={6}
              isInteractive={true}
          />
          <div className="Title">BUBBLE</div>
      </div>
  )

  export default Bubble
