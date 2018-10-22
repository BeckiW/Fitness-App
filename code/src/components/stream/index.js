import React from 'react'
import { ResponsiveStream } from '@nivo/stream'
import { patternDotsDef } from '@nivo/core'
import { generateCountriesData } from '@nivo/generators'
import "./index.css"

const Stream = () => (
    <div className="stream-graph">
        <ResponsiveStream
            margin={{
                top: 10,
                right: 15,
                bottom: 1.5,
                left: 1.5,
            }}
            data={[
              {
                "swim": 0,
                "hike": 0,
                "gym": 48,
                "cycle": 14,
                "run": 15
              },
              {
                "swim": 0,
                "hike": 164,
                "gym": 0,
                "cycle": 0,
                "run": 25
              },
              {
                "swim": 0,
                "hike": 14,
                "gym": 0,
                "cycle": 0,
                "run": 5
              },
              {
                "swim": 26,
                "hike": 0,
                "gym": 23,
                "cycle": 0,
                "run": 35
              }
            ]}
            keys={['swim', 'hike', 'gym', 'cycle', 'run']}
            offsetType="none"
            colors={['#96ceb4', '#ffeead', '#ff6f69', '#ffcc5c', '#88d8b0']}
            enableGridX={false}
            enableGridY={false}
            axisBottom={null}
            isInteractive={true}
            animate={false}
            borderWidth={0}
            borderColor="#000000"
            defs={[patternDotsDef('pattern')]}
        />
        <div className="Title">STREAM</div>
    </div>
)

export default Stream
