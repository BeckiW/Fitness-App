import React from 'react'
import { ResponsiveBubble } from '@nivo/circle-packing'
import Stats from '../stats'
import { generateCountriesData } from '@nivo/generators'

const colors = ['#fae04d', '#ff744c', '#789792', '#b1646a', '#efa9a1', '#8470c7', '#97a66f']

const BubbleMonth = (props) => (

    <div className="graphBox bubbleContainer">
    <h2>Your total hours by activity this month </h2>
        <ResponsiveBubble
            root={{
                data: 'root',
                children: [
                  {"name": "swim",
                  "value": props.swimMonthTime},
                  {"name": "hike",
                  "value": props.hikeMonthTime},
                  {"name": "gym",
                  "value": props.gymMonthTime},
                  {"name": "run",
                  "value": props.runMonthTime},
                  {"name": "cycle",
                  "value": props.cycleMonthTime},
                  {"name": "other",
                  "value": props.otherMonthTime}
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

export default BubbleMonth
