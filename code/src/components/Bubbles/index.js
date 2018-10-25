import React from 'react'
import { ResponsiveBubble } from '@nivo/circle-packing'
import Stats from '../stats'
import { generateCountriesData } from '@nivo/generators'

const colors = ['#fae04d', '#ff744c', '#789792', '#b1646a', '#efa9a1', '#8470c7', '#97a66f']

const Bubble = (props) => (
    <div className="graphBox">
        <ResponsiveBubble
            root={{
                data: 'root',
                children: [
                  {"name": "swim",
                  "value": props.swimTime},
                  {"name": "hike",
                  "value": props.hikeTime},
                  {"name": "gym",
                  "value": props.gymTime},
                  {"name": "run",
                  "value": props.runTime},
                  {"name": "cycle",
                  "value": props.cycleTime},
                  {"name": "other",
                  "value": props.otherTime}
                ]
            }}
            identity="name"
            value="value"
            leavesOnly={true}
            colors={colors}
            labelTextColor="#000"
            labelTextFont=''
            labelSkipRadius={12}
            colorBy="name"
            borderWidth={0}
            borderColor="#000"
            padding={6}
            isInteractive={true}
        />
    </div>
)

export default Bubble
